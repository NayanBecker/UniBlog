import { api } from "../../src/services/api";
import NavBar from "../../src/components/navBarComponent";
import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet, TouchableOpacity } from "react-native";
import { formatTimeAgo } from "@/src/constants/calculateTimeAgo";
import { ImageProfileComponent } from "@/src/components/ImageProfileComponent";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useRouter } from "expo-router";

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


export default function Feed() {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function loadFeed() {
            try {
                const res = await api.get("/posts/");
                setPosts(res.data);
            } catch (err: any) {
                console.log("Erro ao carregar feed:", err.message);
            } finally {
                setLoading(false);
            }
        }
        loadFeed();
    }, []);


    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator />
                <Text>Carregando posts...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>UniBlog</Text>
            <FlatList
                data={posts}
                keyExtractor={(item) => String(item.id_Post)}
                contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}
                renderItem={({ item }) => (
                    <View style={styles.postContainer}>
                        <View style={styles.card}>
                            {/* Titulo*/}
                            {item.title_Post && (
                                <Text style={styles.postTitle}>{item.title_Post}</Text>
                            )}


                            {/* Conteudo do post */}
                            {item.content_Post && (
                                <Text style={styles.contentText}>{item.content_Post}</Text>
                            )}

                            {/* Imagem do post */}
                            {item.image_Post && (
                                <Image
                                    source={{ uri: item.image_Post }}
                                    style={styles.postImage}
                                    resizeMode="cover"
                                />
                            )}
                            {/* autor */}
                            <Text style={styles.authorText}>
                                {item.T_Perfil?.nome_Perfil} - {formatTimeAgo(item.createdAt_Post)}
                            </Text>

                        </View>

                        <View style={styles.profileImageContainer}>
                            <ImageProfileComponent
                                name={item.T_Perfil.nome_Perfil}
                                photoUrl={item.T_Perfil?.foto_Perfil}
                            />
                        </View>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>Nenhum post encontrado.</Text>}
            />
            <View style={styles.PostPopUp}>
                <TouchableOpacity onPress={() => router.push("/(app)/create-post")}>
                    <Ionicons name="add-circle" size={70} color="#0378BD" />
                </TouchableOpacity>
            </View>

            <NavBar />
        </View>
    );
}

const styles = StyleSheet.create({
    PostPopUp: {
        position: 'absolute',
        bottom: 80,
        right: 5,
    },
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#23A7F5",
    },
    loadingText: {
        marginTop: 10,
        color: '#FFFFFF',
        fontSize: 16,
    },
    container: {
        flex: 1,
        backgroundColor: "#23A7F5",
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center",
        marginTop: 50,
        marginBottom: 10,
    },
    postContainer: {
        marginBottom: 40,
        position: 'relative',
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 10,
        paddingTop: 26,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    profileImageContainer: {
        position: 'absolute',
        top: -25,
        left: -10,
        zIndex: 1,
    },

    postTitle: {
        fontWeight: "bold",
        fontSize: 22,
        marginLeft: 18,
        marginBottom: 8,
        color: '#212121',
        fontFamily: 'Khula-Regular',
    },
    authorText: {
        fontWeight: "bold",
        fontSize: 14,
        marginLeft: 5,
        marginBottom: 4,
        color: "#495364",
        fontFamily: 'Montserrat-Regular',
    },
    contentText: {
        fontSize: 14,
        lineHeight: 24,
        marginBottom: 12,
        marginLeft: 21,
        fontFamily: 'Montserrat-Regular',
        color: '#000000',
    },
    postImage: {
        width: "100%",
        height: 500,
        borderRadius: 8,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
        color: '#FFFFFF',
    }
});