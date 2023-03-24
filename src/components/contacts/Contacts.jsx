import React from "react";
import telegram from "../home/img/icons8-telegram-app-32.png";
 const Contacts =()=> {
    return (
        <>
            <div className="container main-container home">
                <p className="title"><span className={"title_color"}>/</span>Contacts</p>
                <p className="title__list">
                    Who am I?
                </p>

                <div className="contacts contacts-top">
                    <section className="contacts_me contacts_me__main">
                        <div className="contacts_me__text">
                            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                        </div>
                       <div className={'massage'}>
                           <div className="contacts_me__block massage_margins ">
                               <p className="contacts_me__block__message  text-center ">
                                   call me
                               </p>
                               <div className="social__media">
                                   <a href='tel:+998917771169' className="connection">
                                       <p className="social__media__text">+998917771169</p>
                                   </a>
                               </div>
                           </div>
                           <div className="contacts_me__block massage_margins ">
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
                       </div>


                    </section>
                </div>
            </div>
        </>
    )
}
export default Contacts