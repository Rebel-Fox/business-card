import React from "react"
import TwitterIcon from "./assets/Twitter.svg"
import FacebookIcon from "./assets/Facebook.svg"
import InstagramIcon from "./assets/Instagram.svg"
import GitHubIcon from "./assets/GitHub.svg"

export default function Footer(){
    return (
        <footer>
            <div className="container">
                <img src={TwitterIcon} alt='Twitter Icon'className="social-media"/>
                <img src={FacebookIcon} alt='Facebook Icon'className="social-media"/>
                <img src={InstagramIcon} alt='Instagram Icon'className="social-media"/>
                <img src={GitHubIcon} alt='Github Icon'className="social-media"/>
            </div>
        </footer>
    )
}