import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" />
        <div className="logoName">TASK</div>
        <div className="searchBox">
          <i class="fa fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search everything" />
        </div>
      </div>
      <div className="menu">
        <a href="">Projects</a>
        <a href="">Settings</a>
        <a href="">Help</a>
      </div>
      <div className="profileBox">
        <div className="profile">
          <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" />
          <span>Rakesh</span>
        </div>
        <i class="fa-solid fa-bell"></i>
      </div>
    </div>
  );
};

export default NavBar;
