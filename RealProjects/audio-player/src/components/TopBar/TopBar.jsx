import "./topbar.css";

export const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarLeft">
        <i className="topIcon fas fa-igloo"></i>
      </div>

      <div className="topBarRight">
        <ul className="topBarList">
          <li className="topBarListItem">STORIES</li>
          <li className="topBarListItem">SHOWS</li>
          <li className="topBarListItem">ABOUT</li>
          <li className="topBarListItem">WRITE</li>
          <li className="topBarListItem">LOGIN</li>
          <li className="topBarListItem">LOGOUT</li>
        </ul>
      </div>
    </div>
  );
};
