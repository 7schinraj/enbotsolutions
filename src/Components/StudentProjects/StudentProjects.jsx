import React from 'react';
import './StudentProjects.css';
import { FaPython, FaJava, FaNodeJs, FaPhp, FaReact, FaBrain } from 'react-icons/fa';
import { SiTensorflow, SiFlutter, SiMongodb } from 'react-icons/si';

const ProjectCard = ({ icon, title, des }) => {
    return (
        <div className="project-card">
            <div className="project-icon">{icon}</div>
            <h1>{title}</h1>
            <p>{des}</p>
        </div>
    );
};

const StudentProjects = () => {
    const projects = [
        {
            icon: <FaBrain />,
            title: "AI & Machine Learning",
            des: "Cutting-edge projects in Deep Learning, NLP, Computer Vision, and Predictive Analytics using Python."
        },
        {
            icon: <FaPython />,
            title: "Python Development",
            des: "Versatile projects ranging from Automation scripts to full-stack Django/Flask web applications."
        },
        {
            icon: <SiTensorflow />,
            title: "Data Science",
            des: "Data analysis, visualization, and big data processing projects using Pandas, NumPy, and Matplotlib."
        },
        {
            icon: <FaReact />,
            title: "Full Stack Web (MERN)",
            des: "Modern web applications using MongoDB, Express, React, and Node.js with responsive designs."
        },
        {
            icon: <FaJava />,
            title: "Java Projects",
            des: "Robust enterprise-level applications, Android apps, and system management tools using Java."
        },
        {
            icon: <FaPhp />,
            title: "PHP & Web Tech",
            des: "Dynamic websites and management systems built with PHP, MySQL, and modern frameworks like Laravel."
        },
        {
            icon: <SiFlutter />,
            title: "Mobile App Dev",
            des: "Cross-platform mobile applications for iOS and Android using Flutter and React Native."
        },
        {
            icon: <FaNodeJs />,
            title: "IoT & Embedded",
            des: "Smart hardware interfacing and IoT solutions connecting devices for real-world automation."
        }
    ];

    return (
        <section className="student-projects-container">
            <div className="student-intro-section">
                <div className="header-container">
                    <h2 className="sec-headers">Student Projects</h2>
                </div>
                <h1>Empowering Future Innovators.</h1>
                <p>
                    We provide high-quality, industry-standard final year projects for college students.
                    From documentation to implementation, get everything you need to score high.
                </p>
            </div>
            <div className="projects-grid-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} icon={project.icon} title={project.title} des={project.des} />
                ))}
            </div>
        </section>
    );
};

export default StudentProjects;
