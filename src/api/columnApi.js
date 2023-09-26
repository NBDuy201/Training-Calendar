export function getColById(data = [], colId) {
  return data?.find((item) => item.columnId === colId)?.sessions ?? [];
}

export const columnApi = { getColById };
