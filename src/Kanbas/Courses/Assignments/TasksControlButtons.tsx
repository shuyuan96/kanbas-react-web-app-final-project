import { IoEllipsisVertical } from "react-icons/io5"; 
import { FaPlus } from "react-icons/fa6"; 

export default function TasksControlButtons() {
  return ( 
    <div className="float-end ms-auto"> 
      <FaPlus /> 
      <IoEllipsisVertical className="fs-4" /> 
    </div> 
  );
}