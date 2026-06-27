import { configureStore } from "@reduxjs/toolkit";

import draftReducer from "@/features/draftPage/slice";
import uiReducer from "@/features/ui/slice";
import publishReducer from "@/features/publish/slice";

export const store = configureStore({
  reducer: {
    draftPage: draftReducer,
    ui: uiReducer,
    publish: publishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
