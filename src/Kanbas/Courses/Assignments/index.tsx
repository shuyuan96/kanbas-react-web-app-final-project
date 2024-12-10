import { BsGripVertical } from "react-icons/bs";
import { LuFileSignature } from "react-icons/lu";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link, useParams } from "react-router-dom";
import { setAssignments, addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import AssignmentEditButtons from "./AssignmentEditButtons";
import * as client from "./client";

export default function Assignments({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();

    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, [cid]);
    const removeAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };    

    return (
        <div id="wd-assignments" className="vh-100">
            <AssignmentsControls /><br /><br /><br /><br />

            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-assignments-title p-3 ps-2 bg-secondary fw-bold">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                    </div>
                    <ul className="list-group rounded-0">
                        {assignments
                            .filter((assignment: any) => assignment.course === course.number)
                            .map((assignment: any) => (
                                <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex">
                                    <BsGripVertical className="me-2 fs-3 align-self-center" />  
                                    <LuFileSignature className="ms-2 me-4 fs-3 align-self-center text-success" />
                                    <div className="align-self-center">
                                        <Link to={`${assignment._id}`} className="wd-assignment-link text-dark no-underline fw-bold">
                                            {assignment.title}
                                        </Link>
                                        <h6><span className="text-danger">Multiple Modules</span> | Not available until {assignment.available} |<br/>
                                        Due {assignment.due} | {assignment.points}</h6>
                                    </div>
                                    <div className="align-self-center flex-fill">
                                        <AssignmentEditButtons 
                                            assignmentId={assignment._id}
                                            deleteAssignment={(assignmentId) => {removeAssignment(assignmentId)}}/>
                                    </div>
                                </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export {};