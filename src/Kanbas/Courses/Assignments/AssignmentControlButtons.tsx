import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <h6 style={{display: 'inline-block', padding: '0.25rem 0.5rem', 
                border: '1px solid', borderRadius: '15px', marginRight: '0.5rem' }}>
                    40% of Total</h6>
            <BsPlus className="fs-2"/>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}

export {};