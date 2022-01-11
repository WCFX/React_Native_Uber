import { configureStore } from '@reduxjs/toolkit';

import { navReducer } from '~/slices';

const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

export { store };
