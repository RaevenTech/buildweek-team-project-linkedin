import React from "react";

import classes from "./EditProfileForm.module.css";

export default function EditProfileForm() {
    return (
        <section className={classes.main}>
            <h3>Edit Info</h3>
            <hr />
            <container>
                <h6>
                    <small>* indicates required</small>{" "}
                </h6>
                <form className={classes.form}>
                    <div className={classes.control}>
                        <label htmlFor="name">First name*</label>
                        <input type="text" id="userFirstName" required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="userinputLastName">Last name*</label>
                        <input type="text" id="userInputLastName" required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="userInputEmail">Email*</label>
                        <input type="email" id="userInputEmail" required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="address">Title</label>
                        <input type="text" id="title" required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="userInputBio">Bio</label>
                        <textarea
                            id="userInputBio"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="userInputArea">Area*</label>
                        <input type="text" id="userInputArea" required />
                    </div>

                    <hr />
                </form>
                <div className={classes.actions}>
                    <button>Add Post</button>
                </div>
            </container>
        </section>
    );
}
