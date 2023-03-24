

import React, {useState} from "react";
import Projects from "./Projects";
import quizImg from "../../projects_img/quizImg.png"
import childImg from "../../projects_img/childImg.png"
import portenImg from "../../projects_img/portenImg.png";
export const HomeProjectsProps = () => {
    const inProjects = [
        {
            id: 1,
            image: quizImg,
            skills: "HTML CSS JS ",
            title: "Quiz Game (Desktop)",
            server: "servers hosting",
            link: "https://farxodyu.github.io/quizApp/",
        },
        {
            id: 2,
            image: childImg,
            skills: "HTML SCSS JS ",
            title: "ChildHood",
            server: "servers hosting",
            link: " https://farxodyu.github.io/childhood/"
        },
        {
            id: 3,
            image: portenImg,
            skills: "PUG SCSS JS",
            title: "Porten",
            server: "servers hosting",
            link: "https://farxodyu.github.io/porten/"
        },
    ]

    const [projects] = useState(inProjects);
    return (
        <>
            <div className="problocks">
                {projects.map(item => (
                    <Projects key={item.id} image={item.image} link={item.link} server={item.server} title={item.title}
                              skills={item.skills}/>
                ))}
            </div>
        </>
    )
}