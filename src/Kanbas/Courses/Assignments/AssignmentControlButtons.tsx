import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import AssignmentDeleteDialogue from "./AssignmentDeleteDialogue";
import * as assignmentsClient from "./client";

export default function AssignmentControlButtons({ assignmentId }: { assignmentId: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const dispatch = useDispatch();

  const openModal = (id: string) => {
    setDeleteTarget(id);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (deleteTarget) {
      assignmentsClient.deleteAssignment(deleteTarget);
      dispatch(deleteAssignment(deleteTarget));
      setDeleteTarget(null); 
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDeleteTarget(null);
  };

  return (
    <div className="float-end">
      <FaTrash
        className="me-3"
        onClick={() => openModal(assignmentId)}
      />
      <GreenCheckmark />
      <IoEllipsisVertical />
      <AssignmentDeleteDialogue
        isOpen={isModalOpen}
        assignmentId={deleteTarget}
        onConfirm={handleDeleteConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
}
