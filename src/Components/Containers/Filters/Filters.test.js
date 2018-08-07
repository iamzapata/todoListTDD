import React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import { Filters } from "./index"
import "jest-dom/extend-expect"

describe("<Filters />", () => {
  afterEach(cleanup)

  const createProps = () => ({
    setFilter: jest.fn(),
    isListEmpty: false,
    currentFilter: ""
  })

  it("Should render self", () => {
    const { container } = render(<Filters {...createProps()} />)

    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("Should have a className of Filters", () => {
    const { container } = render(<Filters {...createProps()} />)

    const classNameSelection = container.querySelectorAll(".Filters")

    expect(classNameSelection.length).toEqual(1)
  })

  it("Should have 'Show:' as label", () => {
    const { queryByText } = render(<Filters {...createProps()} />)
    const showLabel = queryByText("Show:")

    expect(showLabel).toBeTruthy()
  })

  it("Should have three child buttons", () => {
    const { container } = render(<Filters {...createProps()} />)
    const buttons = container.querySelectorAll("button")

    expect(buttons.length).toEqual(3)
  })

  it("Should display buttons in correct order and have correct text", () => {
    const { container, queryByText } = render(<Filters {...createProps()} />)
    const buttons = container.querySelectorAll("button")

    expect(buttons[0]).toHaveTextContent("All")
    expect(queryByText("All")).toBeTruthy()

    expect(buttons[1]).toHaveTextContent("Active")
    expect(queryByText("Active")).toBeTruthy()

    expect(buttons[2]).toHaveTextContent("Completed")
    expect(queryByText("Completed")).toBeTruthy()
  })

  it("Should display 'Show:' on the left and buttons no the right", () => {
    const { container } = render(<Filters {...createProps()} />)
    const elementsPositioning = container.querySelector(
      "label + button + button + button"
    )

    expect(elementsPositioning).toBeTruthy()
  })
})
