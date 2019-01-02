import React from 'react'

const QuoteInput = (props) => {
  return (
    <div className="quote-input">
    <form action="">
      <img src={props.image} alt=""/>
      <input type="text"/>
      <input type="text"/>
      <input type="submit"/>
    </form>
    </div>
  )
}

export default QuoteInput
