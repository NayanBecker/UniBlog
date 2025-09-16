import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import { api } from "../src/services/api";

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
};


export default function Feed() {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [loading, setLoading] = useState(true);

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
        <View style={{ flex: 1, padding: 16 }}>
            <FlatList
                data={posts}
                keyExtractor={(item) => String(item.id_Post)} // 👈 agora usa id_Post
                renderItem={({ item }) => (
                    <View
                        style={{
                            marginBottom: 16,
                            padding: 12,
                            borderWidth: 1,
                            borderRadius: 8,
                            borderColor: "#ccc",
                        }}
                    >
                        {/* autor */}
                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                            {item.T_Perfil?.foto_Perfil ? (
                                <Image
                                    source={{ uri: item.T_Perfil.foto_Perfil }}
                                    style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }}
                                />
                            ) : null}
                            <Text style={{ fontWeight: "bold" }}>{item.T_Perfil?.nome_Perfil}</Text>
                        </View>

                        {/* título */}
                        {item.title_Post ? (
                            <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 4 }}>
                                {item.title_Post}
                            </Text>
                        ) : null}

                        {/* conteúdo */}
                        {item.content_Post ? (
                            <Text style={{ fontSize: 14, marginBottom: 8 }}>{item.content_Post}</Text>
                        ) : null}

                        {/* imagem */}
                        {item.image_Post ? (
                            <Image
                                source={{ uri: item.image_Post }}
                                style={{ width: "100%", height: 200, borderRadius: 8 }}
                                resizeMode="cover"
                            />
                        ) : null}

                        {/* data */}
                        <Text style={{ fontSize: 12, color: "gray", marginTop: 8 }}>
                            {new Date(item.createdAt_Post).toLocaleDateString("pt-BR")}
                        </Text>
                    </View>
                )}
                ListEmptyComponent={<Text>Nenhum post encontrado.</Text>}
            />


        </View>
    );
}
