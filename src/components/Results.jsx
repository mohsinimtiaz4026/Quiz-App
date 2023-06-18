// styles
import "../styles/Result.css";
// link
import { Link,Navigate } from "react-router-dom";
// redux store
import { useSelector,useDispatch } from "react-redux";
// slices
import { ResetAllState } from "../redux/slices/quizSlice";
// helper
import { attempt_question,totalEarnPoints,flagResult } from "../helper/calcResult";

const Results = () => {
  const dispatch = useDispatch();
  const onRestart = () => {
    dispatch(ResetAllState());
    <Navigate to="/" replace="true"/>
  }
  const { queue,trace,userId } = useSelector(state => state.quiz);
  const totalPoints = queue.length * 10;
  const totalQuestions = queue.length; 
  const attempt = attempt_question(queue);
  const earnPoints = totalEarnPoints(queue);
  const flag = flagResult(earnPoints,totalPoints);
  
  
    return (
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        <div className="result flex-center">
          <div className="flex">
            <span>Username</span>
            <span className="bold">{userId}</span>
          </div>
          <div className="flex">
            <span>Total Quiz Points :</span>
            <span className="bold">{totalPoints}</span>
          </div>
          <div className="flex">
            <span>Total Questions :</span>
            <span className="bold">{totalQuestions}</span>
          </div>
          <div className="flex">
            <span>Total Attempt Questions :</span>
            <span className="bold">{attempt}</span>
          </div>
          <div className="flex">
            <span>Total Earn Points :</span>
            <span className="bold">{earnPoints}</span>
          </div>
          <div className="flex">
            <span>Quiz Result :</span>
            <span className="bold" style={{
              color: flag ? "green" : "red"
            }}>{flag ? "Passed" : "Failed"}</span>
          </div>
        </div>
        <div className="start">
          <Link className="btn" to="/" onClick={onRestart}>Restart</Link>
        </div>
      </div>
    );
  }
  
  export default Results;