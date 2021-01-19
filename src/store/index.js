import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import toDoApp from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
	composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
}

const store = createStore(toDoApp, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
