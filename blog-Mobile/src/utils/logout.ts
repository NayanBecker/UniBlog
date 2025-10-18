import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export async function logout() {
  await AsyncStorage.multiRemove(["token", "id_Perfil"]);
  router.replace("/(auth)/login");
}
