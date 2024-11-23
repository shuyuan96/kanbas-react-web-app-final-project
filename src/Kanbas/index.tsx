import { useEffect } from "react";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { Navigate, Route, Routes } from "react-router";
import "./styles.css";
import { useState } from "react";
import store from "./store";
import { Provider, useSelector } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
    const courses = await courseClient.fetchAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-9-10", endDate: "2023-12-15",
    imageUrl: "/images/reactjs.jpg",
    description: "New Description"
  });
  const addNewCourse = async () => {
    try {
        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, newCourse]);
    } catch (error) {
        console.error("Failed to add course:", error);
    }
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    )
  }
  return (
    <Session>
      <Provider store={store}>
        <div id="wd-kanbas" className="h-100 container-fluid p-0">
          <div className="d-flex h-100">
            <div className="d-none d-md-block">
              <KanbasNavigation />
            </div>
            <div className="flex-fill p-3 p-md-4 p-lg-5">
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="Dashboard" element={
                  <ProtectedRoute>
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                    />
                  </ProtectedRoute>} />
                <Route path="/Courses" element={<ProtectedRoute><Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse} /></ProtectedRoute>
                } />
                <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
                <Route path="/Studio" element={<h1>Studio</h1>} />
                <Route path="/History" element={<h1>History</h1>} />
                <Route path="/Help" element={<h1>HeLp</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </Provider>
    </Session>
  );
}