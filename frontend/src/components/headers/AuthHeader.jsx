import React from "react";
import { APP_NAME } from "../../config";
import { AuthContext } from "../../context/AuthContext";

export default function AuthHeader({ currentRoute }) {
  const { routeText } = React.useContext(AuthContext);
  return (
    <header className="h-16 border-b pl-64">
      <div className="flex items-center h-full w-full px-8">
        <div className="font-nunito">
          <span className="text-[22px]">{routeText}</span>
        </div>
      </div>
    </header>
  );
}
