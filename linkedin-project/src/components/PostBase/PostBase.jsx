import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { Card, Row, Col } from "react-bootstrap";
import classes from "./PostBase.module.css";

function PostBase() {
    return (
<Card className={classes.Post}>
    <div>
        <Row>
            <Col md={2}>
            <img className={classes.PosterPfp} src="https://via.placeholder.com/80" alt={"..."}/>
            </Col>
            <Col md={9}>
            <h6>Users Name</h6>
<p>9999 followers</p>
<p>1w <span><FaGlobeAmericas /></span></p>
                </Col>
            <Col md={1}>
                <p>...</p>
            </Col>
         </Row>
    </div>
    <div>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    <div>
    <img className={classes.postsImage} src="https://via.placeholder.com/600" alt={"..."}/>
    </div>
    <div>
        <Row>
            <Col md={9}>
                <p>123</p>
            </Col>
            <Col md={2}>
            <p>7 comments</p>
            </Col>
            <Col md={1}>
               <p> 5 shares</p>
            </Col>
        </Row>
    </div>
    <hr />
    <div>
        <Row>
        <Col md={3}>
            </Col>
            <Col md={3}>
            </Col>
            <Col md={3}>
            </Col>
            <Col md={3}>
            </Col>
            </Row>
            </div>
</Card>
    )
}
export default PostBase