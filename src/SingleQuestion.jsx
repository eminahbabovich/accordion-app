import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const SingleQuestion = ({ question, activeId, toggleActive }) => {
  const { id, title, info } = question
  const isActive = activeId === id
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleActive(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  )
}
export default SingleQuestion
