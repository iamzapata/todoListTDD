import ActionTypes from "../../actionsTypes"
import * as FilterActions from "./index"
import VisibilityFilters from "../../constants/filters"

describe("FilterActions", () => {
  it("Should create an action to update filter", () => {
    const expectedAction = {
      type: ActionTypes.SET_VISIBILITY_FILTER
    }

    expect(FilterActions.setFilter(VisibilityFilters.SHOW_ALL)).toEqual({
      ...expectedAction,
      filter: VisibilityFilters.SHOW_ALL
    })
    expect(FilterActions.setFilter(VisibilityFilters.SHOW_ACTIVE)).toEqual({
      ...expectedAction,
      filter: VisibilityFilters.SHOW_ACTIVE
    })
    expect(FilterActions.setFilter(VisibilityFilters.SHOW_COMPLETED)).toEqual({
      ...expectedAction,
      filter: VisibilityFilters.SHOW_COMPLETED
    })
  })
})
