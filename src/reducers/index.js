import { combineReducers } from "redux"
import TodosStore from "./TodosStore"
import FiltersStore from "./FiltersStore"

const rootReducer = combineReducers({
  TodosStore,
  FiltersStore
})

export default rootReducer
