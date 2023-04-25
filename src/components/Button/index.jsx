import styled from 'styled-components';
import { Colors } from '../UI/variables';

const Button = ({ children, primary }) => {
  return (
    <ButtonContainer>
      <ButtonPrimary primary={primary} href='#'>
        {children}
      </ButtonPrimary>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const ButtonPrimary = styled.a`
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: ${(props) =>
    props.primary ? Colors.primaryBtn : Colors.secondaryBtn};
  color: ${(props) =>
    props.primary ? Colors.textPrimaryBtn : Colors.textSecondaryBtn};
  font-weight: 700;
`;
