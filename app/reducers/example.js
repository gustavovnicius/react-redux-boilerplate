import {
  EXAMPLE
} from 'actions/example'

export default (state = {}, action) => {
  switch (action.type) {
    case EXAMPLE:
      return {
        ...state,
        example: true
      }
    default:
      return state
  }
}
