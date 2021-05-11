import * as React from 'react'
import './Cards.css'

export default function Cards({ title, copyText, isBookmarked }) {
  return (
    <section className="Cards">
      <h2 className="Card-headline">{title}</h2>
      <div
        role="button"
        className={isBookmarked ? 'bookmark--selected bookmark' : 'bookmark'}
        aria-label="bookmark"
      ></div>
      <p>{copyText}</p>
    </section>
  )
}
