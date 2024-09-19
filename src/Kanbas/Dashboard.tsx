import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
            <img src="/images/reactjs.jpg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/4450/Home">
                CS4450 Web Development
                </Link>
                <p className="wd-dashboard-course-title">
                Full Stack software developer
                </p>
                <Link to="/Kanbas/Courses/4450/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/reactjs.jpg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5610/Home">
                CS5610 Cloud Computing
                </Link>
                <p className="wd-dashboard-course-title">
                Fundamentals of Cloud Computing
                </p>
                <Link to="/Kanbas/Courses/5610/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/reactjs.jpg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
                CS5500 Foundation of Software Engineering
                </Link>
                <p className="wd-dashboard-course-title">
                Foundation of Software Engineering
                </p>
                <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/reactjs.jpg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
                CS6220 Data Mining
                </Link>
                <p className="wd-dashboard-course-title">
                The fundamental concepts of data mining
                </p>
                <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/reactjs.jpg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
                CS5200 Database Management Systems
                </Link>
                <p className="wd-dashboard-course-title">
                Database Management Systems
                </p>
                <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course"> 
        <img src="/images/reactjs.jpg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
                CS5800 Algorithms
                </Link>
                <p className="wd-dashboard-course-title">
                Mathematical techniques used for the design and analysis of computer algorithms.
                </p>
                <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
