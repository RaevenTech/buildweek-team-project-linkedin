import React from "react";
import "./Header.css";
import { BiSearch } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import HeaderOption from "./HeaderOption.js";
import { IoHomeSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <BsLinkedin className="headerLogo" />

                <div className="header_search">
                    <BiSearch />
                    <input type="text" />
                </div>
            </div>

            <div className="header_right">
                <Link to="/news-feed">
                    <HeaderOption Icon={IoHomeSharp} title="Home" />
                </Link>
                <HeaderOption Icon={FaUserFriends} title="My Network" />
                <HeaderOption Icon={MdWork} title="Jobs" />
                <HeaderOption Icon={RiMessage2Fill} title="Messaging" />
                <HeaderOption Icon={FaBell} title="Notifications" />
            </div>
        </div>
    );
}

export default Header;
