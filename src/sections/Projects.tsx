import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {FiGithub, FiExternalLink} from "react-icons/fi"

function Projects() {
    const projectsData = [
        {
            image: "/CropMonitoring1.png",
            projectName: "Crop Monitoring System",
            projectLink: "https://github.com/theekshana-dilshan/Crop-Monitoring-System-React.git",
            projectDescription: "A React-based application use to manage crop efficiently.",
            projectTech: [
                "React",
                "TailWind CSS",
                "Node.js",
                "Typescript",
                "JWT",
                "MongoDB",
                "Prisma",
            ],
            projectExternalLinks: {
                github: "https://github.com/theekshana-dilshan/Crop-Monitoring-System-React.git",
                externalLink: "https://github.com/theekshana-dilshan/Crop-Monitoring-System-React.git",
            },
        },
        {
            image: "/LManagemetSystem.png",
            projectName: "Library Management System",
            projectLink: "https://github.com/theekshana-dilshan/Library-Management-System.git",
            projectDescription: "A Java-based application manage books, members and transactions.",
            projectTech: [
                "JavaFX",
                "Mysql",
                "Hibernate",
            ],
            projectExternalLinks: {
                github: "https://github.com/theekshana-dilshan/Library-Management-System.git",
                externalLink: "https://github.com/theekshana-dilshan/Library-Management-System.git",
            },
        },
        {
            image: "/BlogApp1.png",
            projectName: "BlogApp FrontEnd",
            projectLink: "https://github.com/theekshana-dilshan/Blog-App-FrontEnd-NextJS.git",
            projectDescription: "A Next.js based application that admin manage blog posts, user authentication, comment system.",
            projectTech: [
                "Next.js",
                "JavaScript",
                "CSS",
                "MongoDB",
                "Prisma",
            ],
            projectExternalLinks: {
                github: "https://github.com/theekshana-dilshan/Blog-App-FrontEnd-NextJS.git",
                externalLink: "https://github.com/theekshana-dilshan/Blog-App-FrontEnd-NextJS.git",
            },
        },
        {
            image: "/RecipeFinder.png",
            projectName: "Food Recipe Finder Moblie App",
            projectLink: "https://github.com/theekshana-dilshan/Food-Recipe-App.git",
            projectDescription: "A React-Native base application for find food recipe, add favorites and search recipe.",
            projectTech: [
                "React-Native",
                "CSS",
                "Typescript",
                "SpoonacularAPI",
            ],
            projectExternalLinks: {
                github: "https://github.com/theekshana-dilshan/Food-Recipe-App.git",
                externalLink: "https://github.com/theekshana-dilshan/Food-Recipe-App.git",
            },
        },
        {
            image: "/tripPlanner.png",
            projectName: "AI Travel Planner",
            projectLink: "https://github.com/theekshana-dilshan/AI-travel-planner-frontend.git",
            projectDescription: "A React based application that plan a trip with Gemini AI.",
            projectTech: [
                "React",
                "TailwindCSS",
                "GeminiAI",
                "FireBase",
            ],
            projectExternalLinks: {
                github: "https://github.com/theekshana-dilshan/AI-travel-planner-frontend.git",
                externalLink: "https://github.com/theekshana-dilshan/AI-travel-planner-frontend.git",
            },
        },
        {
            image: "/Sarisara.png",
            projectName: "Serisara Shopflow",
            projectLink: "https://github.com/theekshana-dilshan/sarisara-shopflow.git",
            projectDescription: "A React based application that manage sellular shop sales, inventry, customers.",
            projectTech: [
                "React",
                "TailWind CSS",
                "Node.js",
                "Typescript",
                "JWT",
                "MongoDB",
                "Prisma",
            ],
            projectExternalLinks: {
                github: "https://github.com/theekshana-dilshan/sarisara-shopflow.git",
                externalLink: "https://github.com/theekshana-dilshan/sarisara-shopflow.git",
            },
        },
    ];

    return (
        <div className="projects" id="work">
            <motion.div
                className="title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
                }}
            >
                <h2>Some Things I&apos;ve Built</h2>
            </motion.div>
            <div className="projects-container">
                {projectsData.map(
                    ({
                        image,
                        projectDescription,
                        // projectLink,
                        projectExternalLinks,
                        projectName,
                        projectTech,
                    }) => {
                        return (
                            <motion.div
                                className="project"
                                key={projectName}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                variants={{
                                visible: { opacity: 1, y: -50 },
                                hidden: { opacity: 0, y: 0 },
                                }}
                            >
                                <div className="project-image">
                                    <div className="project-image-overlay"></div>
                                    <div className="project-image-container">
                                        <Image src={image} fill alt={projectName} quality={100} />
                                    </div>
                                </div>
                                <div className="project-info">
                                    <p className="project-info-overline">Featured Project</p>
                                    <h3 className="project-info-title">{projectName}</h3>
                                    <div className="project-info-description">
                                        <p>{projectDescription}</p>
                                    </div>
                                    <ul className="project-info-tech-list">
                                        {projectTech.map((tech) => (
                                            <li className="project-info-tech-list-item" key={tech}>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="project-info-links">
                                        <li className="project-info-links-item">
                                            <Link
                                                href={projectExternalLinks.github}
                                                className="project-info-links-item-link"
                                            >
                                                <FiGithub />
                                            </Link>
                                        </li>
                                        <li className="project-info-links-item">
                                            <Link href={projectExternalLinks.externalLink} className='project-info-links-item-link'>
                                                <FiExternalLink/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    }
                )}; 
            </div>
        </div>
    );
}

export default Projects;