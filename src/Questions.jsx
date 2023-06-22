import SingleQuestion from './SingleQuestion'

const Questions = ({ questions, activeId, toggleActive }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => (
        <SingleQuestion
          question={question}
          key={question.id}
          activeId={activeId}
          toggleActive={toggleActive}
        />
      ))}
    </section>
  )
}
export default Questions
