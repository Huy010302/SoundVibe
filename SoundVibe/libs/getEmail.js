import { getDataToAsyncStorage } from "./asyncStorage";

// get email if it exist in async storage
export const getEmail = async () => {
  const account = await getDataToAsyncStorage("acc");
  if (!account) return "";
  return account.email;
};
