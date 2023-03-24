import React from "react";
function InfoText(props) {

    return (
        <div>
            <div className="contacts">
                <div className="projects">
                    <div className="projects__tit-line">
                        <h3 className="projects__tit-line-title"><span>#</span>{props.text}</h3>
                        <div className="projects__tit-line-line"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default InfoText;