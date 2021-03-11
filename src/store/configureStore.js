import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

// thunk: enhancer, in case action returns simple object -> usual behaviour
// if function -> then call this function (need for async requests)
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
