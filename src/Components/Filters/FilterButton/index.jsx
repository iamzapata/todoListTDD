import React, { PureComponent } from "react"
import { func, string, node, bool } from "prop-types"

class FilterButton extends PureComponent {
  render() {
    const {
      filter,
      setFilter,
      isListEmpty,
      children,
      currentFilter
    } = this.props
    return (
      <button
        onClick={() => setFilter(filter)}
        disabled={isListEmpty || filter === currentFilter}
      >
        {children}
      </button>
    )
  }
}

FilterButton.propTypes = {
  filter: string.isRequired,
  setFilter: func.isRequired,
  children: node.isRequired,
  isListEmpty: bool.isRequired,
  currentFilter: string.isRequired
}

export default FilterButton
