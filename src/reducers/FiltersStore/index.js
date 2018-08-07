import ActionTypes from "../../actionsTypes"
import VisibilityFilters from "../../constants/filters"

const defaultState = {
  filter: VisibilityFilters.SHOW_ALL
}

export default function(state = defaultState, action) {
  const { type, filter } = action
  switch (type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return {
        filter
      }
    default:
      return {
        ...state
      }
  }
}
