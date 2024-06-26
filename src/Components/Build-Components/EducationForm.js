import React from "react";
import InputControl from "./InputControl";
import styles from "../../CSS/Build_css/Editor.module.css"

const EducationForm = (props) => {
    const values = props.values;
    const setValues = props.setValues;

    return (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                label="Title"
                value={values.title}
                placeholder="Enter title eg. B-tech"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, title: event.target.value }))
                }
                />
            </div>
            <InputControl
                label="College/School Name"
                value={values.college}
                placeholder="Enter name of your college/school"
                onChange={(event) =>
                setValues((prev) => ({ ...prev, college: event.target.value }))
                }
            />
            <div className={styles.row}>
                <InputControl
                label="Start Date"
                type="date"
                placeholder="Enter start date of this education"
                value={values.startDate}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, startDate: event.target.value }))
                }
                />
                <InputControl
                label="End Date"
                type="date"
                placeholder="Enter end date of this education"
                value={values.endDate}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, endDate: event.target.value }))
                }
                />
            </div>
        </div>
    )
}

export default EducationForm