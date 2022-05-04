import React from "react";

import { Jumbotron } from "react-bootstrap";
import classes from "./MyProfile.module.css";
import ProfileButtons from "./ProfileButtons";

export default function MyProfile() {
    return (
        <div>
            <Jumbotron className={classes.hero}>
                <img
                    className={classes.profilePic}
                    src="https://via.placeholder.com/150x150"
                    alt="profile"
                />
                <h3 className={classes.profileName}>Profile Name</h3>
                <h5 className={classes.jobTitle}>Profession title</h5>
                <p>
                    Mirandela, Bragança, Portugal -{" "}
                    <span>
                        <a href="#">Contact info</a>
                    </span>
                </p>
                <p>
                    <a href="#">3 connections </a>
                </p>
                <p>
                    <ProfileButtons />
                </p>
            </Jumbotron>
        </div>
    );
}
