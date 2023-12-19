import React from 'react'
import Intro from './intro/Intro';

import Service from './service/Service';
import Courses from './Courses/Courses';
import Labs from './Labs/Labs';
import Training from './Training/Training';
import Faculties from './faculties/Faculties';

const Home = () => {
    return (
        <>
            <Intro />
            <Service />
            <Courses />
            <Training />
            <Faculties />
            <Labs />
        </>
    )
}

export default Home