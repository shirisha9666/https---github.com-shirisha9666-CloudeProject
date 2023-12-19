import React from 'react'
import "./courses.css";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import CourseCard from './CourseCard';

import 'swiper/css/pagination';

const Courses = () => {
    return (
        <div className='course_parent'>

            <div className='course_child_1'>
                <h2>Our Courses</h2>
                <p>Courses are designed for continuous developement
                    and designed by technical domain Experts around the world</p>

            </div>


            <div className='course_child_2'>

                <CourseCard className="child_1"
                    image={'https://veri.cloud/wp-content/uploads/2022/06/salesforce-sertifikasyonu-hazirlamaniza-yardimci-olacak-tuyolar-1-1-1024x576.jpg'}
                    heading="Salesforce" text1="Salesfoces Jobs coming like Sunami !!"
                    text2="Salesforce Admin, Platform Development, LWC , CPQ, SFMC" />



                <CourseCard image={'https://media.licdn.com/dms/image/D5612AQGZguTiPO61Tw/article-cover_image-shrink_600_2000/0/1674469411232?e=2147483647&v=beta&t=LN_MeKHswijS4_dQKn2UIBMHlYI-GJD65qcMlNVpy0A'} heading="Java Full Stack"
                    text1="Core Java, Advanced Java , Framework"
                    text2="Core Java,Servlets,JSP,SpringBoot, Hibernate,Angular & React" />



                <CourseCard image={'https://itechindia.co/wp-content/uploads/2021/11/development-cycle.jpeg'} heading="MEAN /MERN Stack FSD"
                    text1="Mean & MERN Stack"
                    text2="Mongo DB, Express, Angular , React , Node JS , Full Stack Development" />



                <CourseCard image={'https://www.tatvasoft.com/blog/wp-content/uploads/2022/02/DevOps-Best-Practices-1280x720.jpg'} heading="DevOps"
                    text1="DevOps"
                    text2="GIT/Jenkins/Kubernetics/Docker" />


                <CourseCard
                    image={'https://miro.medium.com/v2/resize:fit:1400/1*aSC3odScNMyz7Y6MZvqJ1Q.jpeg'}
                    heading="Datascience ML/ AI"
                    text1="Datascience ML/ AI"
                    text2="Machine Learning /AI" />


                <CourseCard className="child_6"
                    image={'https://www.fsm.ac.in/blog/wp-content/uploads/2022/07/FUqHEVVUsAAbZB0.jpg'}
                    heading="Python"
                    text1="DataScience Using Python"
                    text2="Data Science Using Python" />






            </div>

        </div>
    )
}

export default Courses