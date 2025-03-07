// Secure Storage library
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCombineReducers } from 'redux-persist';

// slices
import { userSlice } from './slices/user/userSlice';
import { gameSlice } from './slices/game/slice';

const reducers = {
  user: userSlice.reducer,
  game: gameSlice.reducer,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: undefined,
};

// Setup Reducers
export const persistedRootReducer = persistCombineReducers(persistConfig, reducers);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;
