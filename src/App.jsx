import * as React from 'react'
import Pagination from './Pagination'
import Cards from './Cards'
import Navigation from './Navigation'

const cards = [
  {
    title: 'React',
    questionText: 'Wie sieht es aus?',
    answerText: 'Hier steht ein überaus sinnvoller und hilfreicher Text.',
    isBookmarked: false,
    isAnswerVisible: true,
    id: 1,
    tags: ['React ', 'Javascript ', 'CSS '],
  },
  {
    title: 'Java-Script',
    questionText: 'Warum machen wir das so?',
    answerText: 'Hier steht ein überaus sinnvoller und hilfreicher Text.',
    isBookmarked: true,
    isAnswerVisible: false,
    id: 2,
    tags: ['React ', 'Javascript'],
  },
]

export default () => {
  return (
    <div>
      <Navigation />
      {cards.map(
        ({
          id,
          title,
          questionText,
          answerText,
          isBookmarked,
          isAnswerVisible,
          tags,
        }) => (
          <Cards
            key={id}
            title={title}
            questionText={questionText}
            answerText={answerText}
            isBookmarked={isBookmarked}
            isAnswerVisible={isAnswerVisible}
            tags={tags}
          />
        )
      )}

      <Pagination isLeftDisabled text="1/34" />
    </div>
  )
}
