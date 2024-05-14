import React from "react";
import styles from '../../CSS/Build_css/Inputcontrol.module.css'

const InputControl = ({label, ...props}) => {
    return (
        <div className={styles.container}>
            <div className={styles.basic}>
                {label && <label>{label}</label>}
                {label && 
                    (label == "Name" || label == "Email" || label === "Enter Phone")
                    &&  <span className={styles.required}>*</span>
                }
            </div>
            
            <input type="text" {...props}/>
        </div>
    )
}

export default InputControl