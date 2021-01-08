import { createStore } from 'redux';
import toDoApp from '../reducers';

export const store = createStore(toDoApp);
