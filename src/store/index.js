import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"
import ReduxLogger from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "../reducers"

const isDevelopment = process.env.NODE_ENV === "development"

const middleWares = [ReduxThunk]

if (isDevelopment) {
  middleWares.push(ReduxLogger)
}

const store = createStore(
  rootReducer,
  composeWithDevTools({})(applyMiddleware(...middleWares))
)

export default store
