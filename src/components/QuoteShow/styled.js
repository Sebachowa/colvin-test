import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const MessageContainer = styled.div`
  width: 100%;
  text-align: center;
  height: 50px;
`; 

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  height: 50px;
`;

export const Button = styled.button`
  width: 80px;
  border-radius: 5px;
  border: none;
  line-height: 40px;
  background-color: lightgray;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 2px 20px rgba(0,0,0,0.2);
  margin-bottom: 20px;
  :hover {
    box-shadow: 0px 0px 20px rgba(0,0,0,0);
    color: #067bc2;
  }
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
  border: 1px solid transparent;
  padding: 5px;
  outline: none;
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
  padding: 5px;
  outline: none;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;