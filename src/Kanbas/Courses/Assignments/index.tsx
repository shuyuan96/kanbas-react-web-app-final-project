import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import TasksControlButtons from "./TasksControlButtons";
import { FaSortDown } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaSortDown className="mb-2" />
            ASSIGNMENTS
            <div className="ms-auto">
              <button className="btn btn-outline-secondary rounded-pill text-black me-2">
                40% of Total
              </button>
              <TasksControlButtons />
            </div>
          </div>
          <ul className="wd-assignments list-group rounded-0" style={{borderLeftWidth: "thick", borderLeftColor: "green", borderLeftStyle: "solid" }}>
            <li className="wd-assignment list-group-item p-3 ps-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BsGripVertical className="me-2 fs-3" />
                <VscBook className="text-success fs-4" style={{ marginTop: "5px" }} />
              </div>
              <div style={{ marginLeft: '10px'}}>
                <a className="wd-task-link" href="#/Kanbas/Courses/1234/Assignments/A1">
                  A1 - ENV + HTML
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span>
                <span> | </span>
                <strong>Not available until</strong>
                <span> May 6 at 12:00am | </span>
                <strong>Due</strong>
                <span> May 13 at 11:59pm | 100 pts</span>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <LessonControlButtons />
              </div>
            </li>
          </ul>
          <ul className="wd-assignments list-group rounded-0" style={{borderLeftWidth: "thick", borderLeftColor: "green", borderLeftStyle: "solid" }}>
            <li className="wd-assignment list-group-item p-3 ps-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BsGripVertical className="me-2 fs-3" />
                <VscBook className="text-success fs-4" style={{ marginTop: "5px" }} />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <a className="wd-task-link" href="#/Kanbas/Courses/1234/Assignments/A1">
                  A2 - CSS + BOOTSTRAP
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span>
                <span> | </span>
                <strong>Not available until</strong>
                <span> May 13 at 12:00am | </span>
                <strong>Due</strong>
                <span> May 20 at 11:59pm | 100 pts</span>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <LessonControlButtons />
              </div>
            </li>
          </ul>
          <ul className="wd-assignments list-group rounded-0" style={{borderLeftWidth: "thick", borderLeftColor: "green", borderLeftStyle: "solid" }}>
            <li className="wd-assignment list-group-item p-3 ps-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BsGripVertical className="me-2 fs-3" />
                <VscBook className="text-success fs-4" style={{ marginTop: "5px" }} />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <a className="wd-task-link" href="#/Kanbas/Courses/1234/Assignments/A1">
                  A3 - JAVASCRIPT + REACT
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span>
                <span> | </span>
                <strong>Not available until</strong>
                <span> May 20 at 12:00am | </span>
                <strong>Due</strong>
                <span> May 27 at 11:59pm | 100 pts</span>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}