import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

export default function TaskControlButtons() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  return (
    <div className="float-start me-3">
      <BsGripVertical className="fs-4" style={{color: isFaculty ? "" : "white"}}/>
      <MdOutlineAssignment className="fs-4 text-success"/>
    </div>
  );
}