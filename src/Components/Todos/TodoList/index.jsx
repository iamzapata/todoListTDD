import React, { PureComponent } from "react"
import { arrayOf, shape, string, number, func } from "prop-types"
import Todo from "../Todo"

class TodoList extends PureComponent {
  render() {
    const { todos, toggleTodo } = this.props
    return (
      <ul className="TodosList">
        {todos.map(td => (
          <li key={td.id}>
            <Todo todo={td} toggleTodo={toggleTodo} />
          </li>
        ))}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: arrayOf(
    shape({
      text: string,
      id: number
    })
  ).isRequired,
  toggleTodo: func.isRequired
}

export default TodoList
