import React, { useState } from "react";
import style from "../Css/style.module.css";
import "../Css/style.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const WeeklyProgress = () => {
  const [count, setcount] = useState(0);

  return (
    <div className={`weeklyProgress ${style.card}`}>
      <i class="fa-solid fa-ellipsis"></i>
      <h4>Weekly Progress</h4>
      <div className="startDate">Start from Nov 7-14 , 2020</div>

      {/* <div className="parentCircle">
        <div className="childCircle">
          75%
          <span>Task Completed</span>
        </div>
      </div> */}

      <div className="progressContainer">
        <CircularProgressbar
          value={75}
          text={`${75}%`}
          styles={{
            path: {
              stroke: "#249264", // Color of the progress bar
              strokeWidth: 6, // Thickness of the progress bar
              strokeLinecap: "round", // Rounded ends to the progress bar
            },
            trail: {
              stroke: "#f3f3f3", // Color of the background circle
              strokeWidth: 4, // Thickness of the background circle
            },
            text: {
              fill: "#249264", // Color of the text
              fontSize: "16px", // Size of the text
              fontWeight: "600",
            },
          }}
        />
      </div>
    </div>
  );
};

export default WeeklyProgress;
