import React from "react";

import classes from "./EditProfileForm.module.css";

export default function EditProfileForm() {
    return (
        <form className={classes.form}>
            <div classname={classes.control}>
                <label htmlFor="title">Post Title</label>
                <input type="text" id="title" required />
            </div>
            <div classname={classes.control}>
                <label htmlFor="image">Post Image</label>
                <input type="url" id="image" required />
            </div>
            <div classname={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" required />
            </div>
            <div classname={classes.control}>
                <label htmlFor="description">Descrioption</label>
                <textarea id="description" rows="5" required></textarea>
            </div>
            <div classname={classes.actions}>
                <button>Add Post</button>
            </div>
        </form>
    );
}
