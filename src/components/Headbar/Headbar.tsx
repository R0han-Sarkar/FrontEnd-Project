import "./Headbar.css";

export const Headbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="title left-side">Dashboard</div>
        <div className="right-side">
          <div className="search-bar">
            <input type="search" name="search" id="" placeholder="Search..." />
            <i className="bi bi-search"></i>
          </div>
          <div className="bell-icon">
            <i className="bi bi-bell" style={{ fontSize: "24px" }}></i>
          </div>
          <div className="user-image">
            <img
              className="user-image-pic"
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};