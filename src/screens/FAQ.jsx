import React, { useState } from "react";
import "../css/faq.css";

export default function Faq() {
  // Define an array of FAQ items with questions and answers
  const faqData = [
    {
      question: "What is financial literacy?",
      answer:
        "Financial literacy is the ability to understand and use various financial skills, including personal financial management, budgeting, and investing. It empowers individuals to make informed and effective financial decisions."
    },
    {
      question: "Why is financial literacy important?",
      answer:
        "Financial literacy is important because it helps individuals manage their money, avoid debt, save for the future, and make wise investment choices. It contributes to financial stability and security."
    },
    // Add more FAQ items as needed
  ];

  // Use state to manage the active FAQ item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active FAQ item
  const toggleItem = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => toggleItem(index)}
          >
            <div className="question">{item.question}</div>
            {index === activeIndex && <div className="answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

