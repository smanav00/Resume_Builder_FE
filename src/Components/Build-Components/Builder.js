import React, {useEffect, useRef, useState} from "react"
import Editor from "./Editor"
import Template01 from "../Templates/Template01"
import Template02 from "../Templates/Template02"
import styles from "../../CSS/Build_css/Builder.module.css"
import ReactToPrint from "react-to-print"
import { ArrowDown } from "react-feather"
import TemplateSection from "./TemplateSection"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import {SelectChangeEvent} from "@mui/material/Select"
import Login from "../../user/Login"
import axios from "axios"
import Welcome from "./Welcome"

const Build = (props) =>{
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

    let initData = {
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
    };
    const[fetchedData, setFetchedData] = useState();
    const[fcnt, setfcnt] = useState(0);
    const token = localStorage.getItem('rc_token');
    const config = {
        headers : {'authorization' : token}
    }
    if(props.isLogged && token && fcnt === 0){
      axios.get("http://localhost:5000/api/auth/resumedata", config).then((data) => {
        const dbData = data.data.infodetail
        console.log("fetched data", dbData);
        if(dbData != null){
          initData = dbData;
          setFetchedData(dbData);
        }
    })
    setfcnt(2);
    }
    
    const [activeTempIndex, setActiveTempIndex] = useState(0);
    const resumeRef = useRef(); 
    const [resumeInformation, setResumeInformation] = useState(initData);
    console.log('resume', resumeInformation);
    const [fontsize, setFontsize] = useState('1rem');


    const handleFontChange = (event: SelectChangeEvent) => {
      setFontsize(event.target.value);
    };

    useEffect(() => {
      console.log("inside builder efffect");
      // console.log(resumeInformation);
      if(fetchedData)
        setResumeInformation(fetchedData)
      },
    [fetchedData])

    console.log('builder',props.userName)
      
    return (
        <div className={styles.container}>
            {props.isLogged ? 
                <Welcome userName = {props.userName}/>
              : ""
            }
            <div>
              <TemplateSection 
                activeTemplate = {activeTempIndex}
                setActiveTemplate = {setActiveTempIndex} 
              />
            </div>
            <div className={styles.subContainer}>
              <div className={styles.edit}>
                <h1 className={styles.heading}>Let's Fill the Details</h1>
              </div>
              <div className={styles.template}>
                <FormControl style={{ width: '200px' }}>
                  <InputLabel id="demo-simple-select-label">Font Size</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={fontsize}
                    label="Font Size"
                    onChange={handleFontChange}
                  >
                    <MenuItem value={"0.88rem"}>Small</MenuItem>
                    <MenuItem value={"1rem"}>Medium</MenuItem>
                    <MenuItem value={"1.2rem"}>Large</MenuItem>
                  </Select>
                </FormControl>
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
            </div>
            
            <div className={styles.main}>
                <Editor 
                  sections = {sections} 
                  information = {resumeInformation}
                  setInformation = {setResumeInformation}
                  fcnt = {fcnt}
                />
                {activeTempIndex === 0 ?
                  <Template01 
                    ref={resumeRef}
                    sections = {sections}
                    information = {resumeInformation}
                    fontSize = {fontsize}
                  />
                :
                  <Template02 
                    ref={resumeRef}
                    sections = {sections}
                    information = {resumeInformation}
                    fontSize = {fontsize}
                  />
                }
            </div>
        </div>
    )  
    // <Login setLogStatus = {setLogStatus} setJwt = {setToken}/>
}

export default Build