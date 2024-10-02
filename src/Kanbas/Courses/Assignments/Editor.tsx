export default function AssignmentsEditor() {
  return (
    <div className="container mt-4">
      <form>
        <div className="mb-3 row">
          <label htmlFor="assignmentName" className="col-form-label">Assignment Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              id="assignmentName"
              placeholder="A1 - ENV + HTML"
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-10">
            <div className="p-3 border" id="assignmentDetails">
              <p>The assignment is <span style={{ color: 'red' }}>available online</span></p>
              <p>Submit a link to the landing page of your Web application running on Netlify.</p>
              <p>The landing page should include the following:</p>
              <ul>
                <li>Your full name and section</li>
                <li>Links to each of the lab assignments</li>
                <li>Link to the Kanbas application</li>
                <li>Links to all relevant source code repositories</li>
              </ul>
              <p>The Kanbas application should include a link to navigate back to the landing page.</p>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-10">
            <div className="mb-3 row">
              <label htmlFor="points" className="col-sm-4 col-form-label text-end">Points</label>
              <div className="col-sm-8">
                <input
                  type="number"
                  id="points"
                  placeholder="100"
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="assignmentGroup" className="col-sm-4 col-form-label text-end">Assignment Group</label>
              <div className="col-sm-8">
                <select id="assignmentGroup" className="form-select">
                  <option selected>ASSIGNMENTS</option>
                  <option value="1">One</option> 
                  <option value="2">Two</option> 
                  <option value="3">Three</option> 
                </select>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="displayGrade" className="col-sm-4 col-form-label text-end">Display Grade as</label>
              <div className="col-sm-8">
                <select id="displayGrade" className="form-select">
                  <option selected>Percentage</option>
                  <option value="1">One</option> 
                  <option value="2">Two</option> 
                </select>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="submissionType" className="col-sm-4 col-form-label text-end">Submission Type</label>
              <div className="col-sm-8">
                <div className="p-3 border">
                <select id="submissionType" className="form-select mb-3">
                  <option selected>Online</option>
                </select>
                <div>
                  <label htmlFor="entryOption" className="col-sm-4 col-form-label mb-3"><strong>Online Entry Option</strong></label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="textEntry" />
                  <label className="form-check-label" htmlFor="textEntry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="websiteUrl" checked />
                  <label className="form-check-label" htmlFor="websiteUrl">
                    Website URL
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="mediaRecordings" />
                  <label className="form-check-label" htmlFor="mediaRecordings">
                    Media Recordings
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="studentAnnotation" />
                  <label className="form-check-label" htmlFor="studentAnnotation">
                    Student Annotation
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="fileUploads" />
                  <label className="form-check-label" htmlFor="fileUploads">
                    File Uploads
                  </label>
                </div>
                </div>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="assignTo" className="col-sm-4 col-form-label text-end">Assign</label>
              <div className="col-sm-8">
                <div className="p-2 border">
                  <label htmlFor="assignToPeople" className="col-sm-4 col-form-label text-start">Assign to</label>
                  <input
                    type="text"
                    id="assignTo"
                    placeholder="Everyone"
                    className="form-control mb-3"
                  />
                  <label htmlFor="dueDate" className="form-label">Due</label>
                  <input
                    type="date"
                    id="dueDate"
                    value="2024-05-13"
                    className="form-control mb-3"
                  />
                  <div className="row">
                    <div className="col">
                      <label htmlFor="availableFrom" className="form-label">Available from</label>
                      <input
                        type="date"
                        id="availableFrom"
                        value="2024-05-06"
                        className="form-control mb-3"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="until" className="form-label">Until</label>
                      <input
                        type="date"
                        id="until"
                        placeholder=""
                        className="form-control mb-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="mb-3 row">
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-secondary me-1">Cancel</button>
              <button type="submit" className="btn btn-m btn-danger">Save</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};