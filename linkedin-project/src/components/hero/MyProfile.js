import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";
import { Jumbotron, Button, Modal } from "react-bootstrap";
import classes from "./MyProfile.module.css";
import ProfileButtons from "./ProfileButtons";
import EditProfileForm from "./EditProfileForm";

export default function MyProfile() {
    const [isShow, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function addEditInfoFromObjectDataHandler(inputDataOject) {
        fetch("https://striveschool-api.herokuapp.com/api/profile/", {
            method: "POST",
            body: JSON.stringify(inputDataOject),
            headers: {
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYWI2ZjE3YzRlMDAwMTVkN2EwODEiLCJpYXQiOjE2NTE0ODU1NTIsImV4cCI6MTY1MjY5NTE1Mn0.6oiKKnrkIJeweRS_PUJB__l7YKgogrSnme8NbyUpz4Q",
                "Content-Type": "application/json",
            },
        }).then(() => {
            handleShow();
        });
    }

    return (
        <div>
            <Jumbotron className={classes.hero}>
                <div>
                    <MdModeEditOutline onClick={handleShow} />
                </div>

                <img
                    className={classes.profilePic}
                    src="https://via.placeholder.com/150x150"
                    alt="profile"
                />
                <h3 className={classes.profileName}>Profile Name</h3>
                <h5 className={classes.jobTitle}>Profession title</h5>
                <p>
                    Mirandela, Bragança, Portugal -
                    <span>"(link-Contact info)"</span>
                    Mirandela, Bragança, Portugal - <span>Contact info</span>
                </p>
                <p>3 connections</p>
                <p>"(link-3 Connections)"</p>
                <p>
                    <ProfileButtons />
                </p>
                <Modal show={isShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditProfileForm
                            onSave={addEditInfoFromObjectDataHandler}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Jumbotron>
        </div>
    );
}
