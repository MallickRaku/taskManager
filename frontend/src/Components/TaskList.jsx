import React from "react";
import style from "../Css/style.module.css";

const TaskList = () => {
  return (
    <div>
      <div className={`task ${style.card}`}>
        <i class="fa-solid fa-ellipsis"></i>
        <h5>Copywriting</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quia.</p>

        <div className="info">
          <div className="taskInfo">
            <span>
              <i class="fa-solid fa-flag"></i> Nov 4{" "}
            </span>
            <span>
              <i class="fa-solid fa-message"></i> 02
            </span>
            <span>
              <i class="fa-solid fa-paperclip"></i>04
            </span>
          </div>

          <span className="taskUser">
            <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" />
          </span>
        </div>
      </div>

      <div className={`task ${style.card}`}>
        <i class="fa-solid fa-ellipsis"></i>
        <h5>Copywriting</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quia.</p>

        <div className="info">
          <div className="taskInfo">
            <span>
              <i class="fa-solid fa-flag"></i> Nov 4{" "}
            </span>
            <span>
              <i class="fa-solid fa-message"></i> 02
            </span>
            <span>
              <i class="fa-solid fa-paperclip"></i>04
            </span>
          </div>

          <span className="taskUser">
            <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
