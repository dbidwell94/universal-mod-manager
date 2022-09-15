import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const getSupportedInstalledGames = createAsyncThunk("getSupportedInstalledGames", () => {});

interface IGameState {
  selectedGame: string | null;
  installedSupportedGames: string[];
}

export function createGameState() {
  const initialState: IGameState = {
    selectedGame: null,
    installedSupportedGames: [],
  };

  return createSlice({
    name: "gameReducer",
    initialState,
    reducers: {
      setSupportedInstalledGames: (state, action: PayloadAction<string[]>) => {
        state.installedSupportedGames = action.payload;
      },
    },
  });
}

const defaultState = createGameState();

export const { setSupportedInstalledGames } = defaultState.actions;
export default { reducer: defaultState.reducer };
