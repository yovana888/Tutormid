import styled from 'styled-components';
import { colors } from '../../../Styles/colors'; 
import {Link} from 'react-router-dom';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80%;
  position: sticky;
  top: 0;
  z-index: 99;
  border-bottom: 1px solid ${colors.lineColor};
  background:white;
  padding:20px 3.3rem;
`