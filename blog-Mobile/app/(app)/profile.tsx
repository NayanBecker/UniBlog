import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavBar from "../../src/components/navBarComponent";
import { ImageProfileComponent } from "@/src/components/ImageProfileComponent";

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

  //📊 Exibir estatísticas simples (Número de posts, curtidas recebidas).

};

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          console.warn("Nenhum token encontrado.");
          return;
        }

        const response = await fetch("http://192.168.3.9:3333/profile/get", {
          method: "GET",
          headers: {
            id_Perfil: (await AsyncStorage.getItem("id_perfil")) || "",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.error("Erro ao buscar perfil:", response.status);
          return;
        }

        const data: ProfileData = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Erro no fetch do perfil:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={styles.center}>
        <Text>Erro ao carregar perfil</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.profileImageContainer}>
          <ImageProfileComponent
            name={profile.nome_Perfil}
            photoUrl={profile.foto_Perfil}
            size={150}
          />
        </View>
        <View style={styles.profileContentContainer}>
        <Text style={styles.name}>{profile.nome_Perfil}</Text>
        <Text style={styles.email}>{profile.email_Perfil}</Text>
        <Text style={styles.description}>{profile.descricao_Perfil}</Text>
        <Text style={styles.course}>
          Curso: {profile.curso?.nome_Curso} - Semestre {profile.semestre_Perfil}
        </Text>
        </View>
      </View>

      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#23A7F5",
  },

  profileImageContainer: {
    position: "absolute",
    top: 65,
    zIndex: 1,
  },

  profileContentContainer: {
    marginTop: 15,
    width: "100%",
    padding: 120,
    borderRadius: 15,
    shadowColor: "#000",
    alignItems: "center",
    backgroundColor: "#E7F7FF",
  },

  name: { fontSize: 20, fontWeight: "bold", marginTop: 170 },
  email: { fontSize: 14, color: "#555", marginTop: 4 },
  description: { marginTop: 10, textAlign: "center", color: "#444" },
  course: { marginTop: 10, fontSize: 14, fontStyle: "italic" },
});