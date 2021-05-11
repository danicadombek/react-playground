import * as React from 'react'
import Pagination from './Pagination'
import Cards from './Cards'

export default () => {
  return (
    <div>

      <Cards
        title="Wie sieht es aus?"
        copyText="Das ist die beste Antwort auf diese Frage."
      />
      <Cards
        isBookmarked
        title="Frage"
        copyText="Hier steht ein überaus sinnvoller und hilfreicher Text."
      />
      <Pagination isLeftDisabled text="1/34" />
    </div>
  )
}
