import * as React from 'react'
import Pagination from './Pagination'
import Cards from './Cards'

const cards = [
  {
    title: 'React',
    questionText: 'Wie sieht es aus?',
    answerText: 'Hier steht ein überaus sinnvoller und hilfreicher Text.',
    isBookmarked: false,
    isAnswerVisible: true,
    id: 1,
    tag1Text: 'React',
    tag2Text: 'Javascript',
    tag3Text: 'CSS',
  },
  {
    title: 'Java-Script',
    questionText: 'Warum machen wir das so?',
    answerText: 'Hier steht ein überaus sinnvoller und hilfreicher Text.',
    isBookmarked: true,
    isAnswerVisible: false,
    id: 2,
    tag1Text: 'React',
    tag2Text: 'Javascript',
    tag3Text: 'CSS',
  },
]

export default () => {
  return (
    <div>
      {cards.map(
        ({
          id,
          title,
          questionText,
          answerText,
          isBookmarked,
          isAnswerVisible,
          tag1Text,
          tag2Text,
          tag3Text,
        }) => (
          <Cards
            key={id}
            title={title}
            questionText={questionText}
            answerText={answerText}
            isBookmarked={isBookmarked}
            isAnswerVisible={isAnswerVisible}
            tag1Text={tag1Text}
            tag2Text={tag2Text}
            tag3Text={tag3Text}
          />
        )
      )}

      <Pagination isLeftDisabled text="1/34" />
    </div>
  )
}
