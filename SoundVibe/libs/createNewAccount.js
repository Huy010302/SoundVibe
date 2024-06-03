import axios from "axios";
import { SERVER_API_URL } from "./../configs/index";

export const createNewAccount = async (info) => {
  const { data } = await axios.post(`${SERVER_API_URL}/register`, {
    name: info.fullname,
    email: info.email,
    password: info.password,
  });
  return data;
};
