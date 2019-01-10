import React from 'react'

import { Card, QuoteContent,QuoteBody, QuoteAuthor } from './styled.js'

const QuoteCard = (props) => {
console.log(props)
  const { content, image, author } = props.quote;
  return (
    <Card image={image}>
      <QuoteContent>
        <QuoteBody>{content}</QuoteBody>
        <QuoteAuthor>{author}</QuoteAuthor>
      </QuoteContent>
    </Card>
  )
}

export default QuoteCard
