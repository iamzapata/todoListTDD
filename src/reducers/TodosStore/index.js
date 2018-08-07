import ActionTypes from "../../actionsTypes"
import { createSelector } from "reselect"
import VisibilityFilters from '../../constants/filters'

const defaultState = {
  todos: [],
  newTodo: null,
  id: null
}

const addTodo = (state, newTodo) => state.todos.concat(newTodo)

const removeTodo = (state, id) => state.todos.filter(td => td.id !== id)

const toggleTodo = (state, id) => {
  return state.todos.map(td => (td.id === id ? { ...td, completed: !td.completed } : td))
}

export default function TodosStore(state = defaultState, action) {
  const { type, newTodo, id } = action
  switch (type) {
    case ActionTypes.ADD_TODO:
      return {
        ...defaultState,
        todos: addTodo(state, newTodo)
      }
    case ActionTypes.REMOVE_TODO:
      return {
        ...defaultState,
        todos: removeTodo(state, id)
      }
    case ActionTypes.TOGGLE_TODO:
      return {
        ...defaultState,
        todos: toggleTodo(state, id)
      }
    case ActionTypes.SHOW_TODOS_OPEN:
    case ActionTypes.SHOW_TODOS_COMPLETED:
    default:
      return {
        ...state
      }
  }
}

const getTodosSelector = state => state.TodosStore.todos
const getCurrentFilter = state => state.FiltersStore.filter

export const getTodos = createSelector(
  getTodosSelector,
  getCurrentFilter,
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(td => td.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(td => !td.completed)
      case  VisibilityFilters.SHOW_ALL:
      default:
        return [...todos]
    }
  })

export const isListEmpty = createSelector(getTodosSelector, todos => !todos.length)