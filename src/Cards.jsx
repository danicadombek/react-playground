import * as React from 'react'
import './Cards.css'

export default function Cards({ isBookmarked }) {
  return (
    <section className="Cards">
      <h2 className="Card-headline">Title</h2>
      <div
        role="button"
        className={isBookmarked ? 'bookmark--selected bookmark' : 'bookmark'}
        aria-label="bookmark"
      ></div>
      <p>Hier steht ein überaus sinnvoller und hilfreicher Text.</p>
    </section>
  )
}
