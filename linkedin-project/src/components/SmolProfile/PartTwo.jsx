import React from "react";
import { Card } from "react-bootstrap";
import classes from "./PartTwo.module.css";

function PartTwo() {
    return (
        <Card className={classes.CardEdit}>
        <div>
        <div className={classes.DivPadding}>
        <selection>
        <p className={classes.LinkText}>Groups</p>
        </selection>
        </div>
        <div className={classes.DivPadding2}>
        <selection>
        <p className={classes.LinkText}>Events</p>
        </selection>
        <span className={classes.Pluss}>+</span>
        </div>
        <div className={classes.DivPadding}>
        <selection>
        <p className={classes.LinkText}>Followed Hashtags</p>
        </selection>
        </div>
        </div>
        <hr />
        <div>
        <h2 className={classes.Discover}>Discover more</h2>
        </div>
        </Card>
        )}
        export default PartTwo