import React from "react";
import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";

function Landing() {
    return (
        <div className={styles.container}>
            <div className={styles.one_half}>
                <div>
                    <div className={styles.map}></div>
                    {/* Tell me wich adventure you're looking for<br/>
                and I'll tell you where to go... */}
                </div>
            </div>
            <div className={styles.second_half}>
                <button>
                <NavLink to='/home'>Start your trip!</NavLink>
                </button>
            </div>
        </div>
    );
}

export default Landing;
