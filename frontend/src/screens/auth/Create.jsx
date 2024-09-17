import React from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { AuthContext } from "../../context/AuthContext";

export default function Create() {
  const { setRouteText } = React.useContext(AuthContext);
  React.useEffect(() => {
    setRouteText("Create");
  });
  return (
    <>
      <AuthLayout>
        <main className="ml-64 ">create</main>
      </AuthLayout>
    </>
  );
}
