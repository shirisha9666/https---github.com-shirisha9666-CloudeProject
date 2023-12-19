import React from 'react'
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import "./navBarMotion.css";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import "./styles.css";

const NavBarMotion = () => {
    const [open, setOpen] = useState(false);
    const [scope, animate] = useAnimate();
    const items = ["Home", "About Us", "Courses", "Non-IT To IT", "Event",
        "LABS", "Team", "Contact", "Hire Talent"];

    const staggerList = stagger(0.1, { startDelay: 0.25 });
    useEffect(() => {
        animate(
            "ul",
            {
                // width: open ? 150 : 0,
                // height: open ? 200 : 0,
                // opacity: open ? 1 : 0
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.4
            }
        );
        animate(
            "li",
            open
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.3, x: -50 },
            {
                duration: 0.2,
                delay: open ? staggerList : 0
            }
        );
    }, [open]);
    return (
        <div className='navBarMotion'>
            <div className="App" ref={scope}>
                <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px 2rem", border: "none", outline: "none",
                        borderRadius: "10px",
                        background: "orange",
                        color: "white",
                        cursor: "pointer"
                    }}>
                    <MenuOpenIcon style={{ fontSize: "2rem" }} />
                </motion.button>
                <motion.ul className='motion_nav_styles'>
                    {items.map((item, index) => (
                        <motion.li key={index}>{item}</motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    )
}

export default NavBarMotion