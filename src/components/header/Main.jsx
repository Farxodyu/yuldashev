import React, {useState} from "react";
import logo from "./logo.svg"
import {Routes, Route, NavLink} from "react-router-dom";
import Works from "../works/Works";
import About from "../about-me/About";
import Contacts from "../contacts/Contacts";
import Home from "../home/Home";
import {Footer} from "../Footer";
import '../burgerjs'
///////
const Main = () => {
    ///////////////////////////////////

    const inState = [
        {id: 1, name: 'home', link: '/'},
        {id: 2, name: 'works', link: '/works'},
        {id: 3, name: 'about-me', link: '/about'},
        {id: 4, name: 'contacts', link: '/contacts'}
    ];
    const [links] = useState(inState);
    //////////////////////////////////

    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container main-container nav_padding nav__component">
                    <NavLink to="/" className={"main__logo"}>
                        <img
                            src={logo}
                            alt=""
                        />
                        <p>IdeaIU</p>
                    </NavLink>
                    <div className={"header__navigation"}>
                        <ul className="navbar-nav main__navbar">
                            {links.map((link) => (
                                <li key={link.id} className={'header__link'}>
                                    <NavLink
                                        to={link.link}
                                        activeclassname={"active"}>
                                        <span>#</span>{link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/works" element={<Works/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default Main;