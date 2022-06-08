import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { motiveReducer } from './reducers';

const store = createStore(motiveReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;