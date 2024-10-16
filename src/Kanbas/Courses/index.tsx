import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { courses } from "../Database";
import Home from "./Home";
import Modules from "./Modules";
import Grades from "./Grades";
import Assignments from "./Assignments";
import AssignmentsEditor from "./Assignments/Editor";
import CoursesNavigation from "./Navigation";
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from "./People/Table";

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="ms-3 me-4 fs-4 mb-1"/>
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Modules" element={<Modules />} />
            <Route path="/Piazza" element={<h3>Piazza</h3>} />
            <Route path="/Zoom" element={<h3>Zoom Links</h3>} />
            <Route path="/Assignments" element={<Assignments />} />
            <Route path="/Assignments/:id" element={<AssignmentsEditor />} />
            <Route path="/Quizzes" element={<h3>Quizzes</h3>} />
            <Route path="/Grades" element={<Grades />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
