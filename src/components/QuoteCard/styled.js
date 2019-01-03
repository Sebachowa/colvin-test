import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 400px;
  height: 400px;
  position: relative; /* If you want text inside of it */
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  :after {
    content: "";
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0; 
    background: rgba(0,0,0,0.5);
    pointer-events: none;
    z-index: 2;
  }
`;

export const QuoteContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 3;
`;

export const QuoteBody = styled.h1`
  width: 80%;
  font-size: 30px;
  font-weight: lighter;
  font-style: italic;
  text-align: center;
  color: white;
`;

export const QuoteAuthor = styled.h1`
  width: 80%  
  margin-top: 20px
  font-size: 20px;
  text-align: right;
`;