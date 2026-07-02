import {  Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Resume from "../pages/resume/Resume";
import NotFound from "../pages/notfound/NotFound";

export default function Layout() {
  return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
  )
}