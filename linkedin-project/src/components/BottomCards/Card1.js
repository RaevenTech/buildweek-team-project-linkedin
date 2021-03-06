import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";

export default function Card1() {
    return (
        <Card className="classes.hero">
            <Card.Body>
                <Card.Title>Analytics</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">
                    <AiFillEye /> Private to you
                </Card.Subtitle>
                <Card.Link>
                    <FaUserFriends /> 3 profile views
                </Card.Link>
                <Card.Text>Discover who's viewed your profile.</Card.Text>
            </Card.Body>
        </Card>
    );
}
