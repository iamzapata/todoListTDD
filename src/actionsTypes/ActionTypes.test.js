import ActionTypes from "./index.js"

describe("ActionTypes", () => {
  it("Should have an ADD_TODO action type defined", () => {
    expect(ActionTypes.ADD_TODO).toBeTruthy()
  })

  it("Should have a REMOVE_TODO action type defined", () => {
    expect(ActionTypes.REMOVE_TODO).toBeTruthy()
  })

  it("should have a TOGGLE_TODO action type defined", () => {
    expect(ActionTypes.TOGGLE_TODO).toBeTruthy()
  })

  it("Should have a SET_VISIBILITY_FILTER action type defined", () => {
    expect(ActionTypes.SET_VISIBILITY_FILTER).toBeTruthy()
  })
})
