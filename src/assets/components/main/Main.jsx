import React from "react";
import Table from "../tabl/tabl";
import "./main.css";

function open() {
  const main = document.getElementById("main");
  const sidebar = document.getElementById("sidebar");
  main.style = "margin-left:310px;";
  sidebar.style = "left:0px";

}

function Main() {
  return (
    <div className="main" id="main">
      <header>
        <button class="animated-button1 www" id="open1" onClick={open}>
          <svg viewBox="0 0 24 24" class="arr-21" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span class="text1 www">Open</span>
          <span class="circle1"></span>
          <svg viewBox="0 0 24 24" class="arr-11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </button>
        <h1>Hello Evano 👋🏼,</h1>
        {/* <div class="form-control">
          <input type="value" required="" />
        </div> */}
        <div class="input-container">
          <input
            class="input"
            name="text"
            type="text"
            placeholder="Search the internet..."
          />
        </div>


      </header>


      <main><Table /></main>
    </div>
  );
}

export default Main;
