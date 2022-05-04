import React from "react";
import { Card } from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";
import classes from "./Learning.module.css";
import VideoItem from "./VideoItem";




function Learning() {
    return (
      <div>
          <Card className={classes.CarDuo}>
            
                  <Card.Title>
                      <div className={classes.learningHeader}>
                      <span><AiFillLinkedin /></span>
                      Learning
                      <p className={classes.muted}>Add new skills with these courses, free for 24 hours</p>
                      </div>
            </Card.Title>
              <div>
      <ul className={classes.forList}>
          <VideoItem />
          <hr className={classes.line} />
      </ul>
      </div>
          </Card>
      </div>
    )
}
export default Learning