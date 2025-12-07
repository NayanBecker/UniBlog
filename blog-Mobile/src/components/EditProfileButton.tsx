import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Modal, View, TextInput, Button, Text, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ImageProfileComponent } from "@/src/components/ImageProfileComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url } from "../services/api";

type Props = {
  profile: {
    id_Perfil: number;
    descricao_Perfil?: string | null;
    foto_Perfil?: string | null;
    nome_Perfil?: string;
  };
  onProfileUpdated: () => void;
};

export function EditProfileButton({ profile, onProfileUpdated }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [descricao, setDescricao] = useState(profile.descricao_Perfil || "");
  const [foto, setFoto] = useState(profile.foto_Perfil || "");
  const [idPerfil, setIdPerfil] = useState<number | null>(null);

  useEffect(() => {
    async function loadIdPerfil() {
      try {
        const idRaw = await AsyncStorage.getItem("id_perfil");
        if (idRaw) setIdPerfil(parseInt(idRaw, 10));
        else setIdPerfil(profile.id_Perfil);
      } catch (error) {
        console.error("Erro ao carregar id_Perfil:", error);
      }
    }
    loadIdPerfil();
  }, []);

  async function handleSave() {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        Alert.alert("Erro", "Usuário não autenticado.");
        return;
      }

      if (idPerfil === null) {
        Alert.alert("Erro", "ID do perfil não encontrado.");
        return;
      }

      if (descricao.length > 200) {
        Alert.alert("Erro", "A descrição deve ter no máximo 200 caracteres.");
        return;
      }

      const allowedFormats = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
      if (foto && foto.startsWith("file://")) {
        const fileName = foto.split("/").pop() || "foto.jpg";
        const fileType =
          fileName.endsWith(".png") ? "image/png" :
            fileName.endsWith(".webp") ? "image/webp" :
              "image/jpeg";

        if (!allowedFormats.includes(fileType)) {
          Alert.alert("Erro", "Formato de imagem inválido. Aceito: JPG, JPEG, PNG, WEBP.");
          return;
        }
      }

      const formData = new FormData();
      formData.append("id_perfil", String(idPerfil));
      formData.append("descricao_Perfil", descricao || "");

      if (foto && foto.startsWith("file://")) {
        const fileName = foto.split("/").pop() || "foto.jpg";
        const fileType =
          fileName.endsWith(".png") ? "image/png" :
            fileName.endsWith(".webp") ? "image/webp" :
              "image/jpeg";

        formData.append("foto_Perfil", {
          uri: foto,
          name: fileName,
          type: fileType,
        } as any);
      }

      const response = await fetch(`${url}/profile/update`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao atualizar perfil");
      }

      onProfileUpdated();
      setModalVisible(false);
      Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
    } catch (error: any) {
      console.error("❌ Erro ao atualizar perfil:", error);
      Alert.alert("Erro", error.message || "Não foi possível atualizar o perfil.");
    }
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Feather name="edit-3" size={24} color="#0378BD" />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Editar Perfil</Text>

            <ImageProfileComponent
              name={profile.nome_Perfil}
              photoUrl={foto}
              size={100}
              editable
              onPhotoChange={(uri) => setFoto(uri)}
            />

            <Text style={styles.label}>Descrição</Text>
            <TextInput
              value={descricao}
              onChangeText={setDescricao}
              placeholder="Digite uma nova descrição"
              style={styles.input}
              multiline
            />

            <View style={styles.actions}>
              <Button title="Cancelar" color="#999" onPress={() => setModalVisible(false)} />
              <Button title="Salvar" color="#0378BD" onPress={handleSave} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 10,
    backgroundColor: "#E7F7FF",
    padding: 10,
    borderRadius: 20,
    elevation: 3,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "85%",
    padding: 20,
    borderRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  label: {
    fontWeight: "500",
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginTop: 5,
    minHeight: 60,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
