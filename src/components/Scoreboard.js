import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
`;

const PlayerTitle = styled.h2`
  color: black;
  text-decoration: underline;
  text-transform: uppercase;
`;

const PlayerSymbol = styled.p`
  margin: 0;
`;

const Scoreboard = props => {
  return (
    <Wrapper>
      <PlayerWrapper>
        <PlayerTitle>{'You'}</PlayerTitle>
        <PlayerSymbol>{'X'}</PlayerSymbol>
      </PlayerWrapper>
      <PlayerWrapper>
        <PlayerTitle>{'AI'}</PlayerTitle>
        <PlayerSymbol>{'O'}</PlayerSymbol>
      </PlayerWrapper>
    </Wrapper>
  );
};

export default Scoreboard;
