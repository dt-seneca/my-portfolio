import * as React from 'react';
import data from '../project.json';
import {projectHeading, container, projectContainer, projectTitle, projectImage, techList, buttonContainer} from './project.module.css';

const ProjectDiv = (props) => {
    return (
        <div className={projectContainer}>
                    <div className={projectTitle}>{props.name}</div>
                    <div className={projectImage}>i</div>
                    <ul className={techList}>
                        {props.tech.map((techItem) => {
                            console.log(techItem);
                            return (<li>{techItem}</li>);
                        })
                        }
                    </ul>
                    <div className={buttonContainer}>
                        <button>Source</button>
                        <button>Demo</button>
                    </div>
                </div>
    )
}

const Project = () => {
    return (
        <div>
            <h2 className={projectHeading}>Projects</h2>
            <div className={container}>
                {
                    data.projects.map((projObj) => {
                        return <ProjectDiv name={projObj.name} tech={projObj.technologies} />
                    })
                }
            </div>
        </div>
    )
}

export default Project;