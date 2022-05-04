import React from "react";
import { Card } from "react-bootstrap";
import classes from "./SideElementDuo.module.css";
import PeopleKnow from "./PeopleKnow";



function SideElementDuo() {
    return (
      <div>
          <Card className={classes.CarDuo}>
            
                  <Card.Title>
            <h6>People you may know</h6>
            </Card.Title>
              <div>
      <ul className={classes.forList}>
          <PeopleKnow />
      </ul>
      </div>
      
          </Card>
      </div>
    )
}
export default SideElementDuo