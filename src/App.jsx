import * as React from 'react'
import Pagination from './Pagination'
import Cards from './Cards'

const cards = [
  {
    title: 'Wie sieht es aus?',
    questionText: 'Das ist die beste Antwort auf diese Frage.',
    answerText: 'Lorem ipsulum',
    isBookmarked: true,
    id: 1,
  },
  {
    title: 'Frage',
    questionText: 'Hier steht ein überaus sinnvoller und hilfreicher Text.',
    answerText: 'Lorem ipsulum',
    isBookmarked: true,
    id: 2,
  },
]

export default () => {
  return (
    <div>
      {cards.map(({ id, title, questionText, answerText, isBookmarked }) => (
        <Cards
          key={id}
          title={title}
          questionText={questionText}
          answerText={answerText}
          isBookmarked={isBookmarked}
        />
      ))}

      <Pagination isLeftDisabled text="1/34" />
    </div>
  )
}
