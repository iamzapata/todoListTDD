import React, { Fragment } from "react"
import { string, arrayOf, func, shape, bool, number } from "prop-types"
import { connect } from "react-redux"
import TodosList from "../Todos/TodoList"
import TodoInput from "../Todos/TodoInput"
import Filters from "../Containers/Filters/index"
import { getTodos } from "../../reducers/TodosStore"
import { addTodo, toggleTodo } from "../../actions/todos"

export const App = ({ title, todos, addTodo, toggleTodo }) => (
  <Fragment>
    <h1>{title}</h1>
    <TodoInput addTodo={addTodo} />
    <TodosList todos={todos} toggleTodo={toggleTodo} />
    <Filters />
  </Fragment>
)

App.propTypes = {
  title: string.isRequired,
  todos: arrayOf(
    shape({
      text: string.isRequired,
      id: number.isRequired,
      completed: bool.isRequired
    })
  ).isRequired,
  addTodo: func.isRequired,
  toggleTodo: func.isRequired
}

const mapStateToProps = state => ({
  todos: getTodos(state)
})

const mapDispatchToProps = {
  addTodo,
  toggleTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
