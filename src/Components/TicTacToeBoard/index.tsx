import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const SIZE = (width * 0.8) / 3; // Dynamic cell size

type Player = 'X' | 'O' | null;

type BoardState = Player[];

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);

  const checkWinner = (newBoard: BoardState): Player | 'Draw' | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return newBoard.includes(null) ? null : 'Draw';
  };

  const handlePress = (index: number): void => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
    setIsXNext(!isXNext);
  };

  const resetGame = (): void => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        {winner ? (winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`) : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </Text>
      <View style={styles.board}>
        {board.map((cell, index) => (
          <TouchableOpacity key={index} style={styles.cell} onPress={() => handlePress(index)}>
            <Text style={styles.cellText}>{cell}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {winner && (
        <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
          <Text style={styles.resetText}>Restart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f4f4' },
  status: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
  board: { width: width * 0.8, flexDirection: 'row', flexWrap: 'wrap' },
  cell: {
    width: SIZE,
    height: SIZE,
    borderWidth: 2,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: { fontSize: 32, fontWeight: 'bold' },
  resetButton: { marginTop: 20, padding: 10, backgroundColor: '#007bff', borderRadius: 5 },
  resetText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default TicTacToe;
