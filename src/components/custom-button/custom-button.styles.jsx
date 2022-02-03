import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #000;
  color: #fff;
  border: none;

  &:hover {
    background-color: #2f2f2f;
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
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #3578e8;
    border: none;
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
  text-transform: uppercase;
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