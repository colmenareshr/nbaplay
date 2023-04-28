import styled from 'styled-components';
import { Colors } from '../UI/variables';

const ChannelInfo = () => {
  return (
    <ChannelContainer>
      <ChannelLogo src='./nba-play-icon.svg' alt='NBA Play Logo Channel' />
      <ChannelTitle>NBA Play</ChannelTitle>
    </ChannelContainer>
  );
};

export default ChannelInfo;

const ChannelContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ChannelLogo = styled.img`
  width: 100px;
  height: auto;
  border: 2px solid ${Colors.textColor};
  border-radius: 50%;
`;

const ChannelTitle = styled.h1`
  padding: 0.5rem;
  font-size: 1.7rem;
`;
