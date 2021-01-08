import { ADD_TODO } from '../actions';

const initialState = {
	toDoList: [],
};

let toDoApp = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			let toDoList = [...state.toDoList, { ...action.toDoItem }];
			return {
				...state,
				toDoList,
			};
		default:
			return state;
	}
};

export { toDoApp as default };
