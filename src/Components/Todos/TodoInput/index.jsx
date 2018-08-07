import React, { PureComponent } from "react"
import { func } from "prop-types"

class TodoInput extends PureComponent {
  state = {
    inputText: ""
  }

  onChangeInput = ev => {
    const { value: inputText } = ev.target
    this.setState({ inputText })
  }

  addTodo = ev => {
    ev.preventDefault()
    const { inputText } = this.state
    const { addTodo } = this.props
    if (!inputText) return
    addTodo(inputText)
    this.setState({ inputText: "" })
  }

  render() {
    const { inputText } = this.state
    return (
      <form onSubmit={this.addTodo} className="TodoInput">
        <input
          type="text"
          placeholder="Add Todo..."
          value={inputText}
          onChange={this.onChangeInput}
        />
      </form>
    )
  }
}

TodoInput.propTypes = {
  addTodo: func.isRequired
}

export default TodoInput
