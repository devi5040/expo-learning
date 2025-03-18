import {evaluate} from 'mathjs';

const {createSlice} = require ('@reduxjs/toolkit');

const initialState = {userInput: '', output: 0};

const calculatorSlice = createSlice ({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    updateUserInput: (state, action) => {
      state.userInput += action.payload;
    },
    calculateOutput: (state, action) => {
      try {
        const result = evaluate (action.payload);
        state.output = result;
      } catch (error) {
        state.output = 'Invalid Expression';
      }
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;
export default calculatorSlice.reducer;
