import * as React from 'react'
import Pagination from './Pagination'
import Cards from './Cards'

export default () => {
  return (
    <div>
      <Cards />
      <Cards isBookmarked />
      <Pagination isLeftDisabled={true} text="1/34" />
    </div>
  )
}
