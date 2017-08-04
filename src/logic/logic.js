/* ============================================================================
                                 Row Logic
============================================================================= */
/**
 * @method countInRow
 *
 * @param {string} symbol
 * @param {array} row
 *
 * @returns {number} symbol count for row
 */
export const countInRow = (symbol, row) =>
  row.filter(cell => cell === symbol).length;

export const hasThreatInRow = (symbol, row) => countInRow(symbol, row) === 2;

export const hasWonInRow = (symbol, row) => countInRow(symbol, row) === 3;

/* ============================================================================
                                 Column Logic
============================================================================= */
export const countInColumn = (symbol, rowNumber, colNumber, ...rows) =>
  rows.map(row => row[colNumber]).filter(cell => cell === symbol).length;

export const hasThreatInColumn = (symbol, row, colNumber, ...rows) =>
  countInColumn(symbol, colNumber, ...rows) === 2;

export const hasWonInColumn = (symbol, rowNumber, colNumber, ...rows) =>
  countInColumn(symbol, rowNumber, colNumber, ...rows) === 3;

/* ============================================================================
                                 Left Diagonal/Slant Logic
============================================================================= */
export const countInLeftSlant = (symbol, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[0], row1[1], row2[2]].filter(cell => cell === symbol).length;
};

export const hasThreatInLeftSlant = (symbol, ...rows) =>
  countInLeftSlant(symbol, ...rows) === 2;

export const hasWonInLeftSlant = (symbol, ...rows) =>
  countInLeftSlant(symbol, ...rows) === 3;

/* ============================================================================
                                 Right Diagonal/Slant Logic
============================================================================= */

export const countInRightSlant = (symbol, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[2], row1[1], row2[0]].filter(cell => cell === symbol).length;
};

export const hasThreatInRightSlant = (symbol, ...rows) =>
  countInRightSlant(symbol, ...rows) === 2;

export const hasWonInRightSlant = (symbol, ...rows) =>
  countInRightSlant(symbol, ...rows) === 3;

/* ============================================================================
                                 Game Logic
============================================================================= */
export const getRows = gameBoard =>
  Object.keys(gameBoard).map(row => gameBoard[row]);

export const isDraw = turnNumber => turnNumber === 9;
