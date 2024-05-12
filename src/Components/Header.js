import React from "react";

import resumeSvg from "../Assets/resume.svg";

import styles from "../CSS/Header.module.css";
import { Link } from "react-router-dom";
import Login from "../user/Login";


function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={resumeSvg} alt="Resume" />
      </div>
      <div className={styles.right}>
        <h1 className={styles.heading}>
          Resume<span>Crafter</span>
        </h1>
        <p className={styles.subheading}>
          Craft a <span>Resume</span> that stands out!
        </p>
        <Link to="/login">
            <button> Create Resume </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;