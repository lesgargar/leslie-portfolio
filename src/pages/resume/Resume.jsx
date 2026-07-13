import DownloadResume from "../../components/resumePage/download-cv/DownloadResume"
import Education from "../../components/resumePage/education/Education"
import Languajes from "../../components/resumePage/languajes/Languajes"
import ProfesionalExperience from "../../components/resumePage/profesionalExp/ProfesionalExperience"
import Profile from "../../components/resumePage/profile/Profile"
import ResumeTitle from "../../components/resumePage/resumeTitle/ResumeTitle"
import Skills from "../../components/resumePage/skills/Skills"
import "./resume.css"

export default function Resume (){
    return (
        <div className="resume">
            <div className="container">
                <DownloadResume/>
                <div className="page">
                    <ResumeTitle/>
                    <Profile/>
                    <Skills/>
                    <ProfesionalExperience/>
                    <Education/>
                    <Languajes/>
                </div>
            </div>
        </div>
    )
}