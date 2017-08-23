import React from 'react';
import styled from 'styled-components';

const BlankCell = styled.div`
  width: 100%;
  height: 100%;
`;

const BlankSymbol = ({ tile, ...props }) =>
  <BlankCell onClick={() => props.addSymbol(tile)} />;

export default BlankSymbol;
