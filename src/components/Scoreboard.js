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

const Header = styled.h3`
  text-align: center;
  color: black;
`;

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

const InputWrapper = styled.div`display: flex;`;

const ChoiceInput = styled.input`margin-right: 15px;`;

const Scoreboard = props => {
  return (
    <Wrapper>
      <h1>FCC Tic-tac-toe</h1>
      <ChoicesForm hide={props.turn}>
        <Header>
          {'Choose your symbol (X or O)'}
        </Header>
        <ChoicesWrapper>
          <InputWrapper>
            <ChoiceInput
              type="radio"
              name="choice"
              value={X}
              checked={props.turn}
              onChange={props.choosePlayerSymbol}
            />
            {X}
          </InputWrapper>
          <InputWrapper>
            <ChoiceInput
              type="radio"
              name="choice"
              value={O}
              checked={props.turn}
              onChange={props.choosePlayerSymbol}
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
    turn: state.turn,
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
