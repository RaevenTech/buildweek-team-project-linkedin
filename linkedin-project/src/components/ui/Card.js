import React from "react";
import classes from "./Card.module.css";

export default function Card(props) {
    return (
        <section>
            <row className={classes.cardCcontainer}>
                <col>
                    <div className={classes.card}>{props.children}</div>
                </col>
            </row>
        </section>
    );
}
