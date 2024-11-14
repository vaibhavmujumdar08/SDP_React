// src/components/Homepage.jsx
import React, { useState } from 'react';
import '../styles/Homepage.css';

function Homepage() {
  const [question, setQuestion] = useState("");

  const handleInputChange = (e) => setQuestion(e.target.value);

  const handleSubmit = () => {
    if (question.trim() === "") {
      alert("Please enter a question.");
      return;
    }
    console.log("Submitted question:", question);
    setQuestion(""); // Clear input after submission
    // TODO: Integrate with backend to handle question submission
  };

  // Sample data - replace with dynamic data as needed
  const trendingQuestions = [
    "How can AI improve team collaboration?",
    "What are the ethical considerations of using AI in the workplace?",
    "How does natural language processing work?",
  ];

  const categories = ["Technology", "Health", "Education", "Business", "Lifestyle"];

  return (
    <div className="homepage">
      <header className="header">
        <h1>AIQuest Community</h1>
        <p>Ask questions, get answers powered by AI</p>
      </header>

      <section className="question-input">
        <input
          type="text"
          value={question}
          onChange={handleInputChange}
          placeholder="What's your question?"
          className="input-field"
        />
        <button onClick={handleSubmit} className="ask-button">Ask</button>
      </section>

      <section className="trending-questions">
        <h2>Trending Questions</h2>
        <ul>
          {trendingQuestions.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
      </section>

      <section className="categories">
        <h2>Categories</h2>
        <div className="categories-list">
          {categories.map((category, index) => (
            <span key={index} className="category-item">{category}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Homepage;
