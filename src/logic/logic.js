import _flatten from 'lodash/flatten';
import store from '../store';

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

export const flattenBoard = gameBoard =>
  _flatten(Object.keys(gameBoard).map(row => gameBoard[row]));

export const isDraw = gameBoard => getEmptyTiles(gameBoard).length === 0;

export const getEmptyTiles = gameBoard =>
  flattenBoard(gameBoard).filter(tile => tile !== 'X' && tile !== 'O');

export const winningMove = (player, gameBoard) => {
  const board = flattenBoard(gameBoard);
  if (
    (board[0] === player && board[1] === player && board[2] === player) ||
    (board[3] === player && board[4] === player && board[5] === player) ||
    (board[6] === player && board[7] === player && board[8] === player) ||
    (board[0] === player && board[3] === player && board[6] === player) ||
    (board[1] === player && board[4] === player && board[7] === player) ||
    (board[2] === player && board[5] === player && board[8] === player) ||
    (board[0] === player && board[4] === player && board[8] === player) ||
    (board[2] === player && board[4] === player && board[6] === player)
  ) {
    return true;
  } else {
    return false;
  }
};

export const minimax = (currentPlayer, newBoard) => {
  let moves = [];
  let bestMove;
  const { humanPlayer, aiPlayer } = store.getState();
  const availableTiles = getEmptyTiles(newBoard);

  // checks for the terminal states such as win, lose, or tie
  // and return a value accordingly
  if (winningMove(humanPlayer, newBoard)) {
    return { score: -10 };
  } else if (winningMove(aiPlayer, newBoard)) {
    return { score: 10 };
  } else if (isDraw(newBoard)) {
    return { score: 0 };
  }

  availableTiles.forEach((tile, index) => {
    // create object for each and store index of that tile
    let move = {};

    // set the empty tile to the current player
    newBoard[availableTiles[index]] = currentPlayer;

    /* collect the score resulted from calling minimax
      on the opponent of the current player */
    if (currentPlayer === aiPlayer) {
      const { score } = minimax(humanPlayer, newBoard);
      move.score = score;
    } else {
      const { score } = minimax(aiPlayer, newBoard);
      move.score = score;
    }

    // reset the spot to empty
    newBoard[availableTiles[index]] = tile;

    // push the object to the array
    moves.push(move);

    if (currentPlayer === aiPlayer) {
      let bestScore = -9999;
      moves.forEach((move, index) => {
        if (move.score > bestScore) {
          bestScore = move.score;
          bestMove = index;
        }
      });
    } else {
      let bestScore = 9999;
      moves.forEach((move, index) => {
        if (move.score < bestScore) {
          bestScore = move.score;
          bestMove = index;
        }
      });
    }

    return moves[bestMove];
  });
};
