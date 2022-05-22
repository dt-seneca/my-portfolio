import * as React from 'react';
import {container, aboutText, aboutTitle} from './about.module.css'
const About = () => {
    return (
        <div className={container}>
            <h2 className={aboutTitle}>About Me</h2>
            <p className={aboutText}>
                I'm a diligent software developer
                from Dallas, Texas. I've always
                loved programming and web development
                has always been my main specific interest.
            </p>
            <p className={aboutText}>
                But, I'm capable of fulfilling other kinds of
                software products, so just ask me and
                we can have a discussion about it. 
            </p>
        </div>
    )
}

export default About;