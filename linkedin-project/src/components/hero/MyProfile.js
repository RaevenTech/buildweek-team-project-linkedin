import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import { Jumbotron, Button, Modal } from "react-bootstrap";
import classes from "./MyProfile.module.css";
import ProfileButtons from "./ProfileButtons";
import EditProfileForm from "./EditProfileForm";

export default function MyProfile() {
    const [isShow, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);

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

    function getAllProfileDataFromApi() {
        setIsLoading(true);
        fetch("https://striveschool-api.herokuapp.com/api/profile/", {
            headers: {
                authorization:
                    "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYWI2ZjE3YzRlMDAwMTVkN2EwODEiLCJpYXQiOjE2NTE0ODU1NTIsImV4cCI6MTY1MjY5NTE1Mn0.6oiKKnrkIJeweRS_PUJB__l7YKgogrSnme8NbyUpz4Q",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setIsLoading(false);
                setUsers(data);
                console.log(data);
            });

        if (isLoading) {
            return (
                <section>
                    <p>Loading...</p>
                </section>
            );
        }
    }

    useEffect(() => {
        getAllProfileDataFromApi();
    }, []);

    return (
        <div>
            <Jumbotron className={classes.hero}>
                {/*<div>
                    <svg
                        className={classes.ProfileBackImage}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 552 138"
                        id="person-default"
                        data-supported-dps="2048x512"
                    >
                        <path fill="none" d="M0 0h552v138H0z" />
                        <path fill="#d9e5e7" d="M0 0h552v138H0z" />
                        <path fill="#bfd3d6" d="M380 0h172v138H380z" />
                        <path
                            d="M333.22 0H0v138h333.22a207.93 207.93 0 000-138z"
                            fill="#a0b4b7"
                        />
                    </svg>
                </div>*/}
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
