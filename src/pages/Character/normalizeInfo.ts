// returns alt if it's not 'undefined' when the data is not exist, "NaN" or "None known"
// if alt is undefined, return "Unknown"
export const normalizeInfo = (data?: string, alt?: string) => {
  return !data || data === "NaN" || data === "None known"
    ? alt === undefined
      ? "Unknown"
      : alt
    : data;
};
