import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { Card, Row, Col } from "react-bootstrap";
import classes from "./PostBase.module.css";

function PostBase() {
    return (
<Card className={classes.Post}>
    <div className={classes.DivPad}>
        <Row>
            <Col md={2}>
            <img className={classes.PosterPfp} src="https://via.placeholder.com/80" alt={"..."}/>
            </Col>
            <Col className={classes.DivPad} md={9}>
            <a className={classes.UserName}>Users Name</a>
<p className={classes.MutedSmol}>9999 followers</p>
<p className={classes.MutedSmol}>1w <span><FaGlobeAmericas /></span></p>
                </Col>
            <Col className={classes.DivPad} md={1}>
                <p className={classes.TheDots}>...</p>
            </Col>
         </Row>
    </div>
    <div className={classes.DivPad}>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    <div>
    <img className={classes.postsImage} src="https://via.placeholder.com/600" alt={"..."}/>
    </div>
    <div className={classes.DivPad}>
        <Row>
            <Col md={8}>
                <p className={classes.MutedSmol}>123</p>
            </Col>
            <Col md={2}>
            <p className={classes.MutedSmol}>7 comments</p>
            </Col>
            <Col md={2}>
               <p className={classes.MutedSmol}>5 shares</p>
            </Col>
        </Row>
    </div>
    <hr className={classes.LineNoPad} />
    <div className={classes.DivPad}>
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