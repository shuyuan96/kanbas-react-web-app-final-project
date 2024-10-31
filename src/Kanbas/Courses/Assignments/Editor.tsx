import { RxCross2 } from "react-icons/rx";
import { MdOutlineCalendarMonth } from "react-icons/md";
import AssignmentsSaveButtons from "./AssignmentsSaveButtons";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find((a: any) => a._id === aid);

  const [title, setTitle] = useState(assignment ? assignment.title : "New Assignment");
  const [description, setDescription] = useState(assignment ? assignment.description : "New Assignment Description");
  const [points, setPoints] = useState(assignment ? assignment.points : 100);
  const [dueDate, setDueDate] = useState(assignment ? assignment.due : "");
  const [startDate, setStartDate] = useState(assignment ? assignment.date : "");

  const handleSave = () => {
    if (assignment) {
      dispatch(
        updateAssignment({
          _id: aid,
          title: title,
          course: cid,
          date: startDate,
          due: dueDate,
          points: points,
          description: description,
        })
      );
    } else {
      const newAssignmentId = new Date().getTime().toString();
      dispatch(
        addAssignment({
          _id: newAssignmentId,
          title: title,
          course: cid,
          date: startDate,
          due: dueDate,
          points: points,
          description: description,
        })
      );
      navigate(`/Kanbas/Courses/${cid}/Assignments/${newAssignmentId}`);
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="mx-4">
      <div>
        <label className="fs-6" htmlFor="wd-name">
          Assignment Name
        </label>
        <input
          type="name"
          className="form-control"
          id="wd-name"
          placeholder= {title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          className="form-control "
          id="wd-description"
          placeholder={description}
          rows={15}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <div className="form-group row">
          <label
            htmlFor="wd-points"
            className="col-sm-2 col-form-label text-end"
          >
            Points
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="wd-points"
              placeholder={String(points)}
              onChange={(e) => setPoints(Number(e.target.value))}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label
            htmlFor="wd-group"
            className="col-sm-2 col-form-label text-end"
          >
            Assignment Group
          </label>
          <div className="col-sm-10">
            <select className="form-select" id="wd-group">
              <option selected>ASSIGNMENTS</option>
            </select>
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label
            htmlFor="wd-display-grade-as"
            className="col-sm-2 col-form-label text-end"
          >
            Display Grade as
          </label>
          <div className="col-sm-10">
            <select className="form-select" id="wd-display-grade-as">
              <option selected>Percentage</option>
            </select>
          </div>
        </div>
        <br />
        <div className="form-group row align-items-start">
          <label
            htmlFor="wd-submission-type"
            className="col-sm-2 col-form-label text-end d-none d-md-block"
          >
            Submission Type
          </label>
          <div className="col-sm-10">
            <div className="border border-secondary p-2">
              <select className="form-select" id="wd-submission-type">
                <option selected>Online</option>
              </select>
              <br />
              <div>
                <label>
                  <strong>Online Entry Options</strong>
                </label>
                <br />
                <br />
                <div className="form-check d-flex justify-content-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-text-entry"
                  />
                  <label
                    className="form-check-label ms-3"
                    htmlFor="wd-text-entry"
                  >
                    Text Entry
                  </label>
                  <br />
                </div>
                <br />
                <div className="form-check d-flex justify-content-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-website-url"
                  />
                  <label
                    className="form-check-label ms-3"
                    htmlFor="wd-website-url"
                  >
                    Website URL
                  </label>
                </div>
                <br />
                <div className="form-check d-flex justify-content-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-media-recordings"
                  />
                  <label
                    className="form-check-label ms-3"
                    htmlFor="wd-media-recordings"
                  >
                    Media Recordings
                  </label>
                </div>
                <br />
                <div className="form-check d-flex justify-content-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-student-annotation"
                  />
                  <label
                    className="form-check-label ms-3"
                    htmlFor="wd-student-annotation"
                  >
                    Student Annotation
                  </label>
                </div>
                <br />
                <div className="form-check d-flex justify-content-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-file-upload"
                  />
                  <label
                    className="form-check-label ms-3"
                    htmlFor="wd-file-upload"
                  >
                    File Uploads
                  </label>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="form-group row align-items-start">
          <label
            htmlFor="wd-assign-to"
            className="col-sm-2 col-form-label text-end d-none d-md-block"
          >
            Assign
          </label>
          <div className="col-sm-10">
            <div className="border border-secondary p-2">
              <div className="justify-content-start">
                <label htmlFor="wd-assign-to">
                  <strong>Assign to</strong>
                </label>
              </div>
              <div className="border border-secondary p-2">
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    backgroundColor: "#F0F0F0",
                    width: "130px",
                    height: "40px",
                    borderRadius: "5px",
                  }}
                >
                  <p className="m-3">Everyone</p>
                  <div className="m-2">
                    <RxCross2 />
                  </div>
                </div>
              </div>
              <br />
              <div className="d-flex flex-column">
                <label htmlFor="wd-due-date">
                  <strong>Due</strong>
                </label>
                <div className="d-flex">
                  <input
                    type="text"
                    id="wd-due-date"
                    className="wd-assignment-date form-control date-input"
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text d-flex justify-content-center"
                      style={{ height: "40px", width: "60px" }}
                    >
                      <MdOutlineCalendarMonth />
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column me-3 w-50">
                  <label htmlFor="wd-available-from">
                    <strong>Available from</strong>
                  </label>
                  <div className="d-flex">
                    <input
                      type="text"
                      id="wd-available-from"
                      className="form-control date-input wd-assignment-date"
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text d-flex justify-content-center align-items-center"
                        style={{ height: "40px", width: "60px" }}
                      >
                        <MdOutlineCalendarMonth />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column w-50">
                  <label htmlFor="wd-available-until">
                    <strong>Until</strong>
                  </label>
                  <div className="d-flex">
                    <input
                      type="text"
                      id="wd-available-until"
                      className="form-control date-input wd-assignment-date"
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text d-flex justify-content-center align-items-center"
                        style={{ height: "40px", width: "60px" }}
                      >
                        <MdOutlineCalendarMonth />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <br />
            <br />
            <br />
          </div>
          <hr />
          <AssignmentsSaveButtons onSave={handleSave} />
        </div>
      </div>
    </div>
  );
}