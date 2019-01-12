import React from 'react'
import { Link } from "react-router-dom";
import { Card, QuoteContent,QuoteBody, QuoteAuthor } from './styled.js'

const QuoteCard = (props) => {
  const { content, image, author, id } = props.quote;
  return (
    <Card image={image}>
      <QuoteContent>
        <QuoteBody>{content}</QuoteBody>
        <QuoteAuthor>{author}</QuoteAuthor>
        <Link to={`/quotes/${id}`}>CLICK</Link>
      </QuoteContent>
    </Card>
  )
}

export default QuoteCard
