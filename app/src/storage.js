const selectedFilmsKey = "programme-builder-selected-films";

export function getInitialSelectedIds() {
  try {
    const savedSelectedIds = localStorage.getItem(selectedFilmsKey);
    const parsedIds = savedSelectedIds ? JSON.parse(savedSelectedIds) : [];
    return Array.isArray(parsedIds) ? parsedIds : [];
  } catch {
    return [];
  }
}

export function saveSelectedIds(selectedIds) {
  localStorage.setItem(selectedFilmsKey, JSON.stringify(selectedIds));
}

export function clearSelectedIds() {
  localStorage.removeItem(selectedFilmsKey);
}
