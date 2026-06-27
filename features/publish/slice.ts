import { createSlice } from "@reduxjs/toolkit";

interface PublishState {
  status: "idle" | "publishing" | "success" | "failed";

  currentVersion: string | null;

  changeSummary: string;
}

const initialState: PublishState = {
  status: "idle",

  currentVersion: null,

  changeSummary: "",
};

const publishSlice = createSlice({
  name: "publish",

  initialState,

  reducers: {},
});

export default publishSlice.reducer;
