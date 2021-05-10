import * as React from 'react'
import Button from './Button'

export default () => {
  return (
    <div>
      <Button isActive={true}>Hey ho</Button>
      <Button isActive={false}>Not active</Button>
    </div>
  )
}
