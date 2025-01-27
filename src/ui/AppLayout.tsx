import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="grid grid-flow-col grid-cols-12 grid-rows- h-dvh">
      <Navbar />
      <div className="row-span-11 col-span-11 h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
