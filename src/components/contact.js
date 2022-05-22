import * as React from 'react'
import {container, contactHeading} from './contact.module.css'
const Contact = () => {
    return (
        <div>
            <h2 className={contactHeading}>Contact</h2>
            <div className={container}>
                <div>det_seneca@proton.me</div>
                <form>
                    <div>Message Me</div>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder='Email'/>
                    <textarea>
                    </textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact;