import React from 'react'
import { ButtonContainer, Button } from './styled'

const ShowOptions = () => {
  return (
    <ButtonContainer>
      <Button>Export as PDF</Button>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </ButtonContainer>
  )
}

export default ShowOptions