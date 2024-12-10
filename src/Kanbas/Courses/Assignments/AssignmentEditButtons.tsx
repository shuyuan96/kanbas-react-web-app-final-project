import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function AssignmentEditButtons({ assignmentId, deleteAssignment }: {
    assignmentId: string; deleteAssignment: (moduleId: string) => void; 
}) {
    const handleDelete = (assignmentId: string) => {
        if (window.confirm("Are you sure you want to delete this assignment?")) {
            deleteAssignment(assignmentId);
        }
    };

    return (
        <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
            <FaTrash className="text-danger me-2 mb-1" onClick={() => handleDelete(assignmentId)}/>
        </div>
    );
}

export {};