import { ADD_TODO, TODO_LIST_SUCCESS, TODO_LIST_REQUEST } from '../actions';

const initialState = {
	toDoList: [],
	loading: false,
};

let toDoApp = (state = initialState, action) => {
	switch (action.type) {
		case TODO_LIST_SUCCESS:
			return {
				...state,
				toDoList: action.toDoList,
				loading: false,
			};
		case ADD_TODO:
			let toDoList = [...state.toDoList, { ...action.toDoItem }];
			return {
				...state,
				toDoList,
			};
		case TODO_LIST_REQUEST:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};

export { toDoApp as default };
