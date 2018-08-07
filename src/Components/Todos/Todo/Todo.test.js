import React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import Todo from "./index"
import { type } from "ramda"
import "jest-dom/extend-expect"

describe("<Todo />", () => {
  afterEach(cleanup)

  const createProps = ({ completed = false } = {}) => ({
    todo: {
      id: 1,
      text: "Learn TypeScript",
      completed
    },
    toggleTodo: jest.fn()
  })

  it("Should render self", () => {
    const { container } = render(<Todo {...createProps()} />)

    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("Should have Todo className", () => {
    const { container } = render(<Todo {...createProps()} />)
    const classNameSelection = container.querySelectorAll(".Todo")
    expect(classNameSelection.length).toEqual(1)
  })

  it("Should have a wrapping span", () => {
    const { container } = render(<Todo {...createProps()} />)

    expect(type(container.firstChild)).toBe("HTMLSpanElement")
  })

  it("Should display the todo's text", () => {
    const { queryByText } = render(<Todo {...createProps()} />)
    const todo = queryByText("Learn TypeScript")

    expect(todo).toBeTruthy()
  })

  it("Should have a checkbox input", () => {
    const { container } = render(<Todo {...createProps()} />)
    const checkbox = container.querySelector("input[type=checkbox]")

    expect(checkbox).toBeTruthy()
  })

  it("Should show a line strike-through when todo is completed", () => {
    const { queryByText } = render(
      <Todo {...createProps({ completed: true })} />
    )
    const todo = queryByText("Learn TypeScript")

    expect(todo).toHaveStyle("text-decoration: line-through")
  })

  it("Should not show a line strike-through when todo is completed", () => {
    const { queryByText } = render(<Todo {...createProps()} />)
    const todo = queryByText("Learn TypeScript")

    expect(todo).not.toHaveStyle("text-decoration: line-through")
  })

  it("Should call toggleTodo when checkbox clicked/unclicked", () => {
    const props = createProps()
    const { container } = render(<Todo {...props} />)

    const checkbox = container.querySelector("input[type=checkbox]")

    checkbox.checked = true
    fireEvent.change(checkbox)
    checkbox.checked = false
    fireEvent.change(checkbox)

    expect(props.toggleTodo).toHaveBeenCalledTimes(2)
    expect(props.toggleTodo).toHaveBeenNthCalledWith(1, props.todo.id)
    expect(props.toggleTodo).toHaveBeenNthCalledWith(2, props.todo.id)
  })
})
