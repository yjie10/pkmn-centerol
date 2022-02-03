import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #000;
  color: #fff;
  border: none;

  &:hover {
    background-color: #2f2f2f;
    box-shadow: 3px 3px 5px #e3e3e3;  
  }

  &:active {
    background-color: #808080;
  }
`;

const invertedButtonStyles = css`
  background-color: #fff;
  color: #000;
  border: none;

  &:hover {
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
  }
`;

const googleSignInStyles = css`
  background-color: #fff;
  color: #000;
  border: 2px solid #000;

  &:hover {
    box-shadow: 3px 3px 5px #d1d1d1;  
  }

  &:active {
    background-color: #d9d9d9;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 35px;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  border-radius: 20px;

  ${getButtonStyles}
`;