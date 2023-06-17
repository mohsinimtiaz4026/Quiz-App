// styles
import "../styles/Result.css";
// link
import { Link } from "react-router-dom";

const Results = () => {
  const onRestart = () => {
    console.log("Restart button clicked");
  }
    return (
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        <div className="result flex-center">
          <div className="flex">
            <span>Username</span>
            <span className="bold">Raj Chaudhary</span>
          </div>
          <div className="flex">
            <span>Total Quiz Points :</span>
            <span className="bold">50</span>
          </div>
          <div className="flex">
            <span>Total Questions :</span>
            <span className="bold">05</span>
          </div>
          <div className="flex">
            <span>Total Attempt Questions :</span>
            <span className="bold">03</span>
          </div>
          <div className="flex">
            <span>Total Earn Points :</span>
            <span className="bold">30</span>
          </div>
          <div className="flex">
            <span>Quiz Result :</span>
            <span className="bold">Passed</span>
          </div>
        </div>
        <div className="start">
          <Link className="btn" to="/" onClick={onRestart}>Restart</Link>
        </div>
      </div>
    );
  }
  
  export default Results;