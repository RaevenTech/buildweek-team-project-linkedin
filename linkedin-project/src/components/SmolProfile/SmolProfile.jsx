import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {RiUserAddFill} from "react-icons/ri";
import {BsSquareFill} from "react-icons/bs";
import {BsFillBookmarkFill} from "react-icons/bs";
import classes from "./SmolProfile.module.css";

function SmolProfile() {
    return(
<Card className={classes.CardEdit}>
<div>
<div><svg className={classes.ProfileBackImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 552 138" id="person-default" data-supported-dps="2048x512">
  <path fill="none" d="M0 0h552v138H0z"/>
  <path fill="#d9e5e7" d="M0 0h552v138H0z"/>
  <path fill="#bfd3d6" d="M380 0h172v138H380z"/>
  <path d="M333.22 0H0v138h333.22a207.93 207.93 0 000-138z" fill="#a0b4b7"/>
</svg>
</div>
<img className={classes.ProfileImage} src="https://via.placeholder.com/80" alt={"..."}/>
<div className={classes.Centerr}>
<h5>Name goes here</h5>
<p className={classes.MutedText2}>occupation goes here</p>
</div>
</div>
<hr className={classes.liine} />
<div className={classes.DivPadding}>
<Row>
    <Col md={9}>
<h6 className={classes.MutedText} >Connections</h6>
<h6 className={classes.InlineText} >Grow your Network</h6>
</Col>
<Col className={classes.PutIconMid} md={3}>
<RiUserAddFill />
</Col>
</Row>
</div>
<hr className={classes.liine} />
<div className={classes.DivPadding}>
<p className={classes.MutedText}>Access exclusive tools and insights</p>
<span> <BsSquareFill />Try Premium for free </span> 
</div>
<hr className={classes.liine} />
<div className={classes.DivPadding}>
<span>
<BsFillBookmarkFill />  My items </span>
</div>
</Card>
)
}
export default SmolProfile