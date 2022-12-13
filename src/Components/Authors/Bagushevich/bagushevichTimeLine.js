import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import bgTL from '../../../Data/bagushevichInfo';
import { ReactComponent as WorkIcon } from '../../../Images/book.svg';
import { ReactComponent as SchoolIcon } from '../../../Images/school.svg';
import { ReactComponent as DeathIcon } from '../../../Images/death.svg';
import { ReactComponent as LifeIcon } from '../../../Images/life.svg';

export default class BgTimeLine extends Component {
  render() {
    return (
        <VerticalTimeline>
        {bgTL.map((element) => {
            return (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={element.time}
                    dateClassName="date"
                    iconStyle={{ background: '#adb5bd', color: '#000' }}
                    icon= {element.logo === "work" ? <WorkIcon /> : element.logo === "life" ? <LifeIcon /> :  element.logo === "school" ? <SchoolIcon /> : <DeathIcon />}
                >
                    <h3 className="vertical-timeline-element-title">{element.title}</h3>
                    <p>
                        {element.text}
                    </p>
                </VerticalTimelineElement>
            );
        })}

        </VerticalTimeline>
    )
  }
}
