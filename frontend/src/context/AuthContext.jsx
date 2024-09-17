import React from "react";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [routeText, setRouteText] = React.useState("");
  const [sidebar, setSidebar] = React.useState(true);
  console.log("routeText: ", routeText);
  return (
    <AuthContext.Provider value={{ routeText, sidebar, setSidebar, setRouteText }}>
      {children}
    </AuthContext.Provider>
  );
}
