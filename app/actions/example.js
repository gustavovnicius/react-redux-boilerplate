export const EXAMPLE = 'EXAMPLE';

export const example = () => (
  { type: EXAMPLE }
);

export const thunkExample = () => (dispatch) => {
  dispatch(example());
};
