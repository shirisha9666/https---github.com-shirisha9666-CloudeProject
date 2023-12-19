import React from 'react'
// import "./labs.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LabCard from './LabCard';

const Labs = () => {
    return (
        <div className='faculte_parent'>
            <div className='faculte_parent_child_1' >
                <h1>Team PCS Cloud Labs</h1>
                <p>Key Persons Behind PCS Cloud Labs</p>
            </div>
            <div className='faculte_parent_child_2'>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={3}
                    grabCursor={true}
                    cssMode={true}
                    navigation={true}
                    // pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <LabCard name="Arijit Sanyal" dec="Sr Mgr.-Head PCS Cloud Labs"
                            image="https://images.pexels.com/photos/19469820/pexels-photo-19469820/free-photo-of-smiling-man-in-warm-clothes-leaning-on-handrail.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <LabCard name="Utpal Anand Pathak" dec="Business Development Mgr."
                            image="https://images.pexels.com/photos/3777564/pexels-photo-3777564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <LabCard name="Debamitra Banerjee" dec="Brand Ambassador"
                            image='https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <LabCard name="Harshita Lal" dec="Business Development Exec."
                            image="
                        https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </SwiperSlide>


                </Swiper>

            </div>
        </div>
    )
}

export default Labs