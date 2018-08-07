import { getTodos, isListEmpty } from "./index"
import { type } from "ramda"

const todos = [
  {
    id: 1,
    text: "todo 1",
    completed: true
  },
  {
    id: 2,
    text: "todo 1",
    completed: false
  }
]

const state = {
  TodosStore: {
    todos
  },
  FiltersStore: {
    filter: "SHOW_ALL"
  }
}

describe("TodosStore getTodos selector", () => {
  it("Should return an array of todos", () => {
    const selected = getTodos(state)
    expect(type(selected)).toEqual("Array")
  })

  it("Should return the correct number of todos", () => {
    const selected = getTodos(state)
    expect(selected.length).toEqual(2)
  })

  it("Should return completed todos if filter set to SHOW_COMPLETED", () => {
    const state = {
      TodosStore: {
        todos: [...todos, { text: "Read more", completed: true, id: 10 }]
      },
      FiltersStore: {
        filter: "SHOW_COMPLETED"
      }
    }
    const selected = getTodos(state)
    expect(selected.length).toEqual(2)
  })

  it("Should return active todos if filter set to SHOW_ACTIVE", () => {
    const state = {
      TodosStore: {
        todos: [
          ...todos,
          { text: "Read more, again", completed: false, id: 12 }
        ]
      },
      FiltersStore: {
        filter: "SHOW_ACTIVE"
      }
    }
    const selected = getTodos(state)
    expect(selected.length).toEqual(2)
  })

  it("Should return all todos if filter is set to SHOW_ALL", () => {
    const state = {
      TodosStore: {
        todos
      },
      FiltersStore: {
        filter: "SHOW_ALL"
      }
    }
    const selected = getTodos(state)
    expect(selected.length).toEqual(2)
  })
})

describe("TodosStore isListEmpty selector", () => {
  it("Should return true if list is empty", () => {
    const state = {
      TodosStore: {
        todos: []
      }
    }

    const selected = isListEmpty(state)

    expect(selected).toBe(true)
  })

  it("Should return false if list is not empty", () => {
    const selected = isListEmpty(state)

    expect(selected).toBe(false)
  })
})
