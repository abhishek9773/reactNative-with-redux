import {configureStore} from '@reduxjs/toolkit';
import {slice1} from '../StoreSlice/slice1';

export default configureStore({
  reducer: {
    counter: slice1,
  },
});
