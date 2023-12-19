import React from 'react'
import "./minifooter.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const MiniFooter = () => {
    return (
        <div className='min_footer_parent'>
            <div>
                <p>2024 © All Rights Reserved | Designed and Developed by PCS Global</p>
            </div>
            <div className='min_footer_icon'>
                <GitHubIcon />
                <AlternateEmailIcon />
                <LocalParkingIcon />
                <TwitterIcon />
                <FacebookIcon />
            </div>
        </div>
    )
}

export default MiniFooter