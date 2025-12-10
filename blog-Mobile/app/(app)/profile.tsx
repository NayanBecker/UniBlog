import { api } from "@/src/services/api";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    FlatList
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavBar from "../../src/components/navBarComponent";
import { ImageProfileComponent } from "@/src/components/ImageProfileComponent";
import { SettingsButton } from "@/src/components/SettingsButton";
import { EditProfileButton } from "@/src/components/EditProfileButton";
import { logout } from "../../src/utils/logout";


type ProfileData = {
    id_Perfil: number;
    nome_Perfil: string;
    email_Perfil: string;
    descricao_Perfil: string | null;
    foto_Perfil: string | null;
    tipo_Perfil: "PESSOAL" | "EMPRESARIAL" | string;
    semestre_Perfil: number;
    curso: {
        id_Curso: number;
        nome_Curso: string;
    };
};

type PostData = {
    id_Post: number;
    title_Post?: string | null;
    content_Post?: string | null;
    image_Post?: string | null;
    createdAt_Post: string;
    T_Perfil: {
        id_Perfil: number;
        nome_Perfil: string;
        foto_Perfil: string | null;
    };
    T_PostInteracaoCapa: {
        id_PIC: number;
        visualizacao_PIC: any[];
        curtidas_PIC: any[];
        comentarios_PIC: any[];
    };
};

export default function ProfileScreen() {
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [posts, setPosts] = useState<PostData[]>([]);
    const [loading, setLoading] = useState(true);
    const [postsLoading, setPostsLoading] = useState(false);

    useEffect(() => {
        async function fetchProfileAndPosts() {
            try {
                const token = await AsyncStorage.getItem("token");
                const idPerfil = await AsyncStorage.getItem("id_perfil");

                if (!token || !idPerfil) {
                    console.warn("Nenhum token ou id_perfil encontrado.");
                    return;
                }

                const response = await api.get("/profile/get", {
                    headers: { id_Perfil: idPerfil },
                });

                const data: ProfileData = response.data;
                setProfile(data);

                await fetchUserPosts(data.id_Perfil);

            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    console.error("Erro ao buscar perfil e posts:", error.response?.data || error.message);
                } else {
                    console.error("Erro desconhecido:", error);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchProfileAndPosts();
    }, []);




    const fetchUserPosts = async (userId: number) => {
        try {
            setPostsLoading(true);
            const token = await AsyncStorage.getItem("token");

            const response = await api.get("/posts/get", {
                headers: {
                    id_Perfil: String(userId),
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const postsData: PostData[] = response.data;

            const sorted = postsData.slice().sort((a, b) => {
                const aDate = a.createdAt_Post ? Date.parse(String(a.createdAt_Post)) : NaN;
                const bDate = b.createdAt_Post ? Date.parse(String(b.createdAt_Post)) : NaN;

                if (!Number.isNaN(aDate) && !Number.isNaN(bDate)) {
                    return bDate - aDate;
                }

                return (b.id_Post ?? 0) - (a.id_Post ?? 0);
            });

            setPosts(sorted);
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
                setPosts([]);
                return;
            }
        } finally {
            setPostsLoading(false);
        }
    };



    const PostCard = ({ post }: { post: PostData }) => {
        const curtidas = post.T_PostInteracaoCapa?.curtidas_PIC?.length ?? 0;
        const comentarios = post.T_PostInteracaoCapa?.comentarios_PIC?.length ?? 0;

        return (
            <View style={styles.postContainer}>

                {/* Card do post */}
                <View style={styles.card}>

                    {post.title_Post && (
                        <Text style={styles.postTitle}>{post.title_Post}</Text>
                    )}

                    {post.content_Post && (
                        <Text style={styles.contentText}>{post.content_Post}</Text>
                    )}

                    {post.image_Post && (
                        <Image
                            source={{ uri: post.image_Post }}
                            style={styles.postImage}
                            resizeMode="cover"
                        />
                    )}

                    {/* Nome do autor */}
                    <Text style={styles.authorText}>{post.T_Perfil.nome_Perfil}</Text>
                </View>
            </View>
        );
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#FFFFFF" />
            </View>
        );
    }

    if (!profile) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Erro ao carregar perfil</Text>

                <TouchableOpacity
                    style={{
                        marginTop: 20,
                        backgroundColor: "#e53935",
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 8,
                    }}
                    onPress={logout} // 👈 chama a função do utils/logout.ts
                >
                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                        Fazer logout
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }


    return (
        <View style={{ flex: 1 }}>

            <SettingsButton />

            <FlatList
                data={posts}
                keyExtractor={(item) => String(item.id_Post)}
                renderItem={({ item }) => <PostCard post={item} />}
                numColumns={2}
                columnWrapperStyle={styles.row}
                ListHeaderComponent={
                    <>
                        {/* Header com dados do perfil */}
                        <View style={styles.header}>
                            <ImageProfileComponent
                                name={profile.nome_Perfil}
                                photoUrl={profile.foto_Perfil?.trim() || null}
                                size={130}
                            />
                        </View>

                        <View style={styles.postsSection}>

                            <EditProfileButton
                                profile={profile}
                                onProfileUpdated={() => fetchUserPosts(profile.id_Perfil)}
                            />

                            {/* Nome e email */}
                            <Text style={styles.title}>{profile.nome_Perfil}</Text>
                            <Text style={styles.subtitle}>{profile.email_Perfil}</Text>

                            {/* Biografia */}
                            <View style={styles.bioCard}>
                                <Text style={styles.bioTitle}>Biografia</Text>
                                <Text style={styles.bioText}>
                                    {profile.curso?.nome_Curso} · {profile.semestre_Perfil}º semestre
                                </Text>
                                <Text style={styles.bioText}>
                                    {profile.descricao_Perfil || "Sem descrição ainda..."}
                                </Text>
                            </View>

                            <Text style={styles.sectionTitle}>Posts</Text>
                        </View>
                    </>
                }
                ListEmptyComponent={
                    !postsLoading ? (
                        <Text style={styles.noPosts}>Nenhum post publicado ainda</Text>
                    ) : null
                }
                ListFooterComponent={<View style={{ height: 80 }} />}
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: "#23A7F5" }}
            />

            <NavBar />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#23A7F5",
        alignItems: "center",
    },

    scrollContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "#23A7F5",
    },

    header: {
        alignItems: "center",
        paddingTop: 60,
        paddingBottom: 10,
    },

    title: {
        alignSelf: "center",
        fontSize: 40,
        fontFamily: "Khula-Regular",
        fontWeight: "bold",
        color: "#495364",
        marginTop: 10,
    },

    subtitle: {
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "#818181",
        textAlign: "center",
        marginBottom: 4,
    },

    bioCard: {
        marginTop: 15,
        marginBottom: 20,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 3,
    },

    bioTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#495364",
        fontFamily: "Montserrat",
        marginBottom: 4,
    },

    bioText: {
        fontSize: 14,
        color: "#495364",
        fontFamily: "Montserrat",
        marginBottom: 2,
    },

    postsSection: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 30,
        backgroundColor: "#E7F7FF",
        borderRadius: 20,
        marginHorizontal: 15,
        marginBottom: 20,
    },

    row: {
        justifyContent: "space-between",
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#0378BD",
        textAlign: "center",
        fontFamily: "Montserrat",
    },

    postContainer: {
        marginBottom: 20,
        width: "48%",
        position: "relative",
    },

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 5,
        paddingTop: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },

    postTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 8,
        marginBottom: 8,
        color: "#212121",
        fontFamily: "Khula-Regular",
    },

    contentText: {
        fontSize: 12,
        lineHeight: 20,
        marginBottom: 8,
        marginLeft: 10,
        fontFamily: "Montserrat-Regular",
        color: "#000",
    },

    postImage: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 12,
    },

    authorText: {
        fontWeight: "bold",
        fontSize: 14,
        marginLeft: 5,
        marginTop: 8,
        marginBottom: 4,
        color: "#495364",
        fontFamily: "Montserrat-Regular",
    },

    noPosts: {
        textAlign: "center",
        color: "#888",
        fontSize: 16,
        marginVertical: 20,
    },
});
