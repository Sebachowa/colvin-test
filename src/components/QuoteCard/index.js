import React from 'react'

const QuoteCard = (props) => {
  const { content, image, author } = props.quote;
  console.log(props)
  return (
    <div>
      <p>{content}</p>
      <p>{author}</p>
      <p>{image}</p>
    </div>
  )
}

export default QuoteCard
