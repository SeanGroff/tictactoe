import _cloneDeep from 'lodash/cloneDeep';
import store from '../store';

/* ============================================================================
                                 Game Logic
============================================================================= */

const getEmptyTiles = gameBoard =>
  gameBoard.filter(tile => {
    return tile !== 'X' && tile !== 'O';
  });

export const isDraw = gameBoard => getEmptyTiles(gameBoard).length === 0;

export const winningMove = (player, board) => {
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

export const isGameOver = (player, board) => {
  if (winningMove(player, board)) {
    return { won: true, draw: false };
  } else if (isDraw(board)) {
    return { won: false, draw: true };
  } else {
    return { won: false, draw: false };
  }
};

const miniMax = (board, currPlayer) => {
  const { humanPlayer, aiPlayer } = store.getState();

  // available tiles on the game board
  const availableTiles = getEmptyTiles(board);

  // Base Case - checks for the terminal states such as win, lose, or tie and returns a value accordingly
  if (winningMove(aiPlayer, board)) {
    return { score: 10 };
  } else if (winningMove(humanPlayer, board)) {
    return { score: -10 };
  } else if (!availableTiles.length) {
    return { score: 0 };
  }

  // Create a list of all possible moves given the current game state
  const moves = availableTiles.map(tile => {
    // Generate a new board with the current position replaced by the current player symbol
    const newBoard = board.map(newTile => {
      if (newTile === tile) {
        return currPlayer;
      }
      return newTile;
    });

    // Switch to the other player (!currPlayer)
    const otherPlayer = currPlayer === humanPlayer ? aiPlayer : humanPlayer;

    return {
      tile,
      score: miniMax(newBoard, otherPlayer).score,
    };
  });

  // Get best move for the current player
  const bestMove = moves.reduce((prev, current) => {
    // The human player will choose the board that will minimize the AI score
    if (currPlayer === humanPlayer) {
      if (current.score < prev.score) return current;
      return prev;
    } else {
      // ai wants the move with the highest score
      if (current.score > prev.score) return current;
    }

    return prev;
  });

  return bestMove;
};

export const humanPlayerTurn = (symbol, tile, state) => {
  const newState = _cloneDeep(state);
  newState.gameBoard[tile] = symbol;
  const { won, draw } = isGameOver(symbol, newState.gameBoard);

  return {
    ...state,
    ...newState,
    won,
    draw,
  };
};

export const aiPlayerTurn = humanPlayerState => {
  if (humanPlayerState.won || humanPlayerState.draw) return humanPlayerState;

  const newState = _cloneDeep(humanPlayerState);
  const aiMove = miniMax(newState.gameBoard, newState.aiPlayer).tile;
  newState.gameBoard[aiMove] = newState.aiPlayer;

  const { won, draw } = isGameOver(newState.aiPlayer, newState.gameBoard);

  return {
    ...newState,
    won,
    draw,
  };
};
