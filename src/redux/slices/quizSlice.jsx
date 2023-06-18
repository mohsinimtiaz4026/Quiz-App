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
        originalAnswer: 0,
        userAnswer:null,
      },
      {
        id: 2,
        question:
          "Following methods can be used to display data in some form using Javascript",
        options: ["document.write()", "console.log()", "window.alert()"],
        originalAnswer: 1,
        userAnswer:null,
      },
      {
        id: 3,
        question:
          "When an operator value is NULL, the typeof returned by the unary operator is:",
        options: ["Boolean", "Undefined", "Object"],
        originalAnswer: 2,
        userAnswer:null,
      },
      {
        id: 4,
        question: "What does the toString() method return?",
        options: ["Return Object", "Return String", "Return Integer"],
        originalAnswer: 1,
        userAnswer:null,
      },
      {
        id: 5,
        question:
          "Which function is used to serialize an object into a JSON string?",
        options: ["stringify()", "parse()", "convert()"],
        originalAnswer: 0,
        userAnswer:null,
      },
      {
        id:6,
        question: "What is the potential punishment for Donald Trump for unlawfully retaining classified documents after leaving the White House?",
        options: ["Up to 10 years in prison","Up to 5 years in prison","Monetary fine"],
        originalAnswer: 0,
        userAnswer: null
      },
      {
        id:7,
        question: "Who is the current speaker of Gilgit Baltistan Assembly?",
        options: ["Mir Wazir Baig","Haji Fida Muhammad Nashad","Syed Amjad Zaidi"],
        originalAnswer: 1,
        userAnswer: null
      },
      {
        id:8,
        question: "Who was sworn in for a third term as President of Turkey?",
        options: ["Recep Tayyip Erdogan","Mustafa Kemal Ataturk","Shehbaz Sharif"],
        originalAnswer: 0,
        userAnswer: null
      },
      {
        id:9,
        question: "Where did the worst Rail accident in India in over two decades occurred in June 2023?",
        options: ["Mumbai","New Delhi","Balasore"],
        originalAnswer: 2,
        userAnswer: null
      },
      {
        id: 10,
        question: "How many people have died in the worst Rail accident in India in June 2023 ?",
        options: ["288","803","120"],
        originalAnswer: 0,
        userAnswer:null
      }
    ],
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
    settingUserAnswer(state,action){
      const { questionIndex,userAnswer } = action.payload;
      state.queue[questionIndex].userAnswer = userAnswer;
    },
    resetAllState(state,action){
      state.userId = null;
      state.queue.map((e,i) => {
        state.queue[i].userAnswer = null
      })
      state.trace = 0;
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setQuestionTrace(state,action){
      state.trace = action.payload;
    }
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
export const SetTrace = (trace) => (dispatch) => {
  dispatch(actions.startLoading());
  try {
    dispatch(actions.setQuestionTrace(trace));
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.startLoading());
    dispatch(actions.hasError(error));
    throw error;
  }
};
export const PushUserAnswer = (questionIndex,userAnswer) => (dispatch) => {
  dispatch(actions.startLoading());
  try {
    dispatch(actions.settingUserAnswer({questionIndex,userAnswer}));
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.startLoading());
    dispatch(actions.hasError(error));
    throw error;
  }
};
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
