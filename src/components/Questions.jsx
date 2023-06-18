// redux
import { useSelector } from "react-redux";

const Questions = ({ onChecked }) => {
  const onSelect = (i) => {
    onChecked(i);
  };
  const questionIndex = useSelector((state) => state.quiz.trace);
  const state = useSelector((state) => state.quiz.queue);
  const question = state[questionIndex];
  const { queue, trace } = useSelector((state) => state.quiz);
  return (
    <div className="questions">
      <div className="text-light">{question?.question}</div>

      <ul key={question?.id}>
        {question?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              name={`q${question.id}-options`}
              value={false}
              disabled={question.userAnswer != null}
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div
              className={`check ${
                queue[trace].userAnswer === i ? "checked" : ""
              } `}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
