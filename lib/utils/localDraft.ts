const KEY = "page-studio-draft";

export function saveDraft(page: unknown) {
  if (typeof window === "undefined") return;

  localStorage.setItem(KEY, JSON.stringify(page));
}

export function loadDraft() {
  if (typeof window === "undefined") {
    return null;
  }

  const draft = localStorage.getItem(KEY);

  return draft ? JSON.parse(draft) : null;
}
