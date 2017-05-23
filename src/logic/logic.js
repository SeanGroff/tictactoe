/* eslint-disable */
const rows = Object.keys(gameBoard).map(row => gameBoard[row]);

/* ============================================================================
                                 Row Logic
============================================================================= */
const countInRow = (symbol, row) => row.filter(cell => cell === symbol).length;
const hasThreatInRow = (symbol, row) => countInRow(symbol, row) === 2;
const hasWonInRow = (symbol, row) => countInRow(symbol, row) === 3;

/* ============================================================================
                                 Column Logic
============================================================================= */
const countInColumn = (symbol, colNumber, ...rows) =>
  rows.map(row => row[colNumber]).filter(cell => cell === symbol).length;
const hasThreatInColumn = (symbol, colNumber, ...rows) =>
  countInColumn(symbol, colNumber, ...rows) === 2;
const hasWonInColumn = (symbol, colNumber, ...rows) =>
  countInColumn(symbol, colNumber, ...rows) === 3;
