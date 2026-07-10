import Profile from "../../components/resumePage/profile/Profile"
import ResumeTitle from "../../components/resumePage/resumeTitle/ResumeTitle"
import "./resume.css"

export default function Resume (){
    return (
        <div className="resume">
            <div className="container">
                <div className="page">
                    <ResumeTitle/>
                    <Profile/>
                </div>
            </div>
        </div>
    )
}