import TodosStoreReducer from "./index.js"
import ActionTypes from "../../actionsTypes"

describe("TodosStore", () => {
  it("Should return an initial state", () => {
    expect(TodosStoreReducer(undefined, {})).toEqual({
      todos: [],
      newTodo: null,
      id: null
    })
  })

  it("Should handle ADD_TODO", () => {
    const existingState = {
      todos: [
        {
          text: "Take out the trash",
          id: 1,
          completed: false
        }
      ]
    }

    const actionPayload = {
      type: ActionTypes.ADD_TODO,
      newTodo: {
        text: "Buy groceries",
        id: 2,
        completed: false
      }
    }
    expect(TodosStoreReducer(existingState, actionPayload)).toEqual({
      newTodo: null,
      id: null,
      todos: [
        {
          text: "Take out the trash",
          id: 1,
          completed: false
        },
        {
          text: "Buy groceries",
          id: 2,
          completed: false
        }
      ]
    })
  })

  it("Should handle REMOVE_TODO", () => {
    const existingState = {
      newTodo: null,
      todos: [
        {
          text: "Take out the trash",
          id: 1,
          completed: false
        },
        {
          text: "Buy groceries",
          id: 2,
          completed: false
        }
      ]
    }
    const actionPayload = {
      type: ActionTypes.REMOVE_TODO,
      id: 1
    }

    expect(TodosStoreReducer(existingState, actionPayload)).toEqual({
      newTodo: null,
      id: null,
      todos: [
        {
          text: "Buy groceries",
          id: 2,
          completed: false
        }
      ]
    })
  })

  it("Should handle TOGGLE_TODO from true to false", () => {
    const existingState = {
      todos: [
        {
          text: "Take out the trash",
          id: 1,
          completed: true
        },
        {
          text: "Buy groceries",
          id: 2,
          completed: true
        }
      ]
    }

    const actionPayload = {
      type: ActionTypes.TOGGLE_TODO,
      id: 2
    }

    expect(TodosStoreReducer(existingState, actionPayload)).toEqual({
      newTodo: null,
      id: null,
      todos: [
        {
          text: "Take out the trash",
          id: 1,
          completed: true
        },
        {
          text: "Buy groceries",
          id: 2,
          completed: false
        }
      ]
    })
  })

  it("Should handle TOGGLE_TODO from false to true", () => {
    const existingState = {
      todos: [
        {
          text: "Take out the trash",
          id: 1,
          completed: false
        },
        {
          text: "Buy groceries",
          id: 2,
          completed: true
        }
      ]
    }

    const actionPayload = {
      type: ActionTypes.TOGGLE_TODO,
      id: 1
    }

    expect(TodosStoreReducer(existingState, actionPayload)).toEqual({
      newTodo: null,
      id: null,
      todos: [
        {
          text: "Take out the trash",
          id: 1,
          completed: true
        },
        {
          text: "Buy groceries",
          id: 2,
          completed: true
        }
      ]
    })
  })
})
