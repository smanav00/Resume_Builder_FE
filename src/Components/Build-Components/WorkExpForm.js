import React from "react";
import InputControl from "./InputControl";
import styles from "../../CSS/Build_css/Editor.module.css"

const WorkExpForm = (props) => {
    // const [values, setValues] = useState({})
    const values = props.values;
    const setValues = props.setValues;

    function handlePointUpdate(value, index)  {
        const tempVal = {...values};
        if (!Array.isArray(tempVal.points)) tempVal.points = [];
        tempVal.points[index] = value;
        setValues(tempVal);
    }
    return (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                label="Title"
                placeholder="Enter title eg. Frontend developer"
                value={values.title}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, title: event.target.value }))
                }
                />
                <InputControl
                label="Company Name"
                placeholder="Enter company name eg. amazon"
                value={values.companyName}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, companyName: event.target.value }))
                }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                label="Certificate Link"
                placeholder="Enter certificate link"
                value={values.certificationLink}
                onChange={(event) =>
                    setValues((prev) => ({
                    ...prev,
                    certificationLink: event.target.value,
                    }))
                }
                />
                <InputControl
                label="Location"
                placeholder="Enter location eg. Remote"
                value={values.location}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, location: event.target.value }))
                }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                label="Start Date"
                type="date"
                placeholder="Enter start date of work"
                value={values.startDate}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, startDate: event.target.value }))
                }
                />
                <InputControl
                label="End Date"
                type="date"
                placeholder="Enter end date of work"
                value={values.endDate}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, endDate: event.target.value }))
                }
                />
            </div>

            <div className={styles.column}>
                <label>Enter work description</label>
                <InputControl
                placeholder="Line 1"
                value={values.points ? values.points[0] : ""}
                onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                placeholder="Line 2"
                value={values.points ? values.points[1] : ""}
                onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                placeholder="Line 3"
                value={values.points ? values.points[2] : ""}
                onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
            </div>
        </div>
    )
}

export default WorkExpForm