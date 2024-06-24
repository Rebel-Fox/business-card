import React from 'react'
import ProfilePic from './assets/profile-pic.jpeg'
import Email from './assets/email.svg'
import LinkedIn from './assets/LinkedIn.svg'

export default function Header() {
    return (
        <header>
            <picture><img src={ProfilePic} alt='Profile pic' className='profile-pic' /></picture>
            <div className="container">
                <h2 className='name'>Vineet Kumar</h2>
                <h3 className='job-profile'>Frontend Developer</h3>
                <a href='#' className='website'>vineet.website</a>
                <div className="btn">
                    <a className='email-btn' href='mailto:rookiewebev@outlook.com'>
                        <img src={Email} alt='Email Icon' />Email
                    </a>
                    <a className='linkedIn-btn' href='https://www.linkedin.com/in/vineet-kumar-110772275' target='_blank'>
                        <img src={LinkedIn} alt='LinkedIn Icon' /><span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </header>
    )
}