import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import CoursesNavigation from "./Navigation";
import { FaAlignJustify } from 'react-icons/fa';
import Grades from "./Grades";
import PeopleTable from "./People/Table";
import { FaGlasses } from "react-icons/fa";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizQuestionsEditor from "./Quizzes/QuizQuestionEditor/index";
import Selector from "./Quizzes/QuizQuestionEditor/Selector";
import Preview from "./Quizzes/QuizQuestionEditor/Preview";
import TakeQuiz from "./Quizzes/QuizQuestionEditor/TakeQuiz";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const isQuizzesPage = pathname === `/Kanbas/Courses/${cid}/Quizzes`;

  return (
    <div id="wd-courses">
      {course ? (
        <>
          <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1" />
            {course.name} &gt; {pathname.split("/")[4]}
            {isQuizzesPage && (
              <button className="btn btn-secondary btn-m float-end">
                <FaGlasses /> Student View
              </button>
            )}
          </h2>
          <hr />
          <div className="d-flex">
            <div className="d-none d-md-block">
              <CoursesNavigation />
            </div>
            <div className="flex-fill">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<h3>Piazza</h3>} />
                <Route path="Zoom" element={<h3>Zoom</h3>} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/Editor" element={<AssignmentEditor />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="Quizzes" element={<h3>Quizzes</h3>} />
                <Route path="People" element={<PeopleTable />} />
                <Route path="People/:uid" element={<PeopleTable />} />
                <Route path="Quizzes" element={<Quizzes courses={courses} />} />
                <Route path="Quizzes/:qid" element={<QuizDetails />} />
                <Route path="Quizzes/:qid/DetailEditor" element={<QuizEditor />} />
                <Route path="Quizzes/:qid/QuestionEditor" element={<QuizQuestionsEditor />} />
                <Route path="Quizzes/:qid/QuestionEditor/new" element={<Selector />} />
                <Route path="Quizzes/:qid/Preview" element={<Preview />} />
                <Route path="Quizzes/:qid/take" element={<TakeQuiz />} />
                <Route path="Grades" element={<Grades />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-danger">Course does not exist.</h2>
      )}
    </div>
  );
}
