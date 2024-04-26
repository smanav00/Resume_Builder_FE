import React from "react";
import styles from '../../CSS/Build_css/Inputcontrol.module.css'

const InputControl = ({label, ...props}) => {
    return (
        <div className={styles.container}>
            {label && <label>{label}</label>}
            <input type="text" {...props}/>
        </div>
    )
}

export default InputControl