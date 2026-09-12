import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1>Share Your Feedback</h1>
        <p className="subtitle">We value your opinion</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <select
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            required
          >
            <option value="">Select Rating</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
          </select>

          <textarea
            placeholder="Write your feedback"
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            required
          ></textarea>

          <button type="submit">Send Feedback</button>
        </form>

        {submitted && (
          <p className="success">
            Thank you for your feedback, {name}!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;