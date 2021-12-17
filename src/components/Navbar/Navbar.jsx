import { KeyboardArrowDownOutlined, MenuOutlined } from "@material-ui/icons";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <img src="" alt="" />
        <a href="/">CIS Dashboard</a>
      </div>
      <div className="center">
        <MenuOutlined />
      </div>
      <div className="right">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/230px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png"
          alt=""
          className="language"
        />
        <img
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/32710772_2012690692385035_5944046343218528256_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=j_OPvIydZb8AX_xhYMu&_nc_ht=scontent.fhan2-4.fna&oh=00_AT9hCBCQQ9fJzje9Jqn9AON4667Jzfb5dlWNw6wicCynuQ&oe=61DD01B4"
          alt=""
          className="avatar"
        />
        <h2>Văn Thuận</h2>
        <KeyboardArrowDownOutlined />
      </div>
    </nav>
  );
};

export default Navbar;
