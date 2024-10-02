import { FaFileImport } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";

export default function GradesControls() {
	return (
    <div id="wd-grades-controls" className="text-nowrap">
      <button id="wd-add-grades-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <IoIosSettings  /> 
      </button> 
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-export" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <FaFileExport className="position-relative me-2" style={{ bottom: "1px" }} /> 
            Export
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-export-a-btn" className="dropdown-item" href="#/Labs">
              export A
            </a> 
          </li> 
        <li>
          <a id="wd-export-b-button" className="dropdown-item" href="#/Labs">
              export B
          </a> 
        </li> 
        </ul>
      </div> 
      <button id="wd-import-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaFileImport className="position-relative me-2" style={{ bottom: "1px" }} />
        Import 
      </button> 
    </div> 
  );
}