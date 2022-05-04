import React from "react";
import { Col, Card } from "react-bootstrap";
import {IoMdPeople, IoMdEye} from 'react-icons/io';
import classes from "./Analytics.module.css";


//----------------- unfinished only the text no styling-------------------
function Analytics() {
    return(
        <Card>
    <Card.Body className={classes.cardd}>
    <div>
        Analytics
    </div>
    <div>
        <IoMdEye />Private to you
    </div>
    <Col>
  <IoMdPeople />
    </Col>
        <Col>
        <div>
            0 Profile views
        </div>
        <div>
            Update your profile to attract viewers.
        </div>
        </Col>
        </Card.Body>
    </Card>
    )
}
export default Analytics