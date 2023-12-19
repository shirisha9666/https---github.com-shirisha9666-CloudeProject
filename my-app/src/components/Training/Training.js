import React from 'react'
import "./training.css"
import TrainCard from './TrainCard'
import { motion } from "framer-motion"

const Training = () => {
    const transition = { duration: 2, type: "spring" }
    return (
        <div className='train_parent'>
            <div className='train_child_1'>
                <h1>Latest News</h1>
                <p>Free Training</p>
            </div>
            <div className='train_child_2'>
                <motion.div>
                    <TrainCard
                        image="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        heading="Java Free Training" text1="Free java Training" />
                </motion.div>
                <motion.div>
                    <TrainCard
                        image="https://images.pexels.com/photos/3772712/pexels-photo-3772712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        heading="Free Salesforce Training" text1="Free Python Training" />

                </motion.div>
            </div>
        </div>
    )
}

export default Training