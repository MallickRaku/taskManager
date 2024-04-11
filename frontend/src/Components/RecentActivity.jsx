import React from "react";
import style from "../Css/style.module.css";
const RecentActivity = () => {
  return (
    <div className={`recentActivity ${style.card}`}>
      <h4>Recent Activity</h4>

      <div className="activity">
        <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" />
        <div className="activityInfo">
          <p>
            <span>User</span> Lorem ipsum dolor sit amet consectetur, adipisicing.
          </p>
          <span>Aug 10</span>
        </div>
      </div>
      <div className="activity">
        <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" />
        <div className="activityInfo">
          <p>
            <span>User</span> Lorem ipsum dolor sit amet consectetur, adipisicing.
          </p>
          <span>Aug 10</span>
        </div>
      </div>
      <div className="activity">
        <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" />
        <div className="activityInfo">
          <p>
            <span>User</span> Lorem ipsum dolor sit amet consectetur, adipisicing.
          </p>
          <span>Aug 10</span>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
