import styled from 'styled-components'

export const QuoteContainer = styled.div`
  background-color: white;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */
`;

export const Form = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;
    font-size: 20px;
    text-align: center;
`;

export const Textarea = styled.textarea`
    height: 50%;
    width: 80%;
    line-height: 40px;
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;
    font-size: 30px;
    text-align: center;
    resize: none;
`;