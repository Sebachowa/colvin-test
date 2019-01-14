import React from 'react'
import { Button } from './styled'

const BackButton = props => {
  return <Button onClick={() => props.onGoBack()}><i class="backward icon">Back</i></Button>
}

export default BackButton;