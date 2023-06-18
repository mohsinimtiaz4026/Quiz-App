import { useEffect, useState } from "react";
// components
import Questions from "./Questions";
// redux store
import { useSelector, useDispatch } from "react-redux";
// slices
import {
  QuestionTraceIncrement,
  QuestionTraceDecrement,
  PushUserAnswer,
} from "../redux/slices/quizSlice";
// react-router-dom
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  function generateRandomArray() {
    var numbers = [];
  
    while (numbers.length < 5) {
      var randomNumber = Math.floor(Math.random() * 11); // Generate a random number between 0 and 10
  
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
  
    return numbers;
  }
  
  var randomArray = generateRandomArray();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { queue, trace } = useSelector((state) => state.quiz);
  const [check, setCheck] = useState(null);
  const onPrevious = () => {
    dispatch(QuestionTraceDecrement());
  };
  const onNext = () => {
    if (trace == queue.length - 1) {
      dispatch(PushUserAnswer(trace,check));
      navigate("/result");
    } else {
      dispatch(QuestionTraceIncrement());
      dispatch(PushUserAnswer(trace,check));
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
