import styled from 'styled-components';
import { Colors } from '../UI/variables';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src='../../src/assets/logo-nbaplay.png' />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;  
  border-bottom: 1px solid ${Colors.textColor};
`;
const HeaderLogo = styled.img`
  width: 250px;
  height: auto;
`;
