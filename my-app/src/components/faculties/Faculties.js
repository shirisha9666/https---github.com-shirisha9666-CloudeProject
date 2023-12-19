import React from 'react';
import "./faculties.css"
import FacultCard from './FacultCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

const Faculties = () => {
    return (
        <div className='faculte_parent'>
            <div className='faculte_parent_child_1' >
                <h1>Our Efficient faculties</h1>
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
                        <FacultCard name="Antara Bhattacharya" dec="Salesforce Trainer"
                            image="https://images.pexels.com/photos/19469820/pexels-photo-19469820/free-photo-of-smiling-man-in-warm-clothes-leaning-on-handrail.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <FacultCard name="Muruli Vijoy" dec="Salesforce Trainer"
                            image="https://images.pexels.com/photos/3777564/pexels-photo-3777564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <FacultCard name="Arijit Sen" dec="AWS Cloud Trainer"
                            image='https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <FacultCard name="Subhash Haldar" dec="Java FSD Trainer"
                            image="
                        https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </SwiperSlide>


                </Swiper>

            </div>
        </div>
    )
}

export default Faculties
