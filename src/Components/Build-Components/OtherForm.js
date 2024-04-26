import React, { useState } from "react";
import InputControl from "./InputControl";
import styles from "../../CSS/Build_css/Editor.module.css"

const OtherForm = () => {
    const [values, setValues] = useState({})

    return (
        <div className={styles.detail}>
            <InputControl
                label="Other"
                value={values.other}
                placeholder="Enter something"
                onChange={(event) =>
                setValues((prev) => ({ ...prev, other: event.target.value }))
                }
            />
        </div>
    )
}

export default OtherForm