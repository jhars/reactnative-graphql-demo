import React, { ReactNode, createContext, useState } from "react";
import { CurrentUser } from "../data/types";

const emptyCurrentUser: CurrentUser = {
  id: "",
  email: "",
  preferred_username: "",
};

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export const UserContext = createContext({
  user: emptyCurrentUser,
  setUser: (user: CurrentUser) => {},
});
export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState(emptyCurrentUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
