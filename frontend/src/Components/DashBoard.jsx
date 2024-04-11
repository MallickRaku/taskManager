import React from "react";
import NewTask from "./NewTask";
import style from "../Css/style.module.css";
import TaskList from "./TaskList";
import "../Css/style.css";
import NavBar from "./NavBar";
import TaskReports from "./TaskReports";
import WeeklyProgress from "./WeeklyProgress";
import TaskProgress from "./TaskProgress";
import TaskAssignComponent from "./TaskAssignComponent";
import RecentActivity from "./RecentActivity";

const DashBoard = () => {
  return (
    <div className={`DashBoard ${style.container} `}>
      <div className="sidebar">
        <NewTask />
        <TaskList />
      </div>

      <div className="main">
        <NavBar />
        <div className={style.displayFlex}>
          <TaskReports />
          <WeeklyProgress />
          <TaskProgress />
        </div>
        <div className={style.displayFlex}>
          <TaskAssignComponent />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
