import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import {
  multiClientMiddleware,
  apiClient,
  setTokenType,
  handleApiError,
} from "middleware"
import reducers from "./reducers"

const apiMiddleware = multiClientMiddleware(
  {
    default: { client: setTokenType(apiClient, true) },
  },
  { returnRejectedPromiseOnError: true, onError: handleApiError }
)
const middlewares = [apiMiddleware]

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
