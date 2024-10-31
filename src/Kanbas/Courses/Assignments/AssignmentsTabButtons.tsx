import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignmentsTabButtons() {
  return (
    <div className="d-flex align-items-center float-end">
      <p id="wd-assignments-title"
        className="wd-rounded-corners-all-around 
     border-dark wd-border-solid fs-6 mb-0 p-2"
      >
        40% of Total
      </p>
      <BsPlus className="fs-3" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
