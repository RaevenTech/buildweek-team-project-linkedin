import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title }) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption_icon" />}
            <h4 className="headerOption_title">{title}</h4>
        </div>
    );
}

export default HeaderOption;
