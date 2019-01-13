import React from 'react'
import { connect } from 'react-redux'
import { setEditMode, setDeleteMode } from './../../actions'
import { ButtonContainer, Button } from './styled'

const ShowOptions = props => {
  console.log(props)
    return (
      <ButtonContainer>
        <Button onClick={props.onExportToPDF}>Export as PDF</Button>
        <Button onClick={props.setEditMode}>Edit</Button>
        <Button onClick={props.setDeleteMode}>Delete</Button>
      </ButtonContainer>
    )
}

const mapDispatchToProps = { setEditMode, setDeleteMode }

export default connect(null, mapDispatchToProps)(ShowOptions)