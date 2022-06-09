import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
function QuestionList() {
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestion(questions)); //updateState
  }, []);

  function handleDelete(deleteQuiz) {
    const updateQuiz = questions.filter((quiz) => quiz.id !== deleteQuiz.id);
    setQuestion(updateQuiz);
  }

  const questionDisplay = questions.map((q) => (
    <QuestionItem key={q.id} question={q} handleDelete={handleDelete} />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionDisplay}</ul>
    </section>
  );
}

export default QuestionList;
