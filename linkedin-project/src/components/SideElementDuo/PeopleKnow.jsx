import React from "react";
import { Button } from "react-bootstrap";
import classes from "./PeopleKnow.module.css";



function PeopleKnow() {
    return (
             <div className={classes.DisplayPerson}>
                 <div className={classes.Formatting}> 
                 <div className={classes.DivTwo}>
<img className={classes.ProfileImage} src="https://via.placeholder.com/50"/>

<span>
<h5>Name Goes Here</h5>
<p>occupation goes here</p>
</span>
</div>
             </div>
             <div>
            <Button className={classes.button3}>
          Connect
            </Button>
             </div>
</div>
    )
}
export default PeopleKnow