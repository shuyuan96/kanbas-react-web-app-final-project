import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentsControls";
import AssignmentsTabButtons from "./AssignmentsTabButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import TaskControlButtons from "./TaskControlButtons";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { setAssignments } from "./reducer";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);


  return (
    <div className="d-flex" id="wd-assignments">
      <div className="flex-fill">
        <div className="me-4 ms-5">
          <AssignmentControls />
          <br />
          <br />
          <br />
          <br />
          <ul id="wd-assignment-list" className="list-group rounded-0">
            <li className="wd-assignment-list list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-assignments-title p-4 ps-2 bg-secondary">
                {isFaculty && (<BsGripVertical className="me-2 fs-3" />)}
                <IoMdArrowDropdown className="me-2 fs-3" />
                ASSIGNMENTS {isFaculty && (<AssignmentsTabButtons />)}
              </div>
              {assignments
                .map((assignment: any) => (
                  <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <a
                        className="wd-assignment-link text-dark"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <TaskControlButtons />
                      </a>
                      <div>
                        <h4 className="mb-0">
                          <strong>
                            <a
                              className="wd-assignment-link text-dark"
                              href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                              style={{ textDecoration: "none" }}
                            >
                              {assignment.title}
                            </a>
                          </strong>
                        </h4>
                        <p id="wd-assignment-description" className="mb-0">
                          <span className="text-danger">Multiple Modules</span>{" "}
                          |
                          <span className="text-muted">
                            <strong> Not available until</strong>{" "}
                            {assignment.date}{" "}
                          </span>
                          |
                          <br />
                          <span className="text-muted">
                            <strong>Due</strong> {assignment.due}{" "}
                          </span>
                          |<span className="text-muted"> {assignment.points} pts</span>
                        </p>
                      </div>
                    </div>
                    {isFaculty && (<AssignmentControlButtons assignmentId={assignment._id} />)}
                  </li>
                ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}