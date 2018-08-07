import ActionTypes from "../../actionsTypes"

let nextTodoId = 0

export const addTodo = text => ({
  type: ActionTypes.ADD_TODO,
  newTodo: {
    text,
    completed: false,
    id: (nextTodoId = nextTodoId + 1)
  }
})

export const removeTodo = id => ({
  type: ActionTypes.REMOVE_TODO,
  id
})

export const toggleTodo = id => ({
  type: ActionTypes.TOGGLE_TODO,
  id
})
