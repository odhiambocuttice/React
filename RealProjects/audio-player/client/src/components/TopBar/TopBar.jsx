import { useState } from "react";
import "./topbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const TopBar = () => {
  // set the top bar to black when scrolling
  const [isTopColor, setIsTopBarColor] = useState(false);
  window.onscroll = () => {
    setIsTopBarColor(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const admin = true;

  return (
    <div className={isTopColor ? "topBarScroll" : "topBar"}>
      <div className="topBarLeft">
        <Link className="link" to="/">
          <i className="topIcon fas fa-igloo" />
        </Link>
      </div>

      <div className="topBarRight">
        <ul className="topBarList">
          <li className="topBarListItem">
            <Link className="link" to="/stories">
              STORIES
            </Link>
          </li>
          <li className="topBarListItem">SHOWS</li>
          <li className="topBarListItem">ABOUT</li>
          <li className="topBarListItem">
            <Link className="link" to="/writestory">
              {admin ? "WRITE" : ""}
            </Link>
          </li>
          <li className="topBarListItem"> {admin ? "LOGIN" : ""}</li>
          <li className="topBarListItem"> {admin ? "LOGOUT" : ""}</li>
        </ul>
      </div>
    </div>
  );
};
