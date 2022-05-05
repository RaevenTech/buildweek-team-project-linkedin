import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Modal } from "react-bootstrap";
import classes from "./MyProfile.module.css";
import ProfileButtons from "./ProfileButtons";
import EditProfileForm from "./EditProfileForm";

export default function MyProfile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Jumbotron className={classes.hero}>
                <div>
                    <Link to="/edit-info" onClick={handleShow}>
                        <MdModeEditOutline />
                    </Link>
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
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditProfileForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Jumbotron>
        </div>
    );
}
