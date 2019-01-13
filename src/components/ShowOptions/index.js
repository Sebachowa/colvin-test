import React from 'react'
import { connect } from 'react-redux'
import { setEditMode } from './../../actions'
import { ButtonContainer, Button } from './styled'

const ShowOptions = props => {
  return (
    <ButtonContainer>
      <Button>Export as PDF</Button>
      <Button onClick={props.setEditMode}>Edit</Button>
      <Button>Delete</Button>
    </ButtonContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    isEdit: state.quotes.isEdit
  }
}
const mapDispatchToProps = { setEditMode }

export default connect(mapStateToProps, mapDispatchToProps)(ShowOptions)