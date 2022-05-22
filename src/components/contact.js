import * as React from 'react'

const Contact = () => {
    return (
        <div>
            <div>Contact</div>
            <div>det_seneca@proton.me</div>
            <form>
                <div>Message Me</div>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder='Email'/>
                <textarea>
                </textarea>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Contact;