import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  selectedSectionId: string | null;

  sidebarOpen: boolean;

  loading: boolean;

  error: string | null;
}

const initialState: UIState = {
  selectedSectionId: null,

  sidebarOpen: true,

  loading: false,

  error: null,
};

const uiSlice = createSlice({
  name: "ui",

  initialState,

  reducers: {
    selectSection(state, action: PayloadAction<string | null>) {
      state.selectedSectionId = action.payload;
    },

    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const {
  selectSection,

  toggleSidebar,
} = uiSlice.actions;

export default uiSlice.reducer;
