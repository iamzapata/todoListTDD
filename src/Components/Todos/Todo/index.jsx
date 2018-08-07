import React, { PureComponent } from "react"
import { shape, string, number, func } from "prop-types"

class Todo extends PureComponent {
  render() {
    const {
      todo: { completed, text, id },
      toggleTodo
    } = this.props
    return (
      <span
        className="Todo"
        onChange={() => {
          toggleTodo(id)
        }}
        style={{ textDecoration: completed ? "line-through" : "" }}
      >
        {text}
        <input type="checkbox" />
      </span>
    )
  }
}

Todo.propTypes = {
  todo: shape({
    id: number,
    text: string
  }).isRequired,
  toggleTodo: func.isRequired
}

export default Todo
