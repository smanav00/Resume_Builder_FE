import React from "react";
import InputControl from "./InputControl";
import styles from "../../CSS/Build_css/Editor.module.css"

const AchievementsForm = (props) => {
  const values = props.values;
  const setValues = props.setValues;

  function handlePointUpdate(value, index)  {
      const tempVal = {...values};
      tempVal.points[index] = value;
      setValues(tempVal);
  }
    return (
        <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
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
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
    )
}

export default AchievementsForm