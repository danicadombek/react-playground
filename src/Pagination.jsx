import * as React from 'react'
import './Pagination.css'

export default function Pagination({ text, isLeftDisabled, isRightDisabled }) {
  return (
    <section className="Pagination">
      <button className={isLeftDisabled ? 'button' : 'active'}>&lt;</button>
      {text}
      <button className={isRightDisabled ? 'button' : 'active'}>&gt;</button>
    </section>
  )
}
