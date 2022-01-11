/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTraveTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTraveTimeInformation } =
  navSlice.actions;

interface NavState {
  nav: {
    origin: string;
    destination: string;
    travelTimeInformation: string;
  };
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectOrigin = (state: NavState) => state?.nav?.origin;
export const selectDestination = (state: NavState) => state?.nav?.destination;
export const selectTravelTimeInformation = (state: NavState) =>
  state?.nav?.travelTimeInformation;

export default navSlice.reducer;
