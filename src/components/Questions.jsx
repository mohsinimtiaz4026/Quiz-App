import { useState } from "react";
// data
import data from "../database/data";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);
  const onSelect = () => {
    console.log("radio changed");
  };
  const question = data[0];
  console.log(question.options)
  return (
    <div className="questions">
      <div className="text-light">{question.question}</div>

      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              name="options"
              value={false}
              id={`q${i}-option`}
              onChange={onSelect()}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
