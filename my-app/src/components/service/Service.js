import React from 'react'
import "./service.css";
import { motion } from "framer-motion"
import Card from './Card';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import HotelIcon from '@mui/icons-material/Hotel';

const Service = () => {
    const transition = { duration: 2, type: "spring" }
    return (
        <div className='service_parent'>
            <div className='service_child_1'>
                <h1>Key Features</h1>
                <p>PCS Cloud Labs, No.1 Software (IT) Training Institute in India & Overseas</p>
            </div>
            <div className='service_child_2'>
                {/* box_1 */}
                <motion.div
                    animate={{ x: 100 }}
                    transition={transition}
                    whileInView={{ right: "14rem" }}
                    initial={{ right: "25rem" }}
                >
                    <Card heading="Expert Faculty" para="PCS Cloud Labs help the student teachers
                    to become self reliant by nourishing their
                    creative and collaborative skills." logo={<InsertDriveFileIcon />} />
                </motion.div>
                {/* box_2 */}
                <motion.div
                    animate={{ x: 100 }}
                    transition={transition}
                    whileInView={{ right: "14rem" }}
                    initial={{ right: "25rem" }}>
                    <Card heading="Well Equipped Labs" para="Cloud LABS for Handson." logo={<AccessTimeIcon />} />
                </motion.div>
                {/* box_3 */}
                <motion.div
                    animate={{ x: 100 }}
                    transition={transition}
                    whileInView={{ right: "14rem" }}
                    initial={{ right: "25rem" }}>
                    <Card heading="Cross Skilling" para="Emerging Technologies" logo={<HotelIcon />} />
                </motion.div>

                {/* box_4 */}
                <motion.div
                    animate={{ x: 100 }}
                    transition={transition}
                    whileInView={{ left: "14rem" }}
                    initial={{ left: "25rem" }}>
                    <Card heading="24 x 7 Support" para="+91-9836812465" logo={<PhoneInTalkIcon />} />
                </motion.div>




            </div>
        </div>
    )
}

export default Service