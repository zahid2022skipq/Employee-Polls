import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";
import "./newpoll.css";
const NewPoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const handleFirstOptionChange = (e) => {
    const value = e.target.value;
    setFirstOption(value);
  };

  const handleSecondOptionChange = (e) => {
    const value = e.target.value;
    setSecondOption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
    navigate("/");
  };

  return (
    <div className="poll-container">
      <h1 className="new-poll">New Poll</h1>
      <form onSubmit={handleSubmit}>
        <div className="label-container">
          <label
            htmlFor="firstOption"
            data-testid="firstOptionLabel"
            className="block text-sm font-medium text-slate-700"
          >
            First Option
          </label>
          <div className="label-container">
            <input
              value={firstOption}
              onChange={handleFirstOptionChange}
              type="text"
              name="firstOption"
              id="firstOption"
              data-testid="firstOption"
              className="input"
            />
          </div>
        </div>

        <div className="label-container">
          <label
            htmlFor="secondOption"
            data-testid="secondOptionLabel"
            className=""
          >
            Second Option
          </label>
          <div className="label-container">
            <input
              value={secondOption}
              onChange={handleSecondOptionChange}
              type="text"
              name="secondOption"
              id="secondOption"
              data-testid="secondOption"
              className="input"
            />
          </div>
        </div>

        <div className="btn-container">
          <button type="submit" data-testid="submit-poll" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
