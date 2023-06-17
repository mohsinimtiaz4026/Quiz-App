// components
import Questions from "./Questions";

const Quiz = () => {
  const onPrevious = () => {
    console.log("On Previous Button");
  };
  const onNext = () => {
    console.log("On Next Button");
  };
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* questions */}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={() => onPrevious()}>
          Previous
        </button>
        <button className="btn next" onClick={() => onNext()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
