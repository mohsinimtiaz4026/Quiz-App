import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    isLoading: false,
    error: null,
    queue: [],
    answers: [],
    result: [],
    userId: null,
    trace: 0,
  },
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    startExamAction(state, action) {
      return {
        ...state,
        queue: action.payload,
      };
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export default quizSlice.reducer;
const actions = quizSlice.actions;

export const ExamStart = () =>(dispatch) => {
  dispatch(actions.startLoading());
  try {
      dispatch(actions.startExamAction());
      dispatch(actions.stopLoading());
  } catch (error) {
      dispatch(actions.startLoading());
      dispatch(actions.hasError(error));
      throw error;
  }
}
export const getIsUserLoading = (state) => state.quiz.isLoading
export const getUserError = (state) => state.quiz.error
export const getQuizState = (state) => state.quiz.trace;
