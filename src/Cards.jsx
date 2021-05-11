import * as React from 'react'
import './Cards.css'

export default function Cards({
  title,
  questionText,
  answerText,
  isBookmarked,
  isAnswerVisible,
  tag1Text,
  tag2Text,
  tag3Text,
}) {
  return (
    <section className="Cards">
      <h2 className="Card-headline">{title}</h2>
      <div
        role="button"
        className={isBookmarked ? 'bookmark--selected bookmark' : 'bookmark'}
        aria-label="bookmark"
      ></div>
      <p>Frage: {questionText}</p>
      <p className={isAnswerVisible ? 'answerText' : 'hidden'}>
        Antwort: {answerText}
      </p>
      <div className="Card-tags-style">
        <div className="Card-tags">{tag1Text.toUpperCase()}</div>
        <div className="Card-tags">{tag2Text.toUpperCase()}</div>
        <div className="Card-tags">{tag3Text.toUpperCase()}</div>
      </div>
    </section>
  )
}
