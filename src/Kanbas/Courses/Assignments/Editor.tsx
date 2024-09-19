export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={40} rows={10}>
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr><br />
          
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option selected value="ASSIGNMENTS">
                        ASSIGNMENTS</option>
                </select>
            </td>
          </tr><br />
          
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option selected value="PERCENTAGE">
                        Percentage</option>
                </select>
            </td>
          </tr><br />
           
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option selected value="ONLINE">
                        Online</option>
                </select>
            </td>
          </tr><br />
          
          <tr>
            <td></td>
            <td align="left" valign="top">
            <label>Online Entry Options</label>
            </td>
          </tr>
            
          <tr> 
            <td></td>
            <td align="left" valign="top">
            <input type="checkbox" name="check-genre" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="check-genre" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

            <input type="checkbox" name="check-genre" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label><br/>
            </td>
          </tr>
          <br/>
        
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign</label>
            </td> 
            <td>
                <label htmlFor="wd-assign-to">Assign to</label>
            </td> 
          </tr><br />
            <td>
                <input id="wd-assign-to" value={"Everyone"}/> <br />
            </td> 
            
          
            <tr>
                <td></td>
                <td align="left" valign="top">
                    <label htmlFor="wd-due-date"> Due</label>
                </td> 
            </tr><br />
            <td>
                <input type="date" id="wd-due-date" value="2024-05-13"/><br/>
            </td><br/>

            <tr>
                <td></td>
                <td align="left" valign="top">
                <label htmlFor="wd-available-from" style={{ marginRight: '25px' }}> Available from</label>
                <label htmlFor="wd-available-until" > Until</label>
                </td> 
            </tr><br />
            <td>
            <input type="date"
                id="wd-available-from" style={{ marginRight: '5px' }}
                value="2024-05-06"/>
            <input type="date"
                id="wd-available-until"
                value="2024-05-20"/>
            </td>

        </table>
        <hr />
      </div>
  );}
  