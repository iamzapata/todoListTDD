import React from "react"
import { Provider } from "react-redux"
import reactDOM from "react-dom"
import App from "./Components/App"
import store from "./store"

reactDOM.render(
  <Provider store={store}>
    <App title={"Hello ToDos !"} />
  </Provider>,
  document.getElementById("app")
)
