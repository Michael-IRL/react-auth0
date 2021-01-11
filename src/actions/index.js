export const ADD_TODO = 'ADD_TODO';
export const TODO_LIST_REQUEST = 'TODO_LIST_REQUEST';
export const TODO_LIST_SUCCESS = 'TODO_LIST_SUCCESS';

export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';
export const HANDLE_AUTHENTICATION_CALLBACK = 'HANDLE_AUTHENTICATION_CALLBACK';

let addToDo = title => {
	return {
		type: ADD_TODO,
		toDoItem: {
			_id: new Date().getTime(),
			title,
		},
	};
};

let toDoListRequest = () => {
	return {
		type: TODO_LIST_REQUEST,
	};
};

let handleAuthenticationCallback = () => {
	return {
		type: HANDLE_AUTHENTICATION_CALLBACK,
	};
};

export { addToDo, toDoListRequest, handleAuthenticationCallback };
