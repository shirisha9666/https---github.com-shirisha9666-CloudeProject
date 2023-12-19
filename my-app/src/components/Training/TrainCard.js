import React from 'react'
import "./trainCard.css";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MessageIcon from '@mui/icons-material/Message';

const TrainCard = ({ image, text1, text2, heading }) => {
    return (
        <div>
            <div className='train_care_parent'>
                <div>
                    <img alt=''
                        src={image} />
                    <h1>{heading}</h1>
                </div>
                <div className='train_icon'>
                    <div className='icon_parent'>
                        <div>
                            <PermContactCalendarIcon />
                            <span>Admin</span>
                        </div>
                        <div>
                            <VisibilityIcon />
                            <span>(12)</span>
                        </div>
                        <div>
                            <MessageIcon />
                            <span>(12)</span>
                        </div>
                    </div>
                    <p className='sales'
                        style={{
                            fontSize: "1rem", fontWeight: "bold", padding: "10px 0px",
                            color: "white", textAlign: "center"
                        }}>{text1}</p>


                    <p style={{
                        fontSize: "1rem", fontWeight: "bold",
                        padding: "1px 3rem"
                    }}>{text2}</p>
                    <button>Read More</button>
                </div>

            </div>
        </div>
    )
}

export default TrainCard