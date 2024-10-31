export default function AssignmentDeleteDialogue({
    isOpen,
    assignmentId,
    onConfirm,
    onCancel,
  }: {
    isOpen: boolean;
    assignmentId: string | null;
    onConfirm: () => void;
    onCancel: () => void;
  }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h5>Do you want to delete assignment {assignmentId}?</h5>
          <br/>
          <div className="modal-footer">
            <button onClick={onConfirm} className="btn btn-secondary me-3">Yes</button>
            <button onClick={onCancel} className="btn btn-danger">No</button>
          </div>
        </div>
      </div>
    );
  }