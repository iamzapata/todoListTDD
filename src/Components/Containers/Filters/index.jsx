import React, { PureComponent } from "react"
import { func, bool } from "prop-types"
import { connect } from "react-redux"
import splitToLowercase from "../../../utils/splitToLowerCase/index"
import FilterButton from "../../Filters/FilterButton/index"
import { isListEmpty } from "../../../reducers/TodosStore"
import { setFilter } from "../../../actions/filters"

export class Filters extends PureComponent {
  render() {
    const { setFilter, isListEmpty, currentFilter } = this.props
    return (
      <div className="Filters">
        <label>Show:</label>
        {["SHOW_ALL", "SHOW_ACTIVE", "SHOW_COMPLETED"].map(filter => (
          <FilterButton
            key={filter}
            filter={filter}
            setFilter={setFilter}
            isListEmpty={isListEmpty}
            currentFilter={currentFilter}
          >
            {splitToLowercase(filter)("_")}
          </FilterButton>
        ))}
      </div>
    )
  }
}

Filters.propTypes = {
  setFilter: func,
  isListEmpty: bool
}

const mapStateToProps = state => ({
  isListEmpty: isListEmpty(state),
  currentFilter: state.FiltersStore.filter
})

const mapDispatchToProps = {
  setFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)
