import React from "react"
import { render, cleanup } from "react-testing-library"
import TodoList from "./index.jsx"

describe("<TodoList />", () => {
  afterEach(cleanup)
  const createProps = () => ({
    todos: [
      {
        id: 1,
        text: "Wash dishes",
        completed: false
      },
      {
        id: 2,
        text: "Take out trash",
        completed: false
      }
    ],
    toggleTodo: jest.fn()
  })
  it("Should render self", () => {
    const { container } = render(<TodoList {...createProps()} />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("Should render a top level ul", () => {
    const { container } = render(<TodoList {...createProps()} />)
    const ulElement = container.getElementsByTagName("ul")

    expect(ulElement.length).toBe(1)
  })

  it("Should have a TodosList className", () => {
    const { container } = render(<TodoList {...createProps()} />)
    const classNameSelection = container.querySelectorAll(".TodosList")

    expect(classNameSelection.length).toBe(1)
  })

  it("Should render a list of todos", () => {
    const { container } = render(<TodoList {...createProps()} />)
    const children = container.querySelectorAll("li")

    expect(children.length).toEqual(2)
  })

  it("Should render a list of <Todo /> components", () => {
    const { container } = render(<TodoList {...createProps()} />)
    const todoInputChildren = container.querySelectorAll("li .Todo")

    expect(todoInputChildren.length).toEqual(2)
  })
})
