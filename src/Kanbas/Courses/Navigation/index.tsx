import "./index.css";
import { courses } from "../../Database";
import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
   const { cid } = useParams();
   const course = courses.find((course) => course._id === cid);
   const { pathname } = useLocation();
   const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "People", "Quizzes", "Grades"];
 
   return (
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
         {links.map((link) => (
            <Link key={`${link}`} to={`${link}`} 
               className={`list-group-item border border-0
               ${pathname.includes(link) ? "active" : "text-danger"}`}>
               {link}
            </Link>
         ))}
      </div>
   );
}
export {};