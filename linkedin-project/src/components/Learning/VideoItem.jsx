import React from "react";
import classes from "./VideoItem.module.css";

function VideoItem () {
    return(
        <div className={classes.VideoDiv}>
            <span><img className={classes.Thumbnail} src="https://via.placeholder.com/100" /> </span>
            <p className={classes.VideoTitle}>Video title goes here</p>
        </div>
    )
}
export default VideoItem