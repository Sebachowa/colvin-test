import styled from 'styled-components'

export const ButtonContainer = styled.form`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
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
