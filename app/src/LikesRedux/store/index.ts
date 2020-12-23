import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

// const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export default store;