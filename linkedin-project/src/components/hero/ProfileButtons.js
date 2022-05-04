import React from "react";
import { Button } from "react-bootstrap";
import classes from "./ProfileButtons.module.css";

export default function ProfileButtons(props) {
    return (
        <>
            <Button className={classes.button1} variant="primary" size="md">
                Open to
            </Button>{" "}
            <Button
                className={classes.button2}
                variant="outline-primary"
                size="md"
            >
                Add profile section
            </Button>{" "}
            <Button
                className={classes.button3}
                variant="outline-secondary "
                size="md"
            >
                More
            </Button>
        </>
    );
}
