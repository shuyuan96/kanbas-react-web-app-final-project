import { Link, useParams } from "react-router-dom";
export default function AssignmentsSaveButtons({ onSave }: { onSave: () => void }) {
  const { cid } = useParams();
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
        <button
          id="wd-add-module-btn"
          className="btn btn-lg btn-danger me-1 float-end"
          onClick={onSave}
        >
          Save
        </button>
      </Link>
      <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
        <button
          id="wd-add-module-btn"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          Cancel
        </button>
      </Link>
    </div>
  );
}
