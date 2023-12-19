import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import "./courseCard.css"

const CourseCard = ({ image, text1, text2, heading }) => {
    return (
        <section>

            <div className='course_care_parent'>
                <div>
                    <img alt=''
                        src={image} />
                    <h1>{heading}</h1>
                </div>
                <div className='star_icon'>
                    <p className='sales'
                        style={{ fontSize: "1rem", fontWeight: "bold", padding: "10px 0px" }}>{text1}</p>
                    <div>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </div>

                    <p style={{
                        fontSize: "1rem", fontWeight: "bold",
                        padding: "1px 3rem"
                    }}>{text2}</p>
                    <button>Apply now</button>
                </div>

            </div>
        </section>
    )
}

export default CourseCard