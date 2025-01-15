import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterSliceState {
  filter: object;
}

const initialState: FilterSliceState = {
  filter: {}
};

const filterSlice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    resetFilter(state: FilterSliceState) {
      state.filter = initialState.filter;
    },
    setFilter(state: FilterSliceState, action: PayloadAction<Partial<object>>) {
      state.filter = {
        article: action.payload === undefined ? state.filter : action.payload
      };
    }
  }
});

export const {
  reducer: filterReducer,
  actions: { resetFilter, setFilter }
} = filterSlice;
