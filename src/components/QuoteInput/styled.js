import styled from 'styled-components'

export const QuoteContainer = styled.div`
  margin-top: 40px;
  background-color: white;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  padding-top: 100%;
  position: relative;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  :after {
    content: "";
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0; 
    background: ${props => props.image ? 'rgba(0,0,0,0.5)' : 'none'};
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
    width: 80%;
    font-size: 20px;
    font-weight: bold;
    text-align: right;
    color: ${props => props.image ? 'white' : 'black'};
    ::placeholder {
      width: 80%;
      font-size: 20px;
      font-weight: bold;
      text-align: right;
      color: ${props => props.image ? 'white' : 'black'};
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
    font-size: ${props => props.font};
    text-align: center;
    resize: none;
    z-index: 3;
    font-style: italic;
    text-align: center;
    color: ${props => props.image ? 'white' : 'black'};
    width: 80%; 
    ::placeholder {
      color: ${props => props.image ? 'white' : 'black'};
      font-size: 30px;
      font-style: italic;
      text-align: center;
    }
`;