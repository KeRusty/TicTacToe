import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameStateType } from './types';

const gameInitialState: GameStateType = {
  id: 0,
  board: [],
  currentPlayer: '',
  status: '',
  winner: 'null',
  userId: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState: gameInitialState,
  reducers: {
    startGameSession: (state, { payload }: PayloadAction<any>) => {
      state.id = payload?.id;
      state.board = payload?.board;
      state.currentPlayer = payload?.currentPlayer;
      state.status = payload?.status;
      state.winner = payload?.winner;
      state.userId = payload?.userId;
    },
    // setUserDetails: (state, { payload }: PayloadAction<any>) => {
    //   state.token = payload?.token;
    //   state.name = payload?.user?.name;
    //   state.email = payload?.user?.email;
    //   state.id = payload?.user?.id;
    // },
    // removeUserdetails: state => {
    //   return Object.assign(state, gameInitialState);
    // },
  },
});

export const { startGameSession } = gameSlice.actions;
export default gameSlice.reducer;
