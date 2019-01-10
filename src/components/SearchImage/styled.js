import styled from 'styled-components'

export const FormContainer = styled.form`
  margin: 0 auto;
  width: 100%;
  padding-bottom: 4px;
  display: flex;
`;

export const Input = styled.input`
  flex: 0 1 100%;
  width: 100px;
  border: none;
  line-height: 40px;
  padding-left: 10px;
  color: black;
  border-radius: 5px 0 0 5px;
  outline: none;
`;

export const Button = styled.button`
  width: 40px;
  border-radius: 0px 5px 5px 0;
  border: none;
  background-color: lightgray;
  cursor: pointer;
  transition: all 0.1s ease;
  :hover {
    font-weight: bold;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

export const Image = styled.div`
  position: absolute;
  right: calc(50% - 80%/2);
  width: 80%;
  height: 80%;
  background-color: white;
  background-image: url('${props => props.image ? props.image : props.placeholder}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
`;

export const Label = styled.p`
  padding-left: 10px;
  padding-bottom: 5px;
  margin: 0;
`;