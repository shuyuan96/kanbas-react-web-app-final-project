import { createSlice } from '@reduxjs/toolkit';
import { assignments as initialAssignments } from '../../Database';

const initialState = {
  assignments: initialAssignments || [],
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        ...action.payload,
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        assignment => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map(assignment =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;