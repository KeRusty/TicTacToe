import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AuthService from '../../Utils/api/AuthService';
import { getGameDetails } from '../../Utils/redux/slices/game/selector';
import { updateBoard } from '../../Utils/redux/slices/game/slice';

// styles
import { styles } from './styles';

type Player = 'X' | 'O' | null;
type BoardState = Player[][];

const X: Player = 'X';
const O: Player = 'O';

const TicTacToe = ({ whoStarts }: any) => {
  const gameDetail = useSelector(getGameDetails);
  const dispatch = useDispatch();

  const [board, setBoard] = useState<BoardState>([
    [X, null, null],
    [null, O, null],
    [null, null, X],
  ]);
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [currentMove, setCurrentMove] = useState<string>(whoStarts);
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);

  useEffect(() => {
    if (gameDetail?.board) {
      let parsedBoard: number[][];
      try {
        parsedBoard = typeof gameDetail.board === 'string' ? JSON.parse(gameDetail.board) : gameDetail.board;
      } catch (error) {
        console.error('Error parsing board:', error);
        parsedBoard = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ];
      }

      if (Array.isArray(parsedBoard)) {
        const newBoard: BoardState = parsedBoard.map(row =>
          row.map((cell: number) => (cell === 0 ? null : cell === 1 ? X : O)),
        );
        setBoard(newBoard);
        setIsXNext(gameDetail.currentPlayer === 'x');
        setWinner(gameDetail.winner);
        setCurrentMove(gameDetail.currentPlayer === 'x' ? 'player' : 'cpu');
      }
    }
  }, [gameDetail]);

  const checkGameStatus = async (updatedBoard: BoardState) => {
    const formattedBoard = JSON.stringify(
      updatedBoard.map(row => row.map(cell => (cell === X ? 1 : cell === O ? 2 : 0))),
    );

    dispatch(updateBoard(formattedBoard));

    try {
      const result = await AuthService.playerMove(formattedBoard, gameDetail?.id);
      return result;
    } catch (error) {
      console.error('Error checking game status:', error);
      return { status: 'error' };
    }
  };

  const handleCpuMove = async () => {
    setTimeout(async () => {
      try {
        const formattedBoard = JSON.stringify(board.map(row => row.map(cell => (cell === X ? 1 : cell === O ? 2 : 0))));
        dispatch(updateBoard(formattedBoard));
        const result = await AuthService.cpuMove(formattedBoard, gameDetail?.id);
        const { board: newBoard, status } = result;
        setBoard(newBoard.map(row => row.map((cell: number) => (cell === 1 ? X : cell === 2 ? O : null))));
        if (status !== 'ongoing') {
          setWinner(status.includes('wins') ? (status.includes('x') ? X : O) : 'Draw');
        }
        setIsXNext(true);
        setCurrentMove('player');
      } catch (error) {
        console.error('Error making CPU move:', error);
      }
    }, 500);
  };

  const handlePress = async (row: number, col: number): Promise<void> => {
    if (board[row][col] || winner) {
      return;
    }
    const newBoard: BoardState = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? (isXNext ? X : O) : cell)),
    );
    setBoard(newBoard);

    const gameStatus = await checkGameStatus(newBoard);
    if (gameStatus.status !== 'ongoing') {
      setWinner(gameStatus.winner);
    } else if (!isXNext) {
      handleCpuMove();
    }
    setIsXNext(!isXNext);
    setCurrentMove(isXNext ? 'cpu' : 'player');
  };

  const resetGame = (): void => {
    setBoard([
      [X, null, null],
      [null, O, null],
      [null, null, X],
    ]);
    setIsXNext(whoStarts === 'player');
    setWinner(null);
    setCurrentMove(whoStarts);
  };

  useEffect(() => {
    if (whoStarts === 'cpu') {
      handleCpuMove();
    }
  }, [whoStarts]);

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        {winner ? (winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`) : `Current Turn: ${currentMove}`}
      </Text>
      <View style={styles.board}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <TouchableOpacity
              key={`${rowIndex}-${colIndex}`}
              style={styles.cell}
              onPress={() => handlePress(rowIndex, colIndex)}>
              <Text style={styles.cellText}>{cell}</Text>
            </TouchableOpacity>
          )),
        )}
      </View>
      {winner && (
        <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
          <Text style={styles.resetText}>Restart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TicTacToe;
