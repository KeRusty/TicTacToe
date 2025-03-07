import { RootState } from '../../reducer';
import { GameStateType } from './types';

export const getGameDetails = (state: RootState): GameStateType | null => {
  return state.game ?? null;
};
