import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { rooteReducer } from './reducer';


export const configerStore = () => {
    let store = createStore(rooteReducer, applyMiddleware(thunk));

    return store;
}