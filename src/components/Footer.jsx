import {NavLink} from "react-router-dom";
import logo from "./header/logo.svg";
import React from "react";


export function Footer() {
    return (
        <>
        <footer className="footer">
            <section className="container main-container">
                <div className="footer__info">
                    <div className="footer__contact">
                        <NavLink to="/" className={"main__logo"}>
                            <img
                                src={logo}
                                alt="logo"
                                className={'footer__info__logo'}
                            />
                            <p className={'footer__info__text'}>IdeaIU</p>
                        </NavLink>
                    </div>
                    <div className="footer__media">
                        <div className="footer__media__based">
                            Front-end developer based in Uzbekistan
                        </div>
                        <p className="footer__media__copy">
                            © Copyright 2023. Made by Yuldashev Farkhod
                        </p>
                    </div>

                </div>
            </section>
        </footer>
        </>
    )
}