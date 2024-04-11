import React from "react";
import style from "../Css/style.module.css";
import "../Css/style.css";

const TaskReports = () => {
  return (
    <div className={`${style.card} taskReports `}>
      <i class="fa-solid fa-ellipsis"></i>

      <h4>Knosep Design Homepage</h4>
      <div className="dueDate">
        <i class="fa-solid fa-flag"></i>
        Due Nov 24
      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam consectetur nihil nesciunt explicabo? Impedit
      </div>

      <div className="projectProgressBox">
        <span>30%</span>
        <h3>Project Progress</h3>
        <div className="progressBar">
          <div className="progress"></div>
        </div>
      </div>

      <div className="includedMember">
        <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" />
        <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" />
        <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" />
      </div>
    </div>
  );
};

export default TaskReports;
