import * as redux from 'redux';
import thunk from 'redux-thunk';

import { DocumentReducer, ParagraphReducer } from '../reducers/';

const createStore = (initialState = {}) => {
    let reducers = redux.combineReducers({
        d: DocumentReducer,
        p: ParagraphReducer
    });

    const store = redux.createStore(reducers, initialState,
        redux.compose(
            redux.applyMiddleware(thunk),
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;
}

export const store = createStore();