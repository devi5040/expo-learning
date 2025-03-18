import calculatorSlice from './calculatorSlice';

const {configureStore} = require ('@reduxjs/toolkit');

const store = configureStore ({
  reducer: {
    calculator: calculatorSlice,
  },
});

export default store;
