import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  color: black;
  margin: 0;
`;

const GameInfo = props => {
  return (
    <Wrapper>
      <Header>{'FCC Tic-tac-toe'}</Header>
    </Wrapper>
  );
};

export default GameInfo;
