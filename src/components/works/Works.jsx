import InfoText from "../InfoText";
import {WorksPropsComponent} from "./WorksPropsComponent";

const Works =() =>{
    const infoTextApi = [
        'Complete-sites'
    ]
    return (
        <>
            <div className="container main-container home">
                <p className="title"><span className={"title_color"}>/</span>Projects</p>
                <p className="title__list">
                    List of my project
                </p>

                <InfoText text={infoTextApi[0]}/>
                <WorksPropsComponent/>
            </div>
        </>
    )
}
export default Works;