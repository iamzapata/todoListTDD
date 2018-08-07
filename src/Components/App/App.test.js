import React from "react"
import { render } from "react-testing-library"
import { App } from "./index.jsx"
import { Filters } from "../Containers/Filters"
import { Provider } from "react-redux"

describe("<App />", () => {
  const store = {
    getState: () => ({
      TodosStore: {
        todos: []
      },
      FiltersStore: {
        filter: ""
      }
    }),
    subscribe: jest.fn(),
    dispatch: jest.fn()
  }
  function renderWithRedux(ui) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>)
    }
  }

  const createProps = () => ({
    title: "Hello World !",
    todos: [],
    addTodo: jest.fn(),
    toggleTodo: jest.fn()
  })

  it("Should render self", () => {
    const props = createProps()
    const { container, queryByText } = renderWithRedux(<App {...props} />)
    const header = queryByText(props.title)
    expect(container.firstChild).toMatchSnapshot()
    expect(header.innerHTML).toBe(props.title)
  })

  it("Should contain a <TodosList /> component", () => {
    const { container } = renderWithRedux(<App {...createProps()} />)
    const TodosList = container.querySelectorAll(".TodosList")

    expect(TodosList.length).toEqual(1)
  })

  it("Should contain a <TodosInput /> component", () => {
    const { container } = renderWithRedux(<App {...createProps()} />)
    const TodosInput = container.querySelectorAll(".TodoInput")

    expect(TodosInput.length).toEqual(1)
  })

  it("Should have <TodosList /> bellow <TodosInput />>", () => {
    const { container } = renderWithRedux(<App {...createProps()} />)
    const elementPositioning = container.querySelector(
      ".TodoInput + .TodosList"
    )

    expect(elementPositioning).toBeTruthy()
  })

  it("Should contain a <Filters /> component", () => {
    const { container } = renderWithRedux(<App {...createProps()} />)
    const Filters = container.querySelectorAll(".Filters")

    expect(Filters.length).toBeTruthy()
  })
})
