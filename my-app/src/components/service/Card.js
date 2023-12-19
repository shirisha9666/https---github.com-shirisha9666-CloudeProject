import React from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import "./card.css"
import { motion } from "framer-motion"

const Card = ({ heading, para, logo }) => {
    // const data = [
    //     {
    //         icon: "",
    //         heading: "Expert Faculty",
    //         para: "PCS Cloud Labs help the student teachers to become self reliant by nourishing their creative and collaborative skills."

    //     },
    //     {
    //         icon: "",
    //         heading: "Well Equipped Labs",
    //         para: "Cloud LABS for Handson"
    //     },
    //     {
    //         icon: "",
    //         heading: "Cross Skilling",
    //         para: "Emerging Technologies"
    //     },
    //     {

    //         icon: "",
    //         heading: "24 x 7 Support",
    //         para: "E"
    //     }

    // ]
    return (
        <div className='card_parent'>
            <div className='card_child'>
                <motion.div
                    className='card_icon'
                    whileHover={{ scale: 1, rotate: 50 }}
                    whileTap={{
                        scale: 0.5,
                        rotate: -90,
                        borderRadius: "100%"
                    }} >{logo}</motion.div>

                <h4>{heading}</h4>
                <p>{para}
                </p>
            </div>
        </div>
    )
}

export default Card