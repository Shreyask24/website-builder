import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Page } from "@/types/page";
import { Section } from "@/types/section";

interface DraftPageState {
  page: Page | null;
  isDirty: boolean;
  lastSaved: string | null;
}

const initialState: DraftPageState = {
  page: null,
  isDirty: false,
  lastSaved: null,
};

const draftPageSlice = createSlice({
  name: "draftPage",

  initialState,

  reducers: {
    setDraftPage(state, action: PayloadAction<Page>) {
      state.page = action.payload;
      state.isDirty = false;
    },

    updateSectionProps(
      state,
      action: PayloadAction<{
        sectionId: string;
        props: Record<string, unknown>;
      }>,
    ) {
      if (!state.page) return;

      const section = state.page.sections.find(
        (section) => section.id === action.payload.sectionId,
      );

      if (!section) return;

      section.props = {
        ...section.props,
        ...action.payload.props,
      };

      state.isDirty = true;
    },

    clearDraft(state) {
      state.page = null;
      state.isDirty = false;
      state.lastSaved = null;
    },

    addSection(state, action: PayloadAction<Section>) {
      if (!state.page) return;

      state.page.sections.push(action.payload);

      state.isDirty = true;
    },

    reorderSections(
      state,
      action: PayloadAction<{
        fromIndex: number;
        toIndex: number;
      }>,
    ) {
      if (!state.page) return;

      const { fromIndex, toIndex } = action.payload;

      const sections = [...state.page.sections];

      const [moved] = sections.splice(fromIndex, 1);

      sections.splice(toIndex, 0, moved);

      state.page.sections = sections;

      state.isDirty = true;
    },
  },
});

export const {
  setDraftPage,
  updateSectionProps,
  clearDraft,
  addSection,
  reorderSections,
} = draftPageSlice.actions;

export default draftPageSlice.reducer;
