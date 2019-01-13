import React from 'react'
import { Link } from "react-router-dom";
import { Card, QuoteContent,QuoteBody, QuoteAuthor } from './styled.js'

const QuoteCard = (props) => {
  const { content, image, author, id } = props.quote;
  return (
    <Card image={image}>
      <Link to={`/quotes/${id}`}>
        <QuoteContent>
          <QuoteBody>{content}</QuoteBody>
          <QuoteAuthor>{author}</QuoteAuthor>
        </QuoteContent>
      </Link>
    </Card>
  )
}

export default QuoteCard
