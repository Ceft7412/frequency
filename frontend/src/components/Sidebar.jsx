import React from "react";
import { APP_NAME } from "../config";
import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbDashboard } from "react-icons/tb";
import { AuthContext } from "../context/AuthContext";
import { IoMdClose } from "react-icons/io";

export default function Sidebar() {
  const { routeText, sidebar, setSidebar } = React.useContext(AuthContext);
  console.log("sideBar: ", sidebar);
  return (
    <div
      className={`${
        sidebar ? " w-64 px-5" : "w-20 px-3"
      } fixed flex flex-col gap-16 left-0 top-0 bottom-0 border-r-2 bg-white py-8  transition-all duration-700`}
    >
      <div className="relative font-nunito px-5 flex items-center justify-between w-full">
        <span className="text-[22px]">{APP_NAME}</span>

        <span
          className="absolute -right-2 cursor-pointer hover:bg-neutral-100 p-2 rounded-full"
          onClick={() => setSidebar(false)}
        >
          <IoMdClose />
        </span>
      </div>
      <ul className="flex flex-col gap-3 text-[18px] w-full">
        <Link to={"/blogs/dashboard"}>
          <li
            className={`${
              routeText === "Dashboard" ? "bg-slate-100" : ""
            } hover:bg-slate-100 w-full rounded-md ${
              sidebar ? "px-5" : "px-1 justify-center"
            }  py-2 transition-colors duration-300 flex items-center gap-3 text-black/[0.90]`}
          >
            <TbDashboard className={`${sidebar ? "text-[26px]" : "text-[37px]"}   `} />
            {sidebar && <span>Dashboard</span>}
          </li>
        </Link>
        <Link to={"/blogs/workspace/create"}>
          <li
            className={`${
              routeText === "Create" ? "bg-slate-100" : ""
            } hover:bg-slate-100 w-full rounded-md px-5  ${
              sidebar ? "px-5" : "px-1 justify-center"
            } py-2 transition-colors duration-300 flex items-center gap-3 text-black/[0.90]`}
          >
            <MdOutlineSpaceDashboard
              className={`${sidebar ? "text-[26px]" : "text-[37px]"}   `}
              q
            />
            {sidebar && <span>Workspace</span>}
          </li>
        </Link>
      </ul>
    </div>
  );
}
