import { Outlet } from "react-router-dom";
import "./DPageLayout.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { Headbar } from "../Headbar/Headbar";

export const DPageLayout = () => {
  return (
    <>
      <div className="Dashboard">
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="head-with-body">
          <div className="headBar">
            <Headbar />
          </div>
          <div className="dashboard-body">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
