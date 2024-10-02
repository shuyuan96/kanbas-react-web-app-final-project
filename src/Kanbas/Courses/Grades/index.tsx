import GradesControls from "./GradesControls";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineFunnel } from "react-icons/hi2";
import { LiaFileExportSolid } from "react-icons/lia";
import "../../styles.css";

export default function Grades() {
  return (
    <div className="container mt-3">
      <div className="grades-controls">
        <GradesControls/>
      </div>
      <br /><br /><br />
      <form>
        <div className="row">
          <div className="col col-sm-6">
            <label htmlFor="assignmentName" className="col-form-label">Student Names</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <IoIosSearch />
              </span>
              <select
                className="form-select border-start-0"
                id="studentName">
                <option value="" disabled selected hidden>Search Students</option>
                <option value="student A">student A</option>
                <option value="student B">student B</option>
                <option value="student c">student C</option>
              </select>
            </div>
          </div>
          <div className="mb-3 col">
            <label htmlFor="assignmentName" className="col-form-label">Assignment Names</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <IoIosSearch />
              </span>
              <select
                className="form-select border-start-0"
                id="studentName">
                <option value="" disabled selected hidden>Search Assignments</option>
                <option value="student A">student A</option>
                <option value="student B">student B</option>
                <option value="student c">student C</option>
              </select>
            </div>
          </div>
        </div>
        <div id="wd-filter-btn" className="text-nowrap">
          <button id="wd-import-btn" className="btn btn- btn-secondary me-1">
            <HiOutlineFunnel className="position-relative me-2" style={{ bottom: "1px" }} />
              Apply Filters
          </button> 
        </div>
        <div>
        </div>
      </form>
      <div className="mt-4">
        <table className="table">
          <thead>
            <tr className="table-secondary text-center">
              <th className="text-left">Student Name</th>
              <th>A1 SETUP<br/>Out of 100</th>
              <th>A2 HTML<br/>Out of 100</th>
              <th>A3 CSS<br/>Out of 100</th>
              <th>A4 BOOTSTRAP<br/>Out of 100</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="text-danger text-left">Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr className="table-secondary text-center">
              <td className="text-danger text-left">Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr className="text-center">
              <td className="text-danger text-left">Samreen Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr className="table-secondary text-center">
              <td className="text-danger text-left">Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td>
                <input style={{ width: '70px' }} placeholder="88.03%" />
                <button id="wd-export-grade-btn" className="btn btn-m">
                  <LiaFileExportSolid />
                </button>
              </td>
              <td>98.99%</td>
            </tr>
            <tr className="text-center">
              <td className="text-danger text-left">Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr className="table-secondary text-center">
              <td className="text-danger text-left">Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
