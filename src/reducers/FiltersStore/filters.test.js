import ActionTypes from "../../actionsTypes"
import VisibilityFilters from "../../constants/filters"
import FiltersStore from "./index.js"

describe("FiltersStore", () => {
  const defaultFilter = VisibilityFilters.SHOW_ALL

  it("Should return an initial state", () => {
    expect(FiltersStore(undefined, {})).toEqual({
      filter: defaultFilter
    })
  })

  it("Should handle SET_VISIBILITY_FILTER SHOW_ACTIVE", () => {
    expect(
      FiltersStore(
        { filter: defaultFilter },
        {
          type: ActionTypes.SET_VISIBILITY_FILTER,
          filter: VisibilityFilters.SHOW_ACTIVE
        }
      )
    ).toEqual({
      filter: VisibilityFilters.SHOW_ACTIVE
    })
  })

  it("Should handle SET_VISIBILITY_FILTER SHOW_COMPLETED", () => {
    expect(
      FiltersStore(
        { filter: defaultFilter },
        {
          type: ActionTypes.SET_VISIBILITY_FILTER,
          filter: VisibilityFilters.SHOW_COMPLETED
        }
      )
    ).toEqual({
      filter: VisibilityFilters.SHOW_COMPLETED
    })
  })

  it("Should handle SET_VISIBILITY_FILTER SHOW_ALL", () => {
    expect(
      FiltersStore(
        { filter: defaultFilter },
        {
          type: ActionTypes.SET_VISIBILITY_FILTER,
          filter: VisibilityFilters.SHOW_ALL
        }
      )
    ).toEqual({
      filter: VisibilityFilters.SHOW_ALL
    })
  })
})
