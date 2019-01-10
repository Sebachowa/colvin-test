import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Card = styled.div`
  background-color: white;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 600px;
  height: 600px;
  position: relative;
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
  font-size: 40px;
  text-align: center;
  color: white;
  font-family: 'Bad Script', cursive;
`;

export const QuoteAuthor = styled.h1`
  width: 80%;
  margin-top: 20px;
  color: white;
  font-size: 30px;
  text-align: right;
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-family: 'Dosis', sans-serif;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;