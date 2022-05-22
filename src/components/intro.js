import * as React from 'react';
import { container, introText } from './intro.module.css'



const Intro = () => {
    return (
        <div className={container} id="canvasContainer">
            <p className={introText}>Hi, I'm Derrick. <br/> I'm a software developer from Dallas, Texas.</p>
        </div>
    )
}

export default Intro;