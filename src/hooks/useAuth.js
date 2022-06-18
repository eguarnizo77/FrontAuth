import { useState, useCallback } from "react";

const useAuth = () => {
  const [user, setUser] = useState(() =>
    JSON.parse(window.sessionStorage.getItem("user"))
  );
  const [passwordReset, setPasswordReset] = useState({ form: 1 });

  const login = useCallback(
    (userJwt) => {
      window.sessionStorage.setItem("user", JSON.stringify(userJwt));
      setUser(userJwt);
    },
    [setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
    window.sessionStorage.removeItem("user");
  }, [setUser]);

  const editPasswordReset = useCallback(
    (value) => {
      setPasswordReset(value);
    },
    [setPasswordReset]
  );

  return {
    isLogged: Boolean(user),
    user: user ? user : {},
    passwordReset: passwordReset,
    login,
    logout,
    editPasswordReset,
  };
};

export default useAuth;
