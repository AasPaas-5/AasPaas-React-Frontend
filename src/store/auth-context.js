import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  id: null,
  token: null,
});

export default AuthContext;
