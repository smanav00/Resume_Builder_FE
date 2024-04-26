import React, { useEffect, useState } from "react";
import styles from "../../CSS/Build_css/Editor.module.css"
import BasicInfoForm from "./BasicInfoForm";
import WorkExpForm from "./WorkExpForm"
import ProjectForm from "./ProjectsForm";
import EducationForm from "./EducationForm";
import AchievementsForm from "./AchievementsForm"
import SummaryForm from "./SummaryForm";
import OtherForm from "./OtherForm";
import InputControl from "./InputControl";
import { ArrowLeft, ArrowRight, X } from "react-feather"


const Editor = (props) => {
    const sections = props.sections;
    const information = props.information;

    const allSections = Object.keys(sections)
    const initKey = Object.keys(sections)[0];
    // console.log(initKey);

    const [activeSection, setActiveSection] = useState(
      initKey
    );
    const [activeInformation, setActiveInformation] = useState(
      information[sections[initKey]]
    );
    // console.log(activeInformation);
    const [sectionTitle, setActionTitle] = useState(
      sections[initKey]
    );

    const [activeDetailIndex, setActiveDetailIndex] = useState(0)

    const [values, setValues] = useState({
      name: activeInformation?.detail?.name || "",
      linkedin: activeInformation?.detail?.linkedin || "",
      gthub: activeInformation?.detail?.github || "",
      phone: activeInformation?.detail?.phone || "",
      email: activeInformation?.detail?.email || "",
    })
    
    const generateBody = () => {
        switch (sections[activeSection]) {
          case sections.basicInfo:
            return <BasicInfoForm values = {values} setValues = {setValues} />;
          case sections.workExp:
            return <WorkExpForm values = {values} setValues = {setValues} />;
          case sections.project:
            return <ProjectForm values = {values} setValues = {setValues} />;
          case sections.education:
            return <EducationForm values = {values} setValues = {setValues} />;
          case sections.achievement:
            return <AchievementsForm values = {values} setValues = {setValues} />;
          case sections.summary:
            return <SummaryForm values = {values} setValues = {setValues} />;
          case sections.other:
            return <OtherForm values = {values} setValues = {setValues} />;
          default:
            return null;
        }
    };

    const handleBack = () => {
        let activeKeyIndex = allSections?.indexOf(activeSection);
        // console.log(activeKeyIndex);
        activeKeyIndex = activeKeyIndex ? activeKeyIndex - 1 : activeKeyIndex;
        const key = allSections[activeKeyIndex];
        setActiveSection(key)
    }

    const handleNext = () => {
        let activeKeyIndex = allSections?.indexOf(activeSection);
        // console.log(activeKeyIndex);
        const len = allSections.length;
        activeKeyIndex = activeKeyIndex < len-1  ? activeKeyIndex + 1 : activeKeyIndex;
        const key = allSections[activeKeyIndex];
        setActiveSection(key)
    }

    const handleSubmission = () => {
      console.log(values);
      // console.log(information);
      switch (sections[activeSection]) {
        case sections.basicInfo:{
          const tempDetail = {
            name : values.name,
            title: values.title,
            linkedin: values.linkedin,
            github: values.github,
            email: values.email,
            phone: values.phone
          };
          
          props.setInformation((prev) => ({
            ...prev , 
            [sections.basicInfo] : {
                ...prev[sections.basicInfo],
                detail: tempDetail,
              },
          }))

          break;
        }

        case sections.workExp: {
          const tempDetail = {
            certificationLink: values.certificationLink,
            title: values.title,
            startDate: values.startDate,
            endDate: values.endDate,
            companyName: values.companyName,
            location: values.location,
            points: values.points,
          };
          const tempDetails = [...information[sections.workExp]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.workExp]: {
              ...prev[sections.workExp],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.project: {
          const tempDetail = {
            link: values.link,
            title: values.title,
            overview: values.overview,
            github: values.github,
            points: values.points,
          };
          const tempDetails = [...information[sections.project]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.project]: {
              ...prev[sections.project],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.education: {
          const tempDetail = {
            title: values.title,
            college: values.college,
            startDate: values.startDate,
            endDate: values.endDate,
          };
          const tempDetails = [...information[sections.education]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.education]: {
              ...prev[sections.education],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.achievement: {
          const tempPoints = values.points;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.achievement]: {
              ...prev[sections.achievement],
              points: tempPoints,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.summary: {
          const tempDetail = values.summary;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.summary]: {
              ...prev[sections.summary],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.other: {
          const tempDetail = values.other;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.other]: {
              ...prev[sections.other],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }

        default :
          return null;
      }
    }

    const handleAddNew = () => {
      const details = activeInformation?.details;
      if (!details) return;
      const lastDetail = details.slice(-1)[0];
      if (!Object.keys(lastDetail).length) return;
      details?.push({});
  
      props.setInformation((prev) => ({
        ...prev,
        [sections[activeSection]]: {
          ...information[sections[activeSection]],
          details: details,
        },
      }));

      // console.log(details?.length);
      // console.log(details);
      setActiveDetailIndex(details?.length - 1);
    };
  
    const handleDeleteDetail = (index) => {
      const details = activeInformation?.details
        ? [...activeInformation?.details]
        : "";
      if (!details) return;
      details.splice(index, 1);
      props.setInformation((prev) => ({
        ...prev,
        [sections[activeSection]]: {
          ...information[sections[activeSection]],
          details: details,
        },
      }));
    }

    useEffect(() => {
      const activeInfo = information[sections[activeSection]];
      setActiveInformation(activeInfo);
      setActionTitle(sections[activeSection]);
      // console.log(activeInfo);
      setActiveDetailIndex(0);
      setValues({
        name: activeInfo?.detail?.name || "",
        overview: activeInfo?.details
          ? activeInfo.details[0]?.overview || ""
          : "",
        link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
        certificationLink: activeInfo?.details
          ? activeInfo.details[0]?.certificationLink || ""
          : "",
        companyName: activeInfo?.details
          ? activeInfo.details[0]?.companyName || ""
          : "",
        college: activeInfo?.details
          ? activeInfo.details[0]?.college || ""
          : "",
        location: activeInfo?.details
          ? activeInfo.details[0]?.location || ""
          : "",
        startDate: activeInfo?.details
          ? activeInfo.details[0]?.startDate || ""
          : "",
        endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
        points: activeInfo?.details
          ? activeInfo.details[0]?.points
            ? [...activeInfo.details[0]?.points]
            : []
          : activeInfo?.points
          ? [...activeInfo.points]
          : [],
        title: activeInfo?.details
          ? activeInfo.details[0]?.title || ""
          : activeInfo?.detail?.title || "",
        linkedin: activeInfo?.detail?.linkedin || "",
        github: activeInfo?.details
          ? activeInfo.details[0]?.github || ""
          : activeInfo?.detail?.github || "",
        phone: activeInfo?.detail?.phone || "",
        email: activeInfo?.detail?.email || "",
        summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
        other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      });
    }, [activeSection]);

    useEffect(() => {
      setActiveInformation(information[sections[activeSection]]);
    }, [information]);
  
    useEffect(() => {
      const details = activeInformation?.details;
      if (!details) return;
  
      const activeInfo = information[sections[activeSection]];
      setValues({
        overview: activeInfo.details[activeDetailIndex]?.overview || "",
        link: activeInfo.details[activeDetailIndex]?.link || "",
        certificationLink:
          activeInfo.details[activeDetailIndex]?.certificationLink || "",
        companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
        location: activeInfo.details[activeDetailIndex]?.location || "",
        startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
        endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
        points: activeInfo.details[activeDetailIndex]?.points || [],
        title: activeInfo.details[activeDetailIndex]?.title || "",
        linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
        github: activeInfo.details[activeDetailIndex]?.github || "",
        college: activeInfo.details[activeDetailIndex]?.college || "",
      });
    }, [activeDetailIndex]);
  

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                {Object.keys(sections)?.map((key) => (
                    <div 
                        className={`${styles.section} ${
                            activeSection === key ? styles.active : ""
                        }`} 
                        key={key}
                        onClick={() => setActiveSection(key)}
                    >
                        {sections[key]}
                    </div>
                ))}
            </div>
            <div className={styles.body}>
                <InputControl 
                  label="Title" 
                  placeholder = "Enter section title"
                  value = {sectionTitle}
                  onChange = {(event) => setActionTitle(event.target.value)}
                />

                <div className={styles.chips}>
                  {
                    activeInformation?.details
                      ? activeInformation?.details.map((item, index) => (
                          <div 
                            className={`${styles.chip} 
                            ${activeDetailIndex === index ? styles.active : ""}`}
                            key = {item.item+index}
                            onClick={() => setActiveDetailIndex(index)}
                          >
                              <p> {sections[activeSection]} {index+1} </p>
                              <X 
                                onClick={(event) => {
                                  event.stopPropagation();
                                  handleDeleteDetail(index);
                                }}
                              />
                          </div>
                      ))
                      : ""
                  }

                  {activeInformation?.details &&
                    activeInformation?.details?.length > 0 ? (
                    <div className={styles.new} onClick={handleAddNew}>
                      +Add
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                {generateBody()}

                   <button onClick={handleSubmission}>Save</button>
            </div>
            {/* <div className={styles.switchbtn}>
                <button onClick={handleBack}><ArrowLeft/> Back</button>
                <button onClick={handleNext}>Next <ArrowRight/></button>
            </div> */}
        </div>
    )
}

export default Editor