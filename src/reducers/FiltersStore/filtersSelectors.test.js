import { getCurrentFilter} from "./index"
import {type } from 'ramda'

const state = {
  FiltersStore: {
    filter: 'SHOW_ALL'
  }
}

describe("FiltersStore getCurrentFilterSelector", () => {
  it("Should return current filter as a string", () => {
    const selected = getCurrentFilter(state)
    expect(selected).toEqual('SHOW_ALL')
    expect(type(selected)).toBe('String')
  })
})