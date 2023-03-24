import quizImg from "../../projects_img/quizImg.png";
import childImg from "../../projects_img/childImg.png";
import portenImg from "../../projects_img/portenImg.png";
import mayakImg from "../../projects_img/mayakImg.png";
import furImg from "../../projects_img/furniture.png";
import pigImg from "../../projects_img/pigImg.png";
import React, {useState} from "react";
import Projects from "../home/Projects";

export const WorksPropsComponent = () => {
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
        {
            id: 4,
            image: mayakImg,
            skills: "Webpack Pug SCSS JS",
            title: "Mayak",
            server: "servers hosting",
            link: "https://mayak-agency.com/index.html"
        },
        {
            id: 5,
            image: furImg,
            skills: "HTML CSS JS GSAP",
            title: "CERNMOBLEM",
            server: "servers hosting",
            link: "https://farxodyu.github.io/cernmoblem/"
        },
        {
            id: 6,
            image: pigImg,
            skills: "HTML CSS JS",
            title: "Pig Game (Desktop)",
            server: "servers hosting",
            link: "https://farxodyu.github.io/pigGame/"
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