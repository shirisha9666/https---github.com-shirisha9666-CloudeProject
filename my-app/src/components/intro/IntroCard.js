import React from 'react'
import "./introcard.css"

const IntroCard = ({ heading, para }) => {
    return (
        <div className='intro_parent'>
            <div>
                <h2>{heading}</h2>
                <p>{para}</p>

                <button>ApplyOnline</button>
            </div>
        </div>
    )
}

export default IntroCard