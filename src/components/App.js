import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionItem from "./QuestionItem";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [quizQuestion, setQuizQuestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => {
        setQuizQuestion(data);
      });
  }, []);

  function handleAdd(newQuiz) {
    setQuizQuestion([...quizQuestion, newQuiz]);
  }

  const displayQuestions = quizQuestion.map((quiz) => (
    <QuestionItem key={quiz.id} question={quiz} />
  ));

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm handleAdd={handleAdd} />
      ) : (
        <QuestionList displayQuestions={displayQuestions} />
      )}
    </main>
  );
}

export default App;
