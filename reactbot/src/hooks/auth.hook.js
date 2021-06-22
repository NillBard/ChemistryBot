import { useCallback, useEffect, useState } from "react";

const userStorage = "userData";
export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(
      userStorage,
      JSON.stringify({ userId: id, token: jwtToken })
    );
  }, []);

  const logout = useCallback((userStorage) => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(userStorage);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(userStorage));

    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login]);

  return { login, logout, token, userId };
};
