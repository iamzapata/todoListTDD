import React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import TodoInput from "./index"

describe("<TodoInput>", () => {
  afterEach(cleanup)

  const createProps = () => ({
    addTodo: jest.fn()
  })

  const todoPlaceholder = "Add Todo..."

  it("Should render self", () => {
    const { container } = render(<TodoInput {...createProps()} />)

    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("Should have a TodoInput className", () => {
    const { container } = render(<TodoInput {...createProps()} />)
    const classNameSelection = container.querySelectorAll(".TodoInput")

    expect(classNameSelection.length).toEqual(1)
  })

  it("Should have a form element", () => {
    const { container } = render(<TodoInput {...createProps()} />)
    const form = container.querySelector("form")

    expect(form).toBeTruthy()
  })

  it("Should have an input element", () => {
    const { container } = render(<TodoInput {...createProps()} />)
    const input = container.querySelector("input")

    expect(input).toBeTruthy()
  })

  it("Should allow a user to type a task to add", () => {
    const task = "Research machine learning"
    const { queryByPlaceholderText } = render(<TodoInput {...createProps()} />)
    const inputNode = queryByPlaceholderText(todoPlaceholder)

    inputNode.value = task
    fireEvent.change(inputNode)

    expect(queryByPlaceholderText(todoPlaceholder).value).toEqual(task)
  })

  it("Should allow the user to create todo by pressing the enter key", () => {
    const props = createProps()
    const { queryByPlaceholderText } = render(<TodoInput {...props} />)
    const inputNode = queryByPlaceholderText(todoPlaceholder)

    inputNode.value = "Practice playing guitar"
    fireEvent.change(inputNode)
    fireEvent.submit(inputNode)

    expect(props.addTodo).toHaveBeenCalledTimes(1)
  })

  it("Should clear input when todo has been submitted", () => {
    const { queryByPlaceholderText } = render(<TodoInput {...createProps()} />)
    const inputNode = queryByPlaceholderText(todoPlaceholder)

    inputNode.value = "Do some cooking"
    fireEvent.change(inputNode)
    fireEvent.submit(inputNode)

    expect(queryByPlaceholderText(todoPlaceholder).value).toBeFalsy()
  })

  it("Should not allow to submit an empty todo", () => {
    const props = createProps()
    const { queryByPlaceholderText } = render(<TodoInput {...props} />)
    const inputNode = queryByPlaceholderText(todoPlaceholder)

    inputNode.value = ""
    fireEvent.change(inputNode)
    fireEvent.submit(inputNode)

    expect(props.addTodo).not.toBeCalled()
  })
})
