import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyProfile from "../hero/MyProfile";
import classes from "./Layout.module.css";
import SideElementUno from "../SideElementUno/SideElementUno";
import SideElementDuo from "../SideElementDuo/SideElementDuo";
import Header from "../navbar/Header";
import Footer from "../Footer/Footer";
import Learning from "../Learning/Learning";
import Card1 from "../BottomCards/Card1";
import Card2 from "../BottomCards/Card2";

export default function Layout() {
    return (
        <>
            <Header />
            <Container>
                <Row className={classes.main}>
                    <Col md={9} className={classes.hero}>
                        <MyProfile />
                        <Card1 />
                        <Card2 />
                    </Col>
                    <Col md={3}>
                        <SideElementUno />
                        <SideElementDuo />
                        <Learning />
                    </Col>
                    <Row>
                        <Col xs={3} className={classes.sidebar}></Col>
                    </Row>
                </Row>{" "}
            </Container>
            <Footer />
        </>
    );
}
