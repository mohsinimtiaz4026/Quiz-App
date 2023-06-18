import { useEffect, useState } from "react";
// components
import Questions from "./Questions";
// redux store
import { useSelector, useDispatch } from "react-redux";
// slices
import {
  QuestionTraceIncrement,
  QuestionTraceDecrement,
  ExamAnswerResultPush,
} from "../redux/slices/quizSlice";
// react-router-dom
import { Navigate } from "react-router-dom";

const Quiz = () => {
  const dispatch = useDispatch();
  const { result,queue,trace } = useSelector((state) => state.quiz);
  const [check, setCheck] = useState(undefined);
  const onPrevious = () => {
    dispatch(QuestionTraceDecrement());
  };
  const onNext = () => {
    if (result.length && result.length >= queue.length) {
      return <Navigate to={"/result"} replace="true"></Navigate>;
    } else {
      dispatch(QuestionTraceIncrement());
      dispatch(ExamAnswerResultPush(check));
    }
  };
  const onChecked = (check) => {
    setCheck(check);
  };
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* questions */}
      <Questions onChecked={onChecked} />

      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={() => onPrevious()}>
            Previous
          </button>
        ) : (
          <div></div>
        )}
        <button className="btn next" onClick={() => onNext()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
