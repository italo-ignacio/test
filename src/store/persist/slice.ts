import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from 'domain/models';

interface PersistState {
  accessToken: string | null;
  refreshToken: string | null;
  isRefreshing: boolean;
  user: User | null;
  theme: 'dark' | 'light';
  redirectPath: string | null;
}

const initialState: PersistState = {
  accessToken: null,
  isRefreshing: false,
  redirectPath: null,
  refreshToken: null,
  theme: 'light',
  user: null
};

const persistSlice = createSlice({
  initialState,
  name: 'persist',
  reducers: {
    logout(state: PersistState) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
    setAuth(
      state: PersistState,
      action: PayloadAction<{ accessToken: string; user: User; refreshToken: string }>
    ) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setIsRefreshing(state: PersistState, action: PayloadAction<boolean>) {
      state.isRefreshing = action.payload;
    },
    setRedirectPath(state: PersistState, action: PayloadAction<string | null>) {
      state.redirectPath = action.payload;
    },
    setTheme(state: PersistState, action: PayloadAction<'dark' | 'light'>) {
      state.theme = action.payload;
    },
    updateUserToken(state: PersistState, action: PayloadAction<{ newToken: string; user: User }>) {
      state.accessToken = action.payload.newToken;
      state.user = action.payload.user;
    }
  }
});

export const {
  reducer: persistReducer,
  actions: { setAuth, logout, updateUserToken, setRedirectPath, setIsRefreshing, setTheme }
} = persistSlice;
