import React from "react";
import AuthHeader from "../../components/headers/AuthHeader";
import AuthLayout from "../../components/layouts/AuthLayout";
import { AuthContext } from "../../context/AuthContext";

export default function Blogs() {
  const { setRouteText } = React.useContext(AuthContext);
  React.useEffect(() => {
    setRouteText("Dashboard");
  });
  return (
    <>
      <AuthLayout>
        <main className="pl-64">blogs</main>
      </AuthLayout>
    </>
  );
}
