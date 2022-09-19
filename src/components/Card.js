import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ question, author }) => {
  return (
    <Link to={"questions/" + question.id}>
      <div className="card">
        <div className="image-container">
          <img className="image" src={author?.avatarURL} alt="Author" />
        </div>
        <div className="info">
          <div className="author">{question.author}</div>
          <p className="date">{new Date(question.timestamp).toDateString()}</p>
          <p className="button-show">Show</p>
        </div>
      </div>
    </Link>
  );
};

export default connect()(Card);

/*
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="image" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
 */
