export const countNotNullValues = (input: Record<string, string | number | boolean | null>): number =>
  Object.values(input).filter(Boolean).length;
