import { createContext, useState, useEffect } from "react";
import { getAccessToken, getUserLogged } from "../utils/network_data";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    if (getAccessToken()) {
      const { error, data } = await getUserLogged();
      if (!error) setUser(data);
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
}
