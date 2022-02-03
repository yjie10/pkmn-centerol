import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/pkball.svg';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const LogoContainer = styled(Link)`
  width: 100px;
  height: 100%;
`;

export const LogoStyles = styled(Logo)`
  width: 70px;
  height: 80px;
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;