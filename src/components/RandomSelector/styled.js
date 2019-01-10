import styled from 'styled-components'

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background-color: lightgray;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 2px 20px rgba(0,0,0,0.2);
  :hover {
    box-shadow: 0px 0px 20px rgba(0,0,0,0);
    color: #067bc2;
  }
`;