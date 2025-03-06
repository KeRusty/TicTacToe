import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserStateType} from './types';

const userInitialState: UserStateType = {
  name: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    registerUser: (state, {payload}: PayloadAction<any>) => {
      state.name = payload?.firstName;
      state.email = payload?.lastName;
    },
    setUserDetails: (state, {payload}: PayloadAction<any>) => {
      console.log(payload);
    },
    removeUserdetails: state => {
      return Object.assign(state, userInitialState);
    },
  },
});

export const {registerUser, setUserDetails, removeUserdetails} =
  userSlice.actions;
export default userSlice.reducer;
