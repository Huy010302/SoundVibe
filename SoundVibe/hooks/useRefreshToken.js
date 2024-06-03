import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";

const useRefreshToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("token");
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getToken();
  }, []);

  useEffect(() => {
    if (token) {
      const intervalId = setInterval(async () => {
        try {
          // Call API to refresh the token
          const newToken = await refreshTokenAPI();
          setToken(newToken);
          await AsyncStorage.setItem("token", newToken);
        } catch (error) {
          console.error(error);
        }
      }, 5 * 60 * 1000);

      return () => clearInterval(intervalId);
    }
  }, [token]);

  return null;
};

export default useRefreshToken;
