import React from "react";
import { useRef } from "react";
import classes from "./EditProfileForm.module.css";

export default function EditProfileForm(props) {
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const areaInputRef = useRef();
    const titleInputRef = useRef();
    const bioInputRef = useRef();

    function submitHandler(e) {
        e.preventDefault();

        const userFormNameInput = firstNameInputRef.current.value;
        const userFormLastNameInput = lastNameInputRef.current.value;
        const userFormEmailInput = emailInputRef.current.value;
        const userFormAreaInput = areaInputRef.current.value;
        const userFormTitleInput = titleInputRef.current.value;
        const userFormBioInput = bioInputRef.current.value;

        const inputDataOject = {
            name: userFormNameInput,
            surname: userFormLastNameInput,
            email: userFormEmailInput,
            area: userFormAreaInput,
            title: userFormTitleInput,
            bio: userFormBioInput,
        };
        props.onSave(inputDataOject);
    }

    return (
        <section className={classes.main}>
            <h3>Edit Info</h3>
            <hr />
            <container>
                <h6>
                    <small>* indicates required</small>{" "}
                </h6>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor="name">First name*</label>
                        <input
                            type="text"
                            id="userFirstName"
                            ref={firstNameInputRef}
                            required
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="userInputLastName">Last name*</label>
                        <input
                            type="text"
                            id="userInputLastName"
                            ref={lastNameInputRef}
                            required
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="userInputEmail">Email*</label>
                        <input
                            type="email"
                            id="userInputEmail"
                            ref={emailInputRef}
                            required
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="userInputTitle">Title</label>
                        <input
                            type="text"
                            id="userInputTitle"
                            ref={titleInputRef}
                            required
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="userInputBio">Bio</label>
                        <textarea
                            id="userInputBio"
                            ref={bioInputRef}
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="userInputArea">Area*</label>
                        <input
                            type="text"
                            id="userInputArea"
                            ref={areaInputRef}
                            required
                        />
                    </div>

                    <hr />
                </form>
                <div className={classes.actions}>
                    <button>Save</button>
                </div>
            </container>
        </section>
    );
}
