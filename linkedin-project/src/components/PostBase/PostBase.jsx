import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { Card, Row, Col } from "react-bootstrap";
import classes from "./PostBase.module.css";

function PostBase() {
    return (
<Card>
    <div>
        <Row>
            <Col md={11}>
                <div>
            <img className={classes.PosterPfp} src="https://via.placeholder.com/80" alt={"..."}/>
<h6>Poster Name</h6>
<p>9999 followers</p>
<p>1w <span><FaGlobeAmericas /></span></p>
</div>
            </Col>
            <Col md={1}>
            </Col>
         </Row>
    </div>
</Card>
    )
}
export default PostBase