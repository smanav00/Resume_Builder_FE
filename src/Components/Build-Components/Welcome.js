import React from "react";
import styles from "../../CSS/Build_css/Welcome.module.css"
import { User } from "react-feather";


const Welcome = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.msg}>
                Welcome Back!
                <div>
                <span><User/></span>  {props.userName}
                </div>
            </div>
        </div>
    )
}

export default Welcome;