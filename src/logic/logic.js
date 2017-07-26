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
                                 Game Logic
============================================================================= */
export const getRows = gameBoard =>
  Object.keys(gameBoard).map(row => gameBoard[row]);

// export const isDraw = gameBoard => gameBoard.map((row, index) => row[index  ]);
