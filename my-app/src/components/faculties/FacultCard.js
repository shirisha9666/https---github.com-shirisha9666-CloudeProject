import React from 'react'
import "./facultCard.css"

const FacultCard = ({ name, dec, image }) => {
    return (
        <div className='facult_card'>
            <div className='facult_images'>
                <img alt=''
                    src={image} />
            </div>
            <div className='facult_heading'>
                <h2>{name}</h2>
                <p>{dec}</p>
            </div>
        </div>
    )
}

export default FacultCard