import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <>
      <div className="SideBar">
        <div className="SideBar-tag">Board.</div>
        <div className="sideBar-contents mt-5">
          <NavLink to={"/"}>
            <div className="dashboard-tag">
              <img
                className="mx-2"
                src="/dashboard_icon.svg"
                alt=""
              />
              Dashboard
            </div>
          </NavLink>
          <NavLink to={"#"}>
            <div
              style={{
                color: "white",
                fontPalette: "18px",
                fontFamily: "Montserrat",
                fontWeight: "400",
                wordWrap: "break-word",
                marginBottom: "25px",
              }}
            >
              <img
                className="mx-2"
                src="/transaction_icon.svg"
                alt=""
              />
              Transactions
            </div>
          </NavLink>
          <NavLink to={"#"}>
            <div
              style={{
                color: "white",
                fontPalette: "18px",
                fontFamily: "Montserrat",
                fontWeight: "400",
                wordWrap: "break-word",
                marginBottom: "25px",
              }}
            >
              <img className="mx-2" src="/schedule_icon.svg" alt="" />
              Schedules
            </div>
          </NavLink>
          <NavLink to={"#"}>
            <div
              style={{
                color: "white",
                fontPalette: "18px",
                fontFamily: "Montserrat",
                fontWeight: "400",
                wordWrap: "break-word",
                marginBottom: "25px",
              }}
            >
              <img className="mx-2" src="/user_icon.svg" alt="" />
              Users
            </div>
          </NavLink>
          <NavLink to={"#"}>
            <div
              style={{
                color: "white",
                fontPalette: "18px",
                fontFamily: "Montserrat",
                fontWeight: "400",
                wordWrap: "break-word",
                marginBottom: "25px",
              }}
            >
              <img className="mx-2" src="/setting_icon.svg" alt="" />
              Settings
            </div>
          </NavLink>
        </div>
      </div>
      <section className="sidebar-footer">
        <NavLink to={"#"}>
          <div className="mb-4">Help</div>
        </NavLink>
        <NavLink to={"#"}>
          <div>Contact us</div>
        </NavLink>
      </section>
    </>
  );
};
