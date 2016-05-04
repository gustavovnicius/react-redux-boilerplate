export const EXAMPLE = 'EXAMPLE'

export const thunkExample = () => {
  return (dispatch, getState) => {
    dispatch(example())
  }
}

export const example = () => (
  { type: EXAMPLE }
)
