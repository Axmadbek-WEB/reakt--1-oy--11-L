import "./sidebar.css";

function close() {
  const main = document.getElementById("main");
  const sidebar = document.getElementById("sidebar");
  main.style = "margin-left:0px;";
  sidebar.style = "left:-310px";


}
// const li = document.getElementsByTagName("li")

// addEventListener("mouse")

function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <ul>
        <h2>Dashboard v01</h2>
        {/* <button id="close" onClick={close}>Close</button> */}
        <button class="animated-button"  id="close1" onClick={close}>
          <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span class="text">Close</span>
          <span class="circle"></span>
          <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </button>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Customers</a></li>
        <li><a href="#">Income</a></li>
        <li><a href="#">Promote</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </div>
  );
}


export default Sidebar;