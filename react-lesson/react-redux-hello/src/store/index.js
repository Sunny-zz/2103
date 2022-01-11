import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)))

export default store
