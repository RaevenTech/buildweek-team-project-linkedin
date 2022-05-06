import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./NewsFeedLayout.module.css";
import Header from "../navbar/Header";
import Footer from "../Footer/Footer";
import SmolProfile from "../SmolProfile/SmolProfile";
import PartTwo from "../SmolProfile/PartTwo";
import SideElementDuo from "../SideElementDuo/SideElementDuo";
import Feed from "../newsFeed/Feed";
import PostBase from "../PostBase/PostBase";






export default function NewsFeedLayout() {
    return (
        <>
            <Header />
            <Container>  
                <Row className={classes.main}>
                <Col md={3}>           
                        <SmolProfile />
                        <PartTwo />
                    </Col>
                    <Col md={6} className={classes.hero}>
                       <Feed />
                       <PostBase />
                    </Col>
                    <Col md={3}>
                      <SideElementDuo />                   
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
