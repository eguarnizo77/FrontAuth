import { useState, useCallback } from "react";

const useAuth = () => {  
  const [user, setUser] = useState(() => JSON.parse(window.sessionStorage.getItem("user")));

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
  
  return {
    isLogged: Boolean(user),
    user: user ? user : {},
    login,
    logout,
  };
};

export default useAuth;
