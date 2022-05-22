import * as React from 'react'
import {container, educationHeading} from './education.module.css'
const Education = () => {
    return (
        <div>
            <h2 className={educationHeading}>Education</h2>
            <div className={container}>
                <div>
                    <em>09/16 - 05/17</em><br />
                    Goldsmiths, University of London<br />
                    Foundation of Computing
                </div>
                <div>
                    <em>09/18 - 09/21</em><br />
                    Goldsmiths, University of London <br />
                    BSc in Computer Science (Withdrew)
                </div>
            </div>
        </div>
    )
}

export default Education;