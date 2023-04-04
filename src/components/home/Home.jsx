import avatar from "./image-removebg-preview2.png";
import home_logo from "./home_logo.svg";
import home_dots from "./Dots.svg"
import {Routes, Route, Link, NavLink} from "react-router-dom";
import Contacts from "../contacts/Contacts";
import Works from "../works/Works";
import About from "../about-me/About";
import Typewriter from "typewriter-effect";
import skills_dots_1 from './img/skillsDotsOne.svg';
import skills_dots_2 from './img/skillsDotsTwo.svg';
import skills_squad_big from './img/skillsSquadBig.svg';
import skills_squad_small from './img/skillsSquadSmall.svg';
import telegram from './img/icons8-telegram-app-32.png'
import skills_logo from './img/skillsLogo.svg';
import about_me from './img/about-me.png';
import cv from './document/cv.pdf';
import InfoText from "../InfoText";
import {HomeProjectsProps} from "./HomeProjectsProps";
const Home = () => {
  const infoTextApi = [
    'Projects','Skills','About-me','Contacts'
  ]
  return (
    <>
      <div className="container main-container home">
        <div className="row">
          <div className="col-xl-6 col-lg-12 d-flex flex-column justify-content-center home__b-1">
            <h1 className="home__h">
              <Typewriter
                onInit={(typewriter) => (
                  typewriter.typeString("My name is <span>Farkhod</span>\n" +
                    "and I'm a <span>front-end developer</span>")
                    .start()
                )}
              />
            </h1>
            <p className="home__descr">
              I craft responsive websites where technologies meet creativity
            </p>
           <div className="home__contact_info">
               <button className="btn home__btn"><Link to="/contacts" className="home__contact">
                   Contact me!!
               </Link></button>
               <a className="btn home__btn home__contact" href={cv} download={'cv.pdf'}>Download CV</a>
           </div>
          </div>
          <div className="col-xl-6 col-lg-12  home__b-2">
            <div className="home__preview">
              <img src={avatar} className={"home__avatar"} alt="Avatar"/>
              <img src={home_logo} className={"home__logo"} alt="homeLoge"/>
              <img src={home_dots} className={"home__dots"} alt="Dots"/>
            </div>
            <div className="home__working">
              <div className="home__working-border">
                <div className="home__working-color"></div>
                <p className="home__working-description">
                  Currently working on <span>Portfolio</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home__dr-who">
          <h2 className="home__dr-who-qoutes">
            <span className={"home__dr-who-qoutes-left"}>&ldquo;</span>With great power comes great electricity bill
            <span className={"home__dr-who-qoutes-right"}> &rdquo;</span>
          </h2>
          <p className="home__dr-who-autor">
            - Dr. Who
          </p>
        </div>
        
        
        <div className="projects">
          <div className="projects__tit-line">
            <h3 className="projects__tit-line-title"><span>#</span>Projects</h3>
            <div className="projects__tit-line-line"></div>
          </div>
          <div className="projects__view-line">
            <NavLink to={'/works'} className="projects__view-line-view">View All ~~ </NavLink>
            <div className={"projects__view-line-line"}></div>
          </div>
          <img src={home_dots} className={"projects__dots"} alt=""/>
        </div>
        
        <HomeProjectsProps/>
        <InfoText text={infoTextApi[1]}/>
        
        <div className="skills">
          <div className="skills__geometry">
            <img src={skills_dots_1} alt="dots" className={"skills__geometry-dots-1"}/>
            <img src={skills_dots_2} alt="dots-2" className={"skills__geometry-dots-2"}/>
            <img src={skills_squad_big} alt="squad" className={"skills__geometry-squad-big"}/>
            <img src={skills_squad_small} alt="squad-sm" className={"skills__geometry-squad-small"}/>
            <img src={skills_logo} alt="squad-sm" className={"skills__geometry-logo"}/>
          </div>
          <div className="skills__main">
            
            <div className="skills__df">
              <div className="skills__df-block">
                <p className="skills__df-block-title">
                  Languages
                </p>
                <p className="skills__df-block-description">
                  JavaScript
                </p>
              </div>
            </div>
            
            <div className="skills__df">
              <div className="skills__df-block">
                <p className="skills__df-block-title">
                  CMS
                </p>
                <p className="skills__df-block-description">
                  WordPress
                </p>
              </div>
              <div className="skills__df-block">
                <p className="skills__df-block-title">
                  Other
                </p>
                <p className="skills__df-block-description">
                  HTML CSS SCSS EJS
                </p>
              </div>
            </div>
            
            
            <div className="skills__df">
              <div className="skills__df-block">
                <p className="skills__df-block-title">
                  Tools
                </p>
                <p className="skills__df-block-description">
                  VSCode Figma WebStorm Git Font Awesome
                  Bootstrap Icon Bootstrap
                </p>
              </div>
              <div className="skills__df-block">
                <p className="skills__df-block-title">
                  Frameworks and library
                </p>
                <p className="skills__df-block-description">
                  React Vue
                </p>
              </div>
            </div>
          
          </div>
        </div>


        <InfoText text={infoTextApi[2]}/>
        <div className="skills about-me">
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
            <button className="btn home__btn"><Link to="/About" className="home__contact">
              Read more ->
            </Link></button>
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


        <div className="contacts">
          <InfoText text={infoTextApi[3]}/>

            <section className="contacts_me">
                <div className="contacts_me__text ">
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </div>


                <div className="contacts_me__block ">
                    <p className="contacts_me__block__message  text-center ">
                        Message me here
                    </p>
                    <div className="social__media">
                        <a href='https://t.me/SpaseDef' className="connection">
                            <img src={telegram} alt="#" className={'.social__media__icon'}/>
                            <p className="social__media__text">Telegram</p>
                        </a>
                    </div>
                </div>


            </section>
        </div>
      </div>





      <Routes>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}
export default Home