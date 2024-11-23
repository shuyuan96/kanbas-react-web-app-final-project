import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
      id: 1, title: "NodeJS Assignment",
      description: "Create a NodeJS server with ExpressJS",
      due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Create a module",
        course: "CS5610 NodeJs",
    })
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
    return (
      <div>
        <h3 id="wd-working-with-objects">Working With Objects</h3>
        <h4>Retrieving Objects</h4>
        <a id="wd-retrieve-assignments" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/assignment`}>
            Get Assignment
        </a><hr/>
        <h4>Retrieving Properties</h4>
        <a id="wd-retrieve-assignment-title" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/assignment/title`}>
            Get Title
        </a><hr/>
        <h4>Modifying Properties</h4>
        <a id="wd-update-assignment-title"
           className="btn btn-primary float-end"
           href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
          Update Title
        </a>
        <input className="form-control w-75" id="wd-assignment-title"
            defaultValue={assignment.title} onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })}/>
        <br />
        <a id="wd-update-assignment-score"
            className="btn btn-primary float-end"
            href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
            Update Score
        </a>
        <input className="form-control w-75" id="wd-assignment-title"
            value={assignment.score} type="number" onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
        <br />
        <div className="d-flex align-items-center">
            <input
                className="me-3 checkbox-height checkbox-width"
                id="wd-assignment-completed"
                checked={assignment.completed}
                type="checkbox"
                onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
            />
            <a
                id="wd-update-assignment-completed"
                className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
            >
                Update Completed
            </a>
        </div>
        <br />
        <hr />
        <h4>Retrieving Modules</h4>
            <a id="wd-retrieve-modules" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a><hr />
            <h4>Retrieving Properties of Modules</h4>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a><hr />
            <h4>Modifying Properties of Modules</h4>
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input className="form-control w-75" id="wd-module-name"
                value={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <br />
            <a id="wd-update-module-description"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/score/${module.description}`}>
                Update Module Description
            </a>
            <input className="form-control w-75" id="wd-module-description"
                value={module.description} onChange={(e) => {
                    setModule({ ...module, description: e.target.value });
                }} />
            <hr />
      </div>
  );}
  