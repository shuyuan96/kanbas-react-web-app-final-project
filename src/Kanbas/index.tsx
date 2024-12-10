import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import * as client from "./Courses/client";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import {useLocation} from "react-router-dom";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const location = useLocation();
    const fetchCourses = async () => {
        const courses = await client.fetchAllCourses();
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, [location]);
    
    const [course, setCourse] = useState<any>({
        name: "New Course", number: "", image: "new.jpg", color: "black",
        startDate: "", endDate: "", department: "", credits: 0,
        description: "New Description",
    });
    const addNewCourse = async() => {
        const newCourse = await client.createCourse(course);
        setCourses([...courses, newCourse]);
    };
    const deleteCourse = async(courseId: string) => {
        await client.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    }; 
    const updateCourse = async() => {
        await client.updateCourse(course);
        setCourses(
            courses.map((c) => {
            if (c._id === course._id) {
                return course;
            } else {
                return c;
            }
            })
        );
    };
  
    return (
        <Provider store={store}>
            <Session>
            <div id="wd-kanbas" className="h-100vs">
                <div className="d-flex h-100">
                    <div className="d-none d-md-block bg-black">
                        <KanbasNavigation />
                    </div>
                    <div className="flex-fill p-4">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Account/*" element={<Account />} />
                            <Route path="Dashboard" element={
                                <ProtectedRoute>
                                  <Dashboard
                                        refreshCourses={fetchCourses}
                                        courses={courses}
                                        course={course}
                                        setCourse={setCourse}
                                        addNewCourse={addNewCourse}
                                        deleteCourse={deleteCourse}
                                        updateCourse={updateCourse} />
                                </ProtectedRoute> } />
                            <Route path="Courses/:cid/*" element={
                                <ProtectedRoute>
                                    <Courses courses={courses} />
                                </ProtectedRoute> } />
                            <Route path="Calendar" element={<h1>Calendar</h1>} />
                            <Route path="Inbox" element={<h1>Inbox</h1>} />
                        </Routes>
                    </div>
                </div>  
            </div>
            </Session>
        </Provider>
    );
}

export {};