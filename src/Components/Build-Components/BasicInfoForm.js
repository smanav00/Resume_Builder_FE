import React from "react";
import InputControl from "./InputControl";
import styles from "../../CSS/Build_css/Editor.module.css"

const BasicInfoForm = (props) => {
  const values = props.values;
  const setValues = props.setValues;

    return(
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                label="Name"
                placeholder="Enter your full name eg. Aashu"
                value={values.name}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, name: event.target.value }))
                }
                />
                <InputControl
                label="Title"
                value={values.title}
                placeholder="Enter your title eg. Frontend developer"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, title: event.target.value }))
                }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                label="Linkedin Link"
                value={values.linkedin}
                placeholder="Enter your linkedin profile link"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, linkedin: event.target.value }))
                  }
                />
                <InputControl
                label="Github Link"
                value={values.github}
                placeholder="Enter your github profile link"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, github: event.target.value }))
                  }
                />
            </div>
            <div className={styles.row}>
                <InputControl
                label="Email"
                value={values.email}
                placeholder="Enter your email"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, email: event.target.value }))
                  }
                />
                <InputControl
                label="Enter Phone"
                value={values.phone}
                placeholder="Enter your phone number"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, phone: event.target.value }))
                  }
                />
            </div>
    </div>
    )
}

export default BasicInfoForm