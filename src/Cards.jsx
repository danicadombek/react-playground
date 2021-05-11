import * as React from 'react'
import './Cards.css'

export default function Cards({
  title,
  questionText,
  answerText,
  isBookmarked,
}) {
  return (
    <section className="Cards">
      <h2 className="Card-headline">{title}</h2>
      <div
        role="button"
        className={isBookmarked ? 'bookmark--selected bookmark' : 'bookmark'}
        aria-label="bookmark"
      ></div>
      <p>Question: {questionText}</p>
      <p>Answer: {answerText}</p>
    </section>
  )
}
