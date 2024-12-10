import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home({ courses }: { courses: any[]; }) {
    return (
        <div id="wd-home" className="d-flex">
            <div className="flex-fill me-5">
                <Modules courses={courses}/>
            </div>
            <div className="d-none d-xl-block">
                <CourseStatus />
            </div>
        </div>
    );
}

export {};