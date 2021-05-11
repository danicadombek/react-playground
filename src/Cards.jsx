import * as React from 'react'
import './Cards.css'

export default function Cards({
  title,
  questionText,
  answerText,
  isBookmarked,
  isAnswerVisible,
  tags,
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
      <div className="Card-tags-container">
        {tags.map(tag => (
          <div className="Card-tag-style" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </section>
  )
}
