import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as enrollmentClient from "./Enrollments/client";
import { toggleShowAllCourses, enrollInCourse, unenrollFromCourse, setEnrollments } from "./Enrollments/reducer";
import "./styles.css";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }
) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments, showAllCourses } = useSelector((state: any) => state.enrollmentsReducer);
  const canEdit = currentUser?.role === 'FACULTY';
  const isStudent = currentUser?.role === 'STUDENT';

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) => 
        enrollment.user === currentUser._id && 
        enrollment.course === courseId
    );
  };

  const handleEnrollment = async (courseId: string) => {
    try {
      if (isEnrolled(courseId)) {
        await enrollmentClient.deleteEnrollment(currentUser._id, courseId);
        dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
      } else {
        const enrollment = await enrollmentClient.createEnrollment(currentUser._id, courseId);
        dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
      }
    } catch (error) {
      console.error("Error handling enrollment:", error);
    }
  };

  const displayedCourses = isStudent 
    ? (showAllCourses ? courses : courses.filter((course) => isEnrolled(course._id)))
    : courses;

  useEffect(() => {
    const loadEnrollments = async () => {
        try {
            const enrollments = await enrollmentClient.findAllEnrollments();
            dispatch(setEnrollments(enrollments));
        } catch (error) {
            console.error("Error loading enrollments:", error);
        }
    };
    loadEnrollments();
  }, [dispatch]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        {isStudent && (
          <button 
            className="btn btn-primary float-end"
            onClick={() => dispatch(toggleShowAllCourses())}>
            {showAllCourses ? "Show Enrolled" : "Show All Courses"}
          </button>
        )}
      </h1>
      <hr />
      {canEdit && (
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h2>New Course</h2>
            <div>
              <button onClick={updateCourse} 
                      className="btn btn-warning me-2">
                Update
              </button>
              <button onClick={addNewCourse} 
                      className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
          <input value={course.name} 
                 className="form-control mb-2"
                 onChange={(e) => setCourse({ ...course, name: e.target.value })} 
                 placeholder="New Course" />
          <textarea value={course.description}
                    className="form-control mb-2"
                    onChange={(e) => setCourse({ ...course, description: e.target.value })} 
                    placeholder="New Description" />
        </div>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5" style={{ margin: '15px -15px' }}>
          {displayedCourses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: '270px', padding: '15px' }}>
              {isStudent ? (
                isEnrolled(course._id) ? (
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none h-100">
                    <div className="card rounded-3 overflow-hidden">
                      <img  src="/images/reactjs.jpg" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                      <div className="card-body">
                        <span className="wd-dashboard-course-link"
                          style={{ textDecoration: "none", color: "navy", fontWeight: "bold", maxHeight: "3em", overflow: "hidden" }} >
                          {course.name}
                        </span>
                        <p className="wd-dashboard-course-title card-text text-muted" style={{ maxHeight: 53, overflow: "hidden" }}>
                          {course.description}
                        </p>
                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                        {canEdit && (
                          <>
                            <button id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning ms-4 me-1">
                              Edit
                            </button>
                            <button onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }} className="btn btn-danger float-end"
                              id="wd-delete-course-click">
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="card rounded-3 overflow-hidden">
                    <img src="/images/reactjs.jpg" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <span className="wd-dashboard-course-link"
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold", maxHeight: "3em", overflow: "hidden" }} >
                        {course.name}
                      </span>
                      <p className="wd-dashboard-course-title card-text text-muted" style={{ maxHeight: 53, overflow: "hidden" }}>
                        {course.description}
                      </p>
                      <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                      {canEdit && (
                        <>
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning ms-4 me-1">
                            Edit
                          </button>
                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )
              ) : (
                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none h-100">
                  <div className="card rounded-3 overflow-hidden">
                    <img src="/images/reactjs.jpg" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <span className="wd-dashboard-course-link"
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold", maxHeight: "3em", overflow: "hidden" }} >
                        {course.name}
                      </span>
                      <p className="wd-dashboard-course-title card-text text-muted" style={{ maxHeight: 100, overflow: "hidden" }}>
                        {course.description}
                      </p>
                      <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                      {canEdit && (
                        <>
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning ms-4 me-1">
                            Edit
                          </button>
                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              )}
              {isStudent && (
                <button
                  onClick={() => handleEnrollment(course._id)}
                  className={`btn ${isEnrolled(course._id) ? 'btn-danger' : 'btn-success'} mt-2 w-100`}>
                  {isEnrolled(course._id) ? 'Unenroll' : 'Enroll'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}