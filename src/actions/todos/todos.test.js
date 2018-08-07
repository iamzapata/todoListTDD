import ActionTypes from "../../actionsTypes"
import * as TodosActions from "./index.js"

describe("TodosActions", () => {
  it("Should create an action to add a todo", () => {
    const expectedAction = {
      type: ActionTypes.ADD_TODO,
      newTodo: {
        id: 1,
        text: "I am a todo",
        completed: false
      }
    }

    expect(TodosActions.addTodo("I am a todo")).toEqual(expectedAction)
  })

  it("Should increment todo id correctly", () => {
    TodosActions.addTodo("First todo")

    expect(TodosActions.addTodo("Second todo")).toEqual({
      type: ActionTypes.ADD_TODO,
      newTodo: {
        id: 3,
        text: "Second todo",
        completed: false
      }
    })
  })

  it("Should create an action to remove a todo", () => {
    const expectedAction = {
      type: ActionTypes.REMOVE_TODO,
      id: 1
    }

    expect(TodosActions.removeTodo(1)).toEqual(expectedAction)
  })

  it("Should create an action to toggle a todo", () => {
    const expectedAction = {
      type: ActionTypes.TOGGLE_TODO,
      id: 1
    }

    expect(TodosActions.toggleTodo(1)).toEqual(expectedAction)
  })
})
