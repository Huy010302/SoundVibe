import axios from "axios";
import { SERVER_API_URL } from "./../configs";

export const loginWithAppLocalAccount = async (email, password) => {
  const { data } = await axios.post(`${SERVER_API_URL}/login`, {
    email,
    password,
  });

  return data;
};

export const logoutApp = async (id, token) => {
  const { data } = await axios.get(`${SERVER_API_URL}/logout/${id}`, {
    headers: {
      token: `Bearer ${token}`,
    },
  });
  return data;
};

export const updatePassword = async (id, token, password) => {
  const { data } = await axios.post(
    `${SERVER_API_URL}/changepassword/${id}`,
    {
      password,
    },
    {
      headers: {
        token: `Bearer ${token}`,
      },
    }
  );
  return data;
};
