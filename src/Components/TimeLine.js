import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { ReactComponent as WorkIcon } from '../Images/book.svg';
import { ReactComponent as SchoolIcon } from '../Images/school.svg';
import { ReactComponent as DeathIcon } from '../Images/death.svg';
import { ReactComponent as LifeIcon } from '../Images/life.svg';


const TimeLine = ({ element }) => (
    <>
    <h2 className='text-center'>Биография</h2>
    <VerticalTimeline>
        {element.map((info) => {
            return (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={info.time}
                    dateClassName="date"
                    iconStyle={{ background: '#adb5bd', color: '#000' }}
                    icon={info.logo === "work" ? <WorkIcon /> : info.logo === "life" ? <LifeIcon /> : info.logo === "school" ? <SchoolIcon /> : <DeathIcon />}
                >
                    <h3 className="vertical-timeline-element-title">{info.title}</h3>
                    <p>
                        {info.text}
                    </p>
                </VerticalTimelineElement>
            );
        })}

    </VerticalTimeline>
</>
)

export default TimeLine;