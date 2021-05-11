import * as React from 'react'
import Pagination from './Pagination'
import Cards from './Cards'

const cards = [
  {
    title: 'Wie sieht es aus?',
    text: 'Das ist die beste Antwort auf diese Frage.',
    isBookmarked: false,
    id: 1,
  },
  {
    title: 'Frage',
    text: 'Hier steht ein überaus sinnvoller und hilfreicher Text.',
    isBookmarked: true,
    id: 2,
  },
]

export default () => {
  return (
    <div>
      {cards.map(({ id, title, text, isBookmarked }) => (
        <Cards
          key={id}
          title={title}
          copyText={text}
          isBookmarked={isBookmarked}
        />
      ))}

      <Pagination isLeftDisabled text="1/34" />
    </div>
  )
}
