import React from 'react'
import "./intro.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
// import './styles.css';
import IntroCard from './IntroCard'

const Intro = () => {
    return (
        <div >
            <Swiper
                // pagination={{
                //     type: 'fraction',
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-1'>

                    <IntroCard heading="Software Training & 100% Placement"
                        para="Get a Job - Guranteed!
                    Enroll Now For Emerging Technologies and Trending Courses with Job Assurance
                    17+ Years Experience in Software Training & Placements
                    Avail Both Classroom & Online Courses
                    Headquarted in Bangalore , Kolkata , Bhubaneswar and PAN India & Overseas" />

                </SwiperSlide>
                <SwiperSlide className='bg-2'>
                    <IntroCard heading="Software Training & 100% Placement"
                        para="Get a Job - Guranteed!
                    Enroll Now For Emerging Technologies and Trending Courses with Job Assurance
                    17+ Years Experience in Software Training & Placements
                    Avail Both Classroom & Online Courses
                    Headquarted in Bangalore , Kolkata , Bhubaneswar and PAN India & Overseas" />
                </SwiperSlide>
                <SwiperSlide className='bg-3'>
                    <IntroCard heading="Software Training & 100% Placement"
                        para="Get a Job - Guranteed!
                    Enroll Now For Emerging Technologies and Trending Courses with Job Assurance
                    17+ Years Experience in Software Training & Placements
                    Avail Both Classroom & Online Courses
                    Headquarted in Bangalore , Kolkata , Bhubaneswar and PAN India & Overseas" />
                </SwiperSlide>


            </Swiper>

        </div>
    )
}

export default Intro