import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    isLoading: false,
    error: null,
    queue: [
      {
        id: 1,
        question: "Javascript is an _______ language",
        options: ["Object-Oriented", "Object-Based", "Procedural"],
      },
      {
        id: 2,
        question:
          "Following methods can be used to display data in some form using Javascript",
        options: ["document.write()", "console.log()", "window.alert()"],
      },
      {
        id: 3,
        question:
          "When an operator value is NULL, the typeof returned by the unary operator is:",
        options: ["Boolean", "Undefined", "Object"],
      },
      {
        id: 4,
        question: "What does the toString() method return?",
        options: ["Return Object", "Return String", "Return Integer"],
      },
      {
        id: 5,
        question:
          "Which function is used to serialize an object into a JSON string?",
        options: ["stringify()", "parse()", "convert()"],
      },
    ],
    answers: [0,1,2,1,0],
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
    incrementQuestionTrace(state, action) {
      state.trace = state.trace + 1;
    },
    decrementQuestionTrace(state, action) {
      if (state.trace > 0) {
        state.trace = state.trace - 1;
      }
    },
    resultAnswerAction(state,action) {
      state.result.push(action.payload);
    },
    resetAllState(state,action){
      return {
        userId: null,
        result: [],
      }
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export default quizSlice.reducer;
const actions = quizSlice.actions;

export const SetUser = (user) => (dispatch) => {
  dispatch(actions.startLoading());
  try {
    dispatch(actions.setUserId(user));
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.startLoading());
    dispatch(actions.hasError(error));
    throw error;
  }
};
export const QuestionTraceIncrement = () => (dispatch) => {
  dispatch(actions.startLoading());
  try {
    dispatch(actions.incrementQuestionTrace());
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.startLoading());
    dispatch(actions.hasError(error));
    throw error;
  }
};
export const QuestionTraceDecrement = () => (dispatch) => {
  dispatch(actions.startLoading());
  try {
    dispatch(actions.decrementQuestionTrace());
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.startLoading());
    dispatch(actions.hasError(error));
    throw error;
  }
};
export const ExamAnswerResultPush = (result) => (dispatch) => {
  dispatch(actions.startLoading());
  try {
    dispatch(actions.resultAnswerAction(result));
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.startLoading());
    dispatch(actions.hasError(error));
    throw error;
  }
}
export const ResetAllState = () => (dispatch) => {
  dispatch(actions.startLoading());
  try {
    dispatch(actions.resetAllState());
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.startLoading());
    dispatch(actions.hasError(error));
    throw error;
  }
}
export const getIsUserLoading = (state) => state.quiz.isLoading;
export const getUserError = (state) => state.quiz.error;
