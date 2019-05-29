export const UPDATE_DIMENSION = Symbol("UPDATE_DIMENSION");
export function updateDimension({ width }) {
  return {
    type: UPDATE_DIMENSION,
    width
  };
}
