import React from 'react';
import styled from 'styled-components';

const BlankCell = styled.div`
  width: 100%;
  height: 100%;
`;

const BlankSymbol = ({ row, cell, turn, ...props }) => {
  return <BlankCell onClick={() => props.addSymbol(row, cell, turn)} />;
};

export default BlankSymbol;
