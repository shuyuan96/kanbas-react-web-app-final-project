import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { enroll, unenroll } from "./Enrollments/reducer";
import "./styles.css";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const isStudent = currentUser.role === "STUDENT";
  const [showEnrollments, setShowEnrollments] = useState(true);
  const enrollments = useSelector(
    (state: any) => state.enrollmentsReducer.enrollments
  );

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}

      {isStudent && (
        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={() => setShowEnrollments(!showEnrollments)}
        >
          {showEnrollments
            ? "Enrollments"
            : "Show Enrolled Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-courses">
        {isFaculty
          ? `Published Courses (${courses.length})`
          : showEnrollments
          ? `Enrolled Courses (${
              courses.filter((course) => isEnrolled(course._id)).length
            })`
          : `Available Courses (${courses.length})`}
      </h2>
      <hr />

      <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses
          .filter(
            (course) =>
              isFaculty || (showEnrollments ? isEnrolled(course._id) : true)
          )
          .map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              currentUser={currentUser}
              isEnrolled={isEnrolled(course._id)}
              isStudent={isStudent}
              deleteCourse={deleteCourse}
              setCourse={setCourse}
            />
          ))}
      </div>
    </div>
  );
}

function CourseCard({
  course,
  currentUser,
  isEnrolled,
  isStudent,
  deleteCourse,
  setCourse,
}: {
  course: any;
  currentUser: any;
  isEnrolled: boolean;
  isStudent: boolean;
  deleteCourse: (courseId: string) => void;
  setCourse: (course: any) => void;
}) {
  const dispatch = useDispatch();
  const isFaculty = currentUser.role === "FACULTY";

  return (
    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
      <div
        className="card rounded-3 overflow-hidden"
        style={{ height: "100%" }}
      >
        <Link
          to={`/Kanbas/Courses/${course._id}/Home`}
          className="wd-dashboard-course-link text-decoration-none text-dark"
        >
          <img
            src="/images/reactjs.jpg"
            width="100%"
            height={160}
          />
          <div
            className="card-body"

          >
            <h5
              className="wd-dashboard-course-title card-title"

            >
              {course.name}
            </h5>
            <p
              className="wd-dashboard-course-description card-text overflow-y-hidden"
              style={{ maxHeight: 100 }}
            >
              {course.description}
            </p>
            <div className="button-container mt-auto">
              <button
                className={
                  isFaculty ? "btn btn-primary me-5" : "btn btn-primary"
                }
              >
                Go
              </button>
              {isEnrolled && isStudent && (
                <button
                  className="btn btn-danger ms-2"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      unenroll({ user: currentUser._id, course: course._id })
                    );
                  }}
                >
                  Unenroll
                </button>
              )}
              {!isEnrolled && isStudent && (
                <button
                  className="btn btn-success ms-2"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      enroll({ user: currentUser._id, course: course._id })
                    );
                  }}
                >
                  Enroll
                </button>
              )}
              {isFaculty && (
                <>
                  <button
                    className="btn btn-warning ms-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}