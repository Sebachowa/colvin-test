import styled from 'styled-components'

export const FormContainer = styled.div`
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  line-height: 40px;
  padding-left: 10px;
  color: black;
  border-radius: 5px;
  outline: none;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  line-height: 30px;
  padding-left: 10px;
  color: black;
  border-radius: 5px;
  resize: none;
  outline: none;
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
  :hover {
    box-shadow: 0px 0px 20px rgba(0,0,0,0);
    color: #067bc2;
  }
`;

export const ErrorContainer = styled.div`
  height: 20px;
  width: 100%;
  color: red;
`;

export const Error = styled.p`
  color: red;
`;

export const Label = styled.p`
  padding-left: 10px;
  padding-bottom: 5px;
  margin: 0;
`;