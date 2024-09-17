import React from "react";
import { Link } from "react-router-dom";
import { APP_NAME } from "../../config";

function GuestHeader() {
  return (
    <header className="sticky h-16 border-b-2 top-0 right-0 left-0">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto w-full h-full">
        <div className="font-nunito">
          <span className="text-[22px]">{APP_NAME}</span>
        </div>
        <ul className="flex items-center gap-5">
          <li>Sign in</li>    
          <li>
            <Link to={"/signin"}>
              <h1 className="p-2 bg-black/[0.9] hover:bg-black text-white rounded">
                Get Started
              </h1>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default GuestHeader;
