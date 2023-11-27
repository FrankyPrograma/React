import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider
      // Esto es lo que vamos a compartir a cualquier hijo del provider
      value={{ user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
