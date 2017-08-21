import React from 'react';
import styled from 'styled-components';

const BlankCell = styled.div`
  width: 100%;
  height: 100%;
`;

const BlankSymbol = ({ symbol, tile, ...props }) => {
  return <BlankCell onClick={() => props.addSymbol(symbol, tile)} />;
};

export default BlankSymbol;
