import React from "react";
import style from "../Css/style.module.css";

const TaskProgress = () => {
  return (
    <div className={`${style.card} taskProgress `}>
      <h4>Task Progress</h4>
      <div className="taskProgressBox">
        <span>30%</span>
        <h3>Project Progress</h3>

        <div className="progressBar">
          <div className="progress"></div>
        </div>
      </div>
      <div className="taskProgressBox">
        <span>30%</span>
        <h3>Project Progress</h3>

        <div className="progressBar">
          <div className="progress"></div>
        </div>
      </div>
      <div className="taskProgressBox">
        <span>30%</span>
        <h3>Project Progress</h3>

        <div className="progressBar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default TaskProgress;
