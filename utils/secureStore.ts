import * as SecureStore from "expo-secure-store";
import { getSessionFromToken, logout } from "@/services/api/auth";

export async function saveToken(token: string) {
  await SecureStore.setItemAsync("userToken", token);
}

export async function getToken() {
  const token = await SecureStore.getItemAsync("userToken");
  return token;
}

export async function deleteToken() {
  const token = await getToken();
  if (token) {
    try {
      const session = await getSessionFromToken(token);
      console.log(session);
      if (session) {
        try {
          await logout(session._id, token, session.accountID);
        } catch (error) {
          console.warn(`Session already invalid or expired: ${error}`);
        }
      }
    } catch (error) {
      console.warn(`Could not get session from token: ${error}`);
    }
    await SecureStore.deleteItemAsync("userToken");
  }
}
