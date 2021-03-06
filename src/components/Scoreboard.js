import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { CHOOSE_PLAYER_SYMBOL } from '../actions/constants';
import { X, O } from '../symbols/symbols';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Play', sans-serif;
  font-size: 40px;
  letter-spacing: 1px;
`;

const Header = styled.h3`text-align: center;`;

const ChoicesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  width: 100%;
`;

const ChoicesForm = styled.form`
  display: ${props => (!props.hide ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  font-family: 'Permanent Marker', cursive;
`;

const ChoiceInput = styled.input`margin-right: 15px;`;

const Scoreboard = ({ terminalState, humanPlayer, choosePlayerSymbol }) => {
  return (
    <Wrapper>
      <Title>
        {'FCC TicTacToe'}
      </Title>
      <ChoicesForm hide={humanPlayer}>
        <Header>
          {'Choose your symbol'}
        </Header>
        <ChoicesWrapper>
          <InputWrapper>
            <ChoiceInput
              type="radio"
              name="choice"
              value={X}
              checked={humanPlayer}
              onChange={choosePlayerSymbol}
            />
            {X}
          </InputWrapper>
          <InputWrapper>
            <ChoiceInput
              type="radio"
              name="choice"
              value={O}
              checked={humanPlayer}
              onChange={choosePlayerSymbol}
            />
            {O}
          </InputWrapper>
        </ChoicesWrapper>
      </ChoicesForm>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    humanPlayer: state.humanPlayer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    choosePlayerSymbol: event =>
      dispatch({
        type: CHOOSE_PLAYER_SYMBOL,
        payload: event.target.value,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
