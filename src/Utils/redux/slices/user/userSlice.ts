import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserStateType} from './types';

const userInitialState: UserStateType = {
  firstName: '',
  lastName: '',
  userName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    registerUser: (state, {payload}: PayloadAction<any>) => {
      state.firstName = payload?.firstName;
      state.lastName = payload?.lastName;
      state.userName = payload?.userName;
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
