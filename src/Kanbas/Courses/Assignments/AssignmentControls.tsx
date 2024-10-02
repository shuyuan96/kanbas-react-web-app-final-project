import { FaPlus } from "react-icons/fa6"; 
import { IoIosSearch } from "react-icons/io";

export default function AssignmentControls() { 
  return (
    <div id="wd-assignmnets-controls" className="d-flex text-nowrap">
      <div className="input-group me-3" style={{ width: "250px" }}>
        <span className="input-group-text bg-white border-end-0">
          <IoIosSearch />
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search..."
        />
      </div>
      <div className="ms-auto">
        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
      </div>
    </div> 
  );
}
  
