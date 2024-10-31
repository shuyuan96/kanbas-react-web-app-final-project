import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addAssignment } from "./reducer"; 

export default function AssignmentsControls() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cid } = useParams();
  const handleAddAssignment = () => {
    const newAssignmentId = new Date().getTime().toString();
    navigate(`/Kanbas/Courses/${cid}/Assignments/${newAssignmentId}`);
  };

  return (
    <div id="wd-assignment-controls" className="text-nowrap">
      {isFaculty && (
        <button
          id="wd-add-module-btn"
          className="btn btn-lg btn-danger me-1 float-end"
          onClick={handleAddAssignment}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
      )}
      {isFaculty && (
        <button
          id="wd-add-module-btn"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>
      )}
      <input
        className="form-control me-sm-5 float-end"
        type="search"
        placeholder="&#xF002; Search..."
        style={{
          fontFamily: "Arial, FontAwesome",
          height: "50px",
          width: "300px",
        }}
      />
    </div>
  );
}
