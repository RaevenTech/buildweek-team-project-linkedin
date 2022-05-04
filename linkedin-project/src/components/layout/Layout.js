import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyProfile from "../hero/MyProfile";
import classes from "./Layout.module.css";

import Header from "../navbar/Header";
import Footer from "../Footer/Footer";



export default function Layout() {
    return (
        <Container>
            <Row className={classes.main}>
                <Col md={9} className={classes.hero}>
                    <MyProfile />
                </Col>
                <Col md={3}>
                    <h3> side bar </h3>
                </Col>
                <Row>
                    <Col xs={3} className={classes.sidebar}>
                        <h3> cards</h3>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </>

      

    );
}
