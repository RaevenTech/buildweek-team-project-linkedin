import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Card } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";

export default function Card2() {
    return (
        <Container>
            <Row>
                <Col md={9}>
                    <Card className="">
                        <Card.Body>
                            <Card.Title>Resources</Card.Title>
                            <Card.Subtitle className="mb-4 text-muted">
                                <AiFillEye /> Private to you
                            </Card.Subtitle>

                            <div>
                                <Card.Title>Creator mode</Card.Title>
                                <Card.Subtitle className="mb-4 text-muted">
                                    Get discovered, showcase content on your
                                    profile, and get access to creator tools
                                </Card.Subtitle>
                            </div>
                            <div>
                                <Card.Title>My network</Card.Title>
                                <Card.Subtitle className="mb-4 text-muted">
                                    See and manage your connections and
                                    interests
                                </Card.Subtitle>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
