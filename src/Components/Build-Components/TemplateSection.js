
import React from "react"
import styles from "../../CSS/Build_css/TemplateSection.module.css"
import Template01 from "../../Assets/Templates/Template01.png"
import Template02 from "../../Assets/Templates/Template02.png"


const TemplateSection = (props) => {
    //set template indexx
    const activeTemplate = props.activeTemplate;
    const templates = [Template01, Template02];
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                {
                    templates.map((item, index) => {
                        return <div key={index} className={`${styles.template} ${index === activeTemplate ? styles.active : ""}`}>
                            <img 
                                src={item} 
                                alt={item} 
                                onClick={(event) => { 
                                    console.log(index)
                                    props.setActiveTemplate(index);
                                }}
                            >
                            </img>
                        </div>
                    })
                }
                {/* <div className={styles.template}>
                    <img src= {Template01} alt="img"/>
                </div> */}
            </div>
        </div>
    )
}

export default TemplateSection