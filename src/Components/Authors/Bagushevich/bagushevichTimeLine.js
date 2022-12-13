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
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={element.data}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon ={
                        element.icon === "book" ? <WorkIcon /> : element.icon === "school" ? <SchoolIcon /> : element.icon === "death" ? <DeathIcon /> : <LifeIcon />}
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
