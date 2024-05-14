import { Alert } from "@mui/material";
import React from "react";
import styles from "../../CSS/Build_css/SendAlert.module.css"



const SendAlert = (props) => {
    const emailOpen = props.emailAlert;
    const phoneOpen = props.phoneAlert;
    const githubOpen = props.githubAlert;
    const linkedinOpen = props.linkedinAlert;
    const certificationLinkOpen = props.certificationLinkAlert;
    const dateOpen = props.dateAlert;
    const reqOpen = props.reqOpen;

    return (
        <div className={styles.container}>
            {emailOpen && (
                <Alert
                variant="outlined"
                severity="error"
                onClose={() => {
                    props.setEmailAlert(false)
                }}
                >
                Please Enter a Valid Email.
                </Alert>
            )}

            {phoneOpen && (
                <Alert
                variant="outlined"
                severity="error"
                onClose={() => {
                    props.setPhoneAlert(false)
                }}
                >
                Please Enter Valid Phone Number.
                </Alert>
            )}

            {githubOpen && (
                <Alert
                variant="outlined"
                severity="error"
                onClose={() => {
                    props.setGithubAlert(false)
                }}
                >
                Please Enter Correct Github Link.
                </Alert>
            )}

            {linkedinOpen && (
                <Alert
                variant="outlined"
                severity="error"
                onClose={() => {
                    props.setLinkedinAlert(false)
                }}
                >
                Please Enter Correct LinkedIn Link.
                </Alert>
            )}
            
            {certificationLinkOpen && (
                <Alert
                variant="outlined"
                severity="error"
                onClose={() => {
                    props.setCertificationLinkAlert(false)
                }}
                >
                Please Enter Correct Certification Link.
                </Alert>
            )}

            {dateOpen && (
                <Alert
                variant="outlined"
                severity="error"
                onClose={() => {
                    props.setDateAlert(false)
                }}
                >
                {props.dateMsg}
                </Alert>
            )}

            {reqOpen && (
                <Alert
                variant="outlined"
                severity="error"
                onClose={() => {
                    props.setReqOpen(false)
                }}
                >
                Required Fields Are Empty.
                </Alert>
            )}
        </div>
    )
}

export default SendAlert