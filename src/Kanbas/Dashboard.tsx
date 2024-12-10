import { Link } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {requestEnrollCourse} from "./Courses/client";
import {useSelector} from "react-redux";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse, refreshCourses }:
    {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
        refreshCourses: () => void;
    }
) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const enrollCourse = async (courseId: string) => {
        try {
            await requestEnrollCourse(courseId);
            toast.success("Successfully enrolled course");
            refreshCourses();
        } catch (error) {
            toast.error("Failed to enroll course");
        }
    }

    return (
        <div className="p-4" id="wd-dashboard">
            <ToastContainer />
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {currentUser?.role === 'FACULTY' && (
                <>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                                id="wd-add-new-course-click"
                                onClick={addNewCourse}> Add </button>
                        <button className="btn btn-warning float-end me-2"
                                onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <hr/>
                    <input value={course.name} className="form-control mb-2"
                           onChange={(e) => setCourse({...course, name: e.target.value})}/>
                    <textarea value={course.description} className="form-control"
                              onChange={(e) => setCourse({...course, description: e.target.value})}/>
                    <hr/>
                </>
            )}
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} id="wd-dashboard-course" className="col" style={{width: "300px"}}>
                            <Link to={course.canView ? `/Kanbas/Courses/${course._id}/Home` : ''}
                                  className="text-decoration-none">
                                <div className="card rounded-3 overflow-hidden">
                                <img  src="/images/reactjs.jpg" className="card-img-top" style={{ height: '160px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <span className="wd-dashboard-course-link"
                                            style={{ textDecoration: "none", color: `${course.color}`, fontWeight: "bold "}}>
                                            {course.name}
                                        </span>
                                        <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                                            {course.description}
                                        </p>
                                        {course.canView && (
                                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-secondary"> Go </Link>
                                        )}
                                        {course.joined === false && (
                                            <button
                                                onClick={() => {
                                                    enrollCourse(course._id);
                                                }}
                                                className={'btn btn-success'}>
                                                Enroll Course
                                            </button>
                                        )}
                                        {course.editable && (
                                            <>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                        id="wd-delete-course-click">
                                                    Delete
                                                </button>
                                                <button id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        className="btn btn-warning me-2 float-end">
                                                    Edit
                                                </button>
                                            </>
                                        )}

                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}