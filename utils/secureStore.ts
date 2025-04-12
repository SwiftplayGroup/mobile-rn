import * as SecureStore from "expo-secure-store";

export async function saveToken(token: string) {
  await SecureStore.setItemAsync("userToken", token);
}

export async function getToken() {
  const token = await SecureStore.getItemAsync("userToken");
  return token;
}

export async function deleteToken() {
  await SecureStore.deleteItemAsync("userToken");
}
