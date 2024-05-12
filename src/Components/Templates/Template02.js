import React, { forwardRef, useEffect, useRef, useState } from "react";

import styles from "../../CSS/Template_css/Template02.module.css"
import { AtSign, Calendar, GitHub, Linkedin, MapPin, Paperclip, Phone } from "react-feather";


const Template02 = forwardRef((props, ref) => {
    const sections = props.sections;
    const information = props.information;
    const containerRef = useRef();

    // console.log("In Template");
    // console.log(information);

    const [columns, setColumns] = useState([])

    const info = {
        basicInfo : information[sections.basicInfo],
        workExp : information[sections.workExp],
        project : information[sections.project],
        achievement : information[sections.achievement],
        education : information[sections.education],
        summary : information[sections.summary],
    }

    const getFormattedDate = (value) => {
        if (!value) return "";
        const date = new Date(value);
    
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      };

    const sectionDiv = {
    [sections.workExp]: (
      <div
        key={"workexp"}
        // draggable
        // onDragOver={() => seTarget(info.workExp?.id)}
        // onDragEnd={() => setSource(info.workExp?.id)}
        className={`${styles.section} ${
          info.workExp?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div className={styles.item} key={item.title}>
                <div className={styles.tag}>
                    <div className={styles.left}>
                        {item.title ? (
                            <p className={styles.title}>{item.title}</p>
                        ) : (
                            <span />
                        )}
                        {item.companyName ? (
                            <p className={styles.subTitle}>{item.companyName}</p>
                        ) : (
                            <span />
                        )}
                        {item.certificationLink ? (
                            <a className={styles.link} href={item.certificationLink}>
                            <Paperclip />
                            {item.certificationLink}
                            </a>
                        ) : (
                            <span />
                        )}
                    </div>
                    <div className={styles.right}>
                        {item.startDate && item.endDate ? (
                            <div className={styles.date}>
                            <Calendar /> {getFormattedDate(item.startDate)}-
                            {getFormattedDate(item.endDate)}
                            </div>
                        ) : (
                            <div />
                        )}
                        {item.location ? (
                            <p className={styles.date}>
                            <MapPin /> Remote
                            </p>
                        ) : (
                            <span />
                        )}
                    </div>
                    
                </div>
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        // draggable
        // onDragOver={() => seTarget(info.project?.id)}
        // onDragEnd={() => setSource(info.project?.id)}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={styles.content}>
          {info.project?.details?.map((item) => (
            <div className={styles.item}>
                <div className={styles.tag}>
                    <div className={styles.left}>
                        {item.title ? (
                            <p className={styles.title}>{item.title}</p>
                        ) : (
                            <span />
                        )}
                    </div>
                    <div className={styles.right}>
                        {item.link ? (
                        <a className={styles.link} href={item.link}>
                        <Paperclip />
                        {item.link}
                        </a>
                        ) : (
                            <span />
                        )}
                        {item.github ? (
                            <a className={styles.link} href={item.github}>
                            <GitHub />
                            {item.github}
                            </a>
                        ) : (
                            <span />
                        )}
                    </div>
                </div>
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        // draggable
        // onDragOver={() => seTarget(info.education?.id)}
        // onDragEnd={() => setSource(info.education?.id)}
        className={`${styles.section} ${
          info.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.education?.sectionTitle}
        </div>
        <div className={`${styles.content} ${styles.education}`}>
          {info.education?.details?.map((item) => (
            <div className={styles.item}>
                <div className={styles.tag}>
                    <div className={styles.left}>
                        {item.title ? (
                            <p className={styles.title}>{item.title}</p>
                        ) : (
                            <span />
                        )}
                        {item.college ? (
                            <p className={styles.subTitle}>{item.college}</p>
                        ) : (
                            <span />
                        )}
                    </div>
                    <div className={styles.right}>
                        {item.startDate && item.endDate ? (
                            <div className={styles.date}>
                            <Calendar /> {getFormattedDate(item.startDate)} -
                            {getFormattedDate(item.endDate)}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        key={"achievement"}
        // draggable
        // onDragOver={() => seTarget(info.achievement?.id)}
        // onDragEnd={() => setSource(info.achievement?.id)}
        className={`${styles.section} ${
          info.achievement?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievement?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summary"}
        // draggable
        // onDragOver={() => seTarget(info.summary?.id)}
        // onDragEnd={() => setSource(info.summary?.id)}
        className={`${styles.section} ${
          info.summary?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info.summary?.detail}</p>
        </div>
      </div>
    ),
  };

    useEffect(() => {
      const container = containerRef.current;
      if (!props.fontSize || !container) return;

      container.style.setProperty("--fontSize", props.fontSize);
    }, [props.fontSize]);


    useEffect(() => {
        // console.log("in the use effect");
        setColumns(
            [sections.project, sections.education, sections.summary, sections.workExp, sections.achievement]
        )
    }, [])

    return (
      <div ref={ref}>
        <div ref={containerRef} className={styles.container}> 
            {/* {console.log("inside tempplate body")} */}
            <div className={styles.header}>
                <p className={styles.heading}> {info.basicInfo?.detail?.name} </p>
                <p className={styles.subHeading}> {info.basicInfo?.detail?.title} </p>

                <div className={styles.links}>
                    {info.basicInfo?.detail?.email ? (
                    <a className={styles.link} type="email">
                        <AtSign /> {info.basicInfo?.detail?.email}
                    </a>
                    ) : (
                    <span />
                    )}
                    {info.basicInfo?.detail?.phone ? (
                    <a className={styles.link}>
                        <Phone /> {info.basicInfo?.detail?.phone}
                    </a>
                    ) : (
                    <span />
                    )}
                    {info.basicInfo?.detail?.linkedin ? (
                    <a className={styles.link}>
                        <Linkedin /> {info.basicInfo?.detail?.linkedin}
                    </a>
                    ) : (
                    <span />
                    )}
                    {info.basicInfo?.detail?.github ? (
                    <a className={styles.link}>
                        <GitHub /> {info.basicInfo?.detail?.github}
                    </a>
                    ) : (
                    <span />
                    )}
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.col1}>
                    {
                    columns.map(item => sectionDiv[item])
                    // column[0]
                    }
                </div>
            </div>
        </div>
      </div>

    )
});

export default Template02;