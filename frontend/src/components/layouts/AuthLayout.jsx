import React from "react";
import Sidebar from "../Sidebar";
import AuthHeader from "../headers/AuthHeader";
import { AuthContext } from "../../context/AuthContext";

export default function AuthLayout({ children }) {
  const [currentRoute, setCurrentRoute] = React.useState("");
  const { sidebar } = React.useContext(AuthContext);
  return (
    <div className={`${sidebar ? "ml-64" : "ml-20"} transition-all duration-700`}>
      <Sidebar currentRoute={currentRoute} />
      <AuthHeader />
      {children}
    </div>
  );
}
