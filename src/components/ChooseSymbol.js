import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { CHOOSE_PLAYER_SYMBOL } from '../actions/constants';

const Wrapper = styled.div`
  text-align: center;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`;

const Header = styled.h3`
  text-align: center;
  color: black;
`;

const ChoicesForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const ChoiceInput = styled.input`
  margin-right: 15px;
`;

const ChooseSymbol = props => {
  return (
    <Wrapper>
      <Header>{'Choose your symbol (X or O)'}</Header>
      <ChoicesForm>
        <InputWrapper>
          <ChoiceInput
            type="radio"
            name="choice"
            value="X"
            onChange={props.choosePlayerSymbol} />{'X'}
        </InputWrapper>
        <InputWrapper>
          <ChoiceInput
            type="radio"
            name="choice"
            value="O"
            onChange={props.choosePlayerSymbol} />{'O'}
        </InputWrapper>
      </ChoicesForm>
    </Wrapper>
  );
};

// const mapStateToProps = state => {
//   return {
//     symbolChoice: state.symbolChoice,
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    choosePlayerSymbol: event =>
      dispatch({
        type: CHOOSE_PLAYER_SYMBOL,
        payload: event.target.value,
      }),
  };
};

export default connect(null, mapDispatchToProps)(ChooseSymbol);
