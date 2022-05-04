import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import classes from "./SideElementUno.module.css";
import { AiFillQuestionCircle } from "react-icons/ai";


function SideElementUno() {
    return (
      <div>
          <Card className={classes.CardUno}>
          <div className={classes.ElementDivs}>
      Edit public profile &amp; URL <span><AiFillQuestionCircle /></span>
      </div>
      <hr className={classes.line} />
      <div className={classes.ElementDivs}>
      Add profile in another language <span><AiFillQuestionCircle /></span>
      </div>
          </Card>
      </div>
    )
}
export default SideElementUno