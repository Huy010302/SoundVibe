import {
  updatePassword,
  createNewAccount,
  loginWithAppLocalAccount,
  logoutApp,
} from "../../libs";
export const authApi = {
  register: async (info) => {
    try {
      const data = await createNewAccount(info);
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
  login: async (email, password) => {
    try {
      const data = await loginWithAppLocalAccount(email, password);
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
  logout: async (id, token) => {
    try {
      const data = await logoutApp(id, token);
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
  changePassword: async (id, token, newPassword) => {
    try {
      const data = await updatePassword(id, token, newPassword);
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
};
