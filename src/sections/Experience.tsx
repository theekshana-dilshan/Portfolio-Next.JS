import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Experience() {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const transformSelected = () => {
            const underline = document.querySelector<HTMLElement>(".underline");
            underline!.style.top = `${selected * 2.5}rem`
        };
        transformSelected();
    }, [selected]);

    const experiences = [
        {
            name: "IJSE",
            role: "Student",
            url: "https://www.ijse.lk/",
            start: "March 2023",
            end: "Precent",
            shortDescription: [
                "I am currently studing at IJSE",
                "I started this Higher National Diploma in software engineering in 2023.",
            ],
        },
        {
            name:"BitFlix",
            role: "UI/UX engineer",
            url: "",
            start: "Augest 2023",
            end: "December 2023",
            shortDescription: [
                "Group project in a event name Innovesta in 1st semester at IJSE.",
                "I desinged the UI of the project.",
            ],
        }
    ]
  return (
    <motion.div
        className="experience"
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
            visible: { opacity: 1, y: -50 },
            hidden: { opacity: 0, y: 0 },
        }}
    >
        <div className='title'>
            <h2>Experiences</h2>
        </div>
        <div className="container">
            <ul className="exp-slider">
                <div className="underline"></div>
                {experiences.map((experience, index) =>{
                    return(
                        <li key={index} className={`exp-slider-item ${index=== selected && "exp-slider-item-selected"}`} onClick={() => setSelected(index)}>
                            <span>{experience.name}</span>
                        </li>
                    );
                })}
            </ul>
            <div className="exp-details">
                <div className="exp-details-position">
                    <h3>
                        <span>{experiences[selected].role}</span>
                        <span className='exp-details-position-company'>
                            &nbsp;&nbsp;
                            <Link className='link' href={experiences[selected].url}>
                                {experiences[selected].name}{" "}
                            </Link>
                        </span>
                    </h3>
                    <p className='exp-details-range'>
                        {experiences[selected].start} - {experiences[selected].end}
                    </p>
                    <ul className='exp-details-list'>
                        {experiences[selected].shortDescription.map(
                            (description, index) => (
                                <li key={index} className='exp-details-list-item'>
                                    {description}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Experience