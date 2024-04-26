import React, {useEffect, useRef, useState} from "react"
import Editor from "./Editor"
import Template01 from "../Templates/Template01"
import Template02 from "../Templates/Template02"
import styles from "../../CSS/Build_css/Builder.module.css"
import ReactToPrint from "react-to-print"
import { ArrowDown } from "react-feather"
import TemplateSection from "./TemplateSection"

const Build = () =>{
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        // other: "Other",
    };

    const templates = [Template01, Template02]

    const resumeRef = useRef();
    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          details: [],
        },
        [sections.project]: {
          id: sections.project,
          sectionTitle: sections.project,
          details: [],
        },
        [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          details: [],
        },
        [sections.achievement]: {
          id: sections.achievement,
          sectionTitle: sections.achievement,
          points: [],
        },
        [sections.summary]: {
          id: sections.summary,
          sectionTitle: sections.summary,
          detail: "",
        },
        [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
    });

    useEffect(() => {
      console.log("inside builder efffect");
      console.log(resumeInformation);
      },
    [resumeInformation])

    return(
        <div className={styles.container}>
            <div>
              <TemplateSection templates = {templates} />
            </div>
            <div className={styles.subContainer}>
              <h1 className={styles.heading}>Let's Fill the Details</h1>
                <ReactToPrint
                  trigger={() => {
                    return (
                      <button>
                        Download <ArrowDown />
                      </button>
                    );
                  }}
                  content={() => resumeRef.current}
                />
            </div>
            
            <div className={styles.main}>
                <Editor 
                  sections = {sections} 
                  information = {resumeInformation}
                  setInformation = {setResumeInformation}
                />
                <Template02 
                  ref={resumeRef}
                  sections = {sections}
                  information = {resumeInformation}
                />
            </div>
        </div>
    )
}

export default Build