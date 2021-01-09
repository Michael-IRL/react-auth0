import { ADD_TODO, TODO_LIST_SUCCESS, TODO_LIST_REQUEST, USER_PROFILE_LOADED } from '../actions';

const initialState = {
	toDoList: [],
	loading: false,
	user: null,
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
		case USER_PROFILE_LOADED:
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export { toDoApp as default };
