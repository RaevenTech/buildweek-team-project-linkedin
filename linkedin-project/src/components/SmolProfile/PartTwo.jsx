import React from "react";
import { Card } from "react-bootstrap";
import classes from "./PartTwo.module.css";

function PartTwo() {
    return (
        <Card className={classes.CardEdit}>
        <div>
        <div className={classes.DivPadding}>
        <a>
        <p className={classes.LinkText}>Groups</p>
        </a>
        </div>
        <div className={classes.DivPadding2}>
        <a>
        <p className={classes.LinkText}>Events</p>
        </a>
        <span className={classes.Pluss}>+</span>
        </div>
        <div className={classes.DivPadding}>
        <a>
        <p className={classes.LinkText}>Followed Hashtags</p>
        </a>
        </div>
        </div>
        <hr />
        <div>
        <h2 className={classes.Discover}>Discover more</h2>
        </div>
        </Card>
        )}
        export default PartTwo