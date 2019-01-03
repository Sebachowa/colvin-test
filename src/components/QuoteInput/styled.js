import styled from 'styled-components'

export const QuoteContainer = styled.div`
  margin-top: 40px;
  background-color: white;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
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
  color: white;
  z-index: 3;
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
    z-index: 3;
    width: 80%  
    font-size: 20px;
    font-weight: bold;
    text-align: right;
    color: white;
    ::placeholder {
      width: 80%  
      font-size: 20px;
      font-weight: bold;
      text-align: right;
      color: white;
    }
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
    z-index: 3;
    font-size: 30px;
    font-style: italic;
    text-align: center;
    color: white;
    width: 80% 
    ::placeholder {
      color: white;
      font-size: 30px;
      font-style: italic;
      text-align: center;
      color: white;
    }
`;