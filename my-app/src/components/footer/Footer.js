import React from 'react'
import "./footer.css"
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TextsmsIcon from '@mui/icons-material/Textsms';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';


const Footer = () => {
    return (
        <div className='footer_parent'>
            {/* left side */}
            <div className='left_footer'>
                <h2>About Us</h2>
                <p>PCS Cloud Lab is an online platform that offers students
                    from all over the world a first-rate educational experience.
                    Our expertise mentors have more than six years of professional
                    experience in their specialised technological
                    fields and have been employed as working professionals for
                    the past 10 to 11 years.</p>
                <div style={{ display: "flex", gap: "10px", fontWeight: "bold" }}>

                    <FmdGoodIcon />
                    <p>91SpringBoard
                        Dr Puneeth Rajkumar Rd,Mahadevapura
                        Land Mark - Beside More Hypermart Mahadevpura</p>
                </div>
                <div style={{ display: "flex", gap: "10px", fontWeight: "bold", letterSpacing: "1px" }}>
                    <TextsmsIcon />
                    <p>
                        training@pcscloudlabs.com</p>

                </div>
                <span><PhoneAndroidIcon /></span>

            </div>
            {/* middle side */}
            <div className='middle_footer'>
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <span style={{ fontSize: "1rem", color: "white" }}>>></span>
                        <a href='##'>Home </a>
                    </li>
                    <li><span style={{ fontSize: "1rem", color: "white" }}>>></span>
                        <a href='##'>About Us </a>
                    </li>
                    <li>
                        <span style={{ fontSize: "1rem", color: "white" }}>>></span>
                        <a href='##'>Courses </a>
                    </li>
                    <li><span style={{ fontSize: "1rem", color: "white" }}>>></span>

                        <a href='##'>Gallery </a>
                    </li>
                    <li>
                        <span style={{ fontSize: "1rem", color: "white" }}>>></span>
                        <a href='##'>Contact Us </a>
                    </li>
                </ul>
            </div>
            {/* right side */}
            <div className='right_footer'>
                <h2>Tags Cloud</h2>
                <ul>
                    <li>
                        <span style={{ fontSize: "1rem", color: "white", fontWeight: "bolder" }}>>></span>
                        <a href='##'>DevOPS With Cloud </a>
                    </li>
                    <li><span style={{ fontSize: "1rem", color: "white" }}>>></span>
                        <a href='##'>Web Design </a>
                    </li>
                    <li>
                        <span style={{ fontSize: "1rem", color: "white" }}>>></span>
                        <a href='##'>Internet Pro </a>
                    </li>
                    <li><span style={{ fontSize: "1rem", color: "white" }}>>></span>

                        <a href='##'>Node Js </a>
                    </li>
                    <li><span style={{ fontSize: "1rem", color: "white" }}>>></span>

                        <a href='##'>Java Swing </a>
                    </li>
                    <li><span style={{ fontSize: "1rem", color: "white" }}>>></span>

                        <a href='##'>Angular Js </a>
                    </li>
                    <li><span style={{ fontSize: "1rem", color: "white" }}>>></span>

                        <a href='##'>Vue Js </a>
                    </li>
                    <li>
                        <span style={{ fontSize: "1rem", color: "white" }}>>></span>
                        <a href='##'>Contact Us </a>
                    </li>
                </ul>


            </div>

        </div>
    )
}

export default Footer