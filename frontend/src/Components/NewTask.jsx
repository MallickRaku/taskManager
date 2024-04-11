import React from "react";
import style from "../Css/style.module.css";

const NewTask = () => {
  return (
    <div className={`${style.card}`}>
      <i class="fa-solid fa-xmark"></i>
      <h3>Create New Card</h3>
      <textarea name="" id="" cols="32" rows="8" placeholder="What is the task?"></textarea>
      <div className="tag">
        <i class="fa-solid fa-tag"></i>
        <ul>
          <li>UI Design</li>
          <li>UI Design</li>
        </ul>
        <i class="fa-solid fa-plus"></i>
      </div>

      <div className="addOther">
        <i class="fa-solid fa-user-plus"></i>
        <div className="addUserInfo">
          <img src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png" alt="" /> <span>Priyanshu</span>
        </div>
        <i class="fa-solid fa-plus"></i>
      </div>
      <button> Done </button>
    </div>
  );
};

export default NewTask;
