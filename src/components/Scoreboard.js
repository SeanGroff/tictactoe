import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { CHOOSE_PLAYER_SYMBOL } from '../actions/constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayersWrapper = styled.div`
  display: flex;
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

const PlayerSymbol = styled.p`margin: 0;`;

const Header = styled.h3`
  text-align: center;
  color: black;
`;

const ChoicesForm = styled.form`
  display: flex;
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
      <Header>
        {'Choose your symbol (X or O)'}
      </Header>
      <ChoicesForm>
        <InputWrapper>
          <ChoiceInput
            type="radio"
            name="choice"
            value="X"
            onChange={props.choosePlayerSymbol}
          />
          {'X'}
        </InputWrapper>
        <InputWrapper>
          <ChoiceInput
            type="radio"
            name="choice"
            value="O"
            onChange={props.choosePlayerSymbol}
          />
          {'O'}
        </InputWrapper>
      </ChoicesForm>
      <PlayersWrapper>
        <PlayerWrapper>
          <PlayerTitle>
            {'You'}
          </PlayerTitle>
          <PlayerSymbol>
            {'X'}
          </PlayerSymbol>
        </PlayerWrapper>
        <PlayerWrapper>
          <PlayerTitle>
            {'AI'}
          </PlayerTitle>
          <PlayerSymbol>
            {'O'}
          </PlayerSymbol>
        </PlayerWrapper>
      </PlayersWrapper>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    symbolChoice: state.symbolChoice,
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
