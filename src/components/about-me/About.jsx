import React from "react";
import InfoText from "../InfoText";
import about_me from "../home/img/about-me.png";
import skills_dots_1 from "../home/img/skillsDotsOne.svg";
import skills_dots_2 from "../home/img/skillsDotsTwo.svg";
import skills_squad_small from "../home/img/skillsSquadSmall.svg";
import dot from './img/dot.svg';
import logo from './img/logo.svg'
const About =()=> {
    const infoTextApi = [
        'Skills', 'my-fun-facts'
    ]
    return (
        <>
            <div className="container main-container home">
                <p className="title"><span className={"title_color"}>/</span>About-me</p>
                <p className="title__list">
                    Who am I?
                </p>

                <div className="skills about-me about__component">
                    <div className="about-me-block">
                        <div className="about-me-descr">
                            Hello, i’m Farkhod!
                            <br/>
                            <br/>
                            I’m a self-taught front-end developer based in Tashkent, Uzbekistan. I can develop responsive websites from figma and raise them into modern user-friendly web experiences.
                            <br/>
                            <br/>
                            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                        </div>
                    </div>
                    <div className="skills__geometry">
                        <div className="about-me-div">
                            <img src={about_me } className={"about-me-img"} alt="about me"/>
                        </div>
                        <img src={skills_dots_1} alt="dots" className={"skills__geometry-dots-1 about-me__dots-1"}/>
                        <img src={skills_dots_2} alt="dots-2" className={"skills__geometry-dots-2 about-me__dots-2"}/>
                        <img src={skills_squad_small} alt="squad-sm" className={"skills__geometry-squad-small about-me__dots-3"}/>
                    </div>
                </div>
                <InfoText text={infoTextApi[0]}/>
                <div className="about__skills">

                    <div className="skills__df about__width">
                        <div className="skills__df-block ">
                            <p className="skills__df-block-title">
                                Languages
                            </p>
                            <p className="skills__df-block-description">
                                JavaScript
                            </p>
                        </div>
                    </div>
                        <div className="skills__df-block no-top  about__width">
                            <p className="skills__df-block-title">
                                CMS
                            </p>
                            <p className="skills__df-block-description">
                                WordPress
                            </p>
                        </div>
                        <div className="skills__df-block about__width">
                            <p className="skills__df-block-title">
                                Other
                            </p>
                            <p className="skills__df-block-description">
                                HTML CSS SCSS EJS
                            </p>
                        </div>

                        <div className="skills__df-block no-top about__width">
                            <p className="skills__df-block-title">
                                Tools
                            </p>
                            <p className="skills__df-block-description">
                                VSCode Figma WebStorm Git Font Awesome
                                Bootstrap Icon Bootstrap
                            </p>
                        </div>
                        <div className="skills__df-block about__width">
                            <p className="skills__df-block-title">
                                Frameworks
                            </p>
                            <p className="skills__df-block-description">
                                React
                            </p>
                        </div>
                </div>
                <InfoText text={infoTextApi[1]}/>
                <div className="fun">
                    <div className="fun__facts">
                        <div className="fun__facts__block">
                            <p className="fun__facts__text">I like winter more than summer</p>
                            <p className="fun__facts__text">I often make websites</p>
                        </div>
                        <div className="fun__facts__block">
                            <p className="fun__facts__text">I like pizza and pasta</p>
                            <p className="fun__facts__text">I was in Kazakhstan, Aktau</p>
                        </div>
                        <div className="fun__facts__block">
                            <p className="fun__facts__text">I completed web development courses</p>
                        </div>

                        <div className="fun__facts__block">
                        <p className="fun__facts__text">My favorite movie is The Green Mile</p>
                        <p className="fun__facts__text">I like listen music</p>
                    </div>
                    </div>
                    <div className="fun__geometry">
                        <img src={dot} alt="#" className={'fun__geometry__img'}/>
                        <img src={logo} alt="#" className={'fun__geometry__img-logo'}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About