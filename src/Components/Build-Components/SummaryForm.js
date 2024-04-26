import React from "react";
import InputControl from "./InputControl";
import styles from "../../CSS/Build_css/Editor.module.css"

const SummaryForm = (props) => {
    const values = props.values;
    const setValues = props.setValues;

    return (
        <div className={styles.detail}>
            <InputControl
                label="Summary"
                value={values.summary}
                placeholder="Enter your objective/summary"
                onChange={(event) =>
                setValues((prev) => ({ ...prev, summary: event.target.value }))
                }
            />
        </div>
    )
}

export default SummaryForm