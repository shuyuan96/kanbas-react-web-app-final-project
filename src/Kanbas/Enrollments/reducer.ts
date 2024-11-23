import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
  user: string;
  course: string;
  _id?: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
  showAllCourses: boolean;
}

const initialState: EnrollmentState = {
  enrollments: [],
  showAllCourses: true
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    enrollInCourse: (state, action: { payload: { userId: string; courseId: string } }) => {
      state.enrollments.push({
        user: action.payload.userId,
        course: action.payload.courseId
      });
    },
    unenrollFromCourse: (state, action: { payload: { userId: string; courseId: string } }) => {
      state.enrollments = state.enrollments.filter(
        enrollment => 
          !(enrollment.user === action.payload.userId && 
            enrollment.course === action.payload.courseId)
      );
    },
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    }
  }
});

export const { 
  setEnrollments, 
  enrollInCourse, 
  unenrollFromCourse, 
  toggleShowAllCourses 
} = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;