import ActionTypes from "../../actionsTypes"
import VisibilityFilters from "../../constants/filters"
import { createSelector } from 'reselect'

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

const getCurrentFilterSelector = state => state.FiltersStore.filter

export const getCurrentFilter = createSelector(
  getCurrentFilterSelector,
  filter => filter
)


