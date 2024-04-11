import React from "react";
import style from "../Css/style.module.css";

const TaskAssignComponent = () => {
  return (
    <div className={`TaskAssignComponent `}>
      <div className={`assignTask ${style.card} `}>
        <i class="fa-solid fa-user-plus"></i>
        <span>Assign Task to</span>
        <i class="fa-solid fa-chevron-down"></i>
      </div>

      <div className={`searchAssignUser ${style.card}`}>
        <div className="searchBox">
          <i class="fa fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search " />
        </div>

        <div className="searchResult">
          <div className="searchedUser">
            <div className="userdetail">
              <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" />
              <span>Manoj Ranajan</span>
            </div>
            <div>
              <span>Last Scene 14 hours Ago</span>
            </div>
          </div>

          <div className="searchedUser">
            <div className="userdetail">
              <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" />
              <span>Manoj Ranajan</span>
            </div>
            <div>
              <span>Last Scene 14 hours Ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskAssignComponent;
