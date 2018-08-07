import React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import "jest-dom/extend-expect"
import FilterButton from "./index"

describe("<FilterButton />", () => {
  afterEach(cleanup)

  const createProps = () => ({
    filter: "SHOW_ALL",
    setFilter: jest.fn(),
    isListEmpty: false,
    currentFilter: "SHOW_ALL"
  })

  it("Should render self", () => {
    const { container } = render(
      <FilterButton {...createProps()}>All</FilterButton>
    )

    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("Should render children correctly", () => {
    const { queryByText } = render(
      <FilterButton {...createProps()}>All</FilterButton>
    )
    expect(queryByText("All").firstChild).toBeTruthy()
  })

  it("Should call setFiler when clicked with correct filter argument", () => {
    const props = {
      ...createProps(),
      currentFilter: "SHOW_COMPLETED"
    }
    const { container } = render(<FilterButton {...props}>All</FilterButton>)

    const button = container.querySelector("button")

    fireEvent.click(button)

    expect(props.setFilter).toHaveBeenCalledTimes(1)
    expect(props.setFilter).toHaveBeenCalledWith("SHOW_ALL")
  })

  it("Should be disabled if todos list is empty", () => {
    const props = {
      ...createProps(),
      isListEmpty: true
    }
    const { container } = render(<FilterButton {...props}>All</FilterButton>)

    const button = container.querySelector("button")

    expect(button).toHaveAttribute("disabled")
  })

  it("Should be disabled if current button's filter is active", () => {
    const { container } = render(
      <FilterButton {...createProps()}>Completed</FilterButton>
    )

    const button = container.querySelector("button")

    expect(button).toHaveAttribute("disabled")
  })
})
