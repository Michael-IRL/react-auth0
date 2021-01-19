export const ADD_TODO = 'ADD_TODO';
export const TODO_LIST_REQUEST = 'TODO_LIST_REQUEST';
export const TODO_LIST_SUCCESS = 'TODO_LIST_SUCCESS';

export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';
export const HANDLE_AUTHENTICATION_CALLBACK = 'HANDLE_AUTHENTICATION_CALLBACK';

export const USER_LOG_IN = 'USER_LOG_IN';
export const USER_LOG_OUT = 'USER_LOG_OUT';

const addToDo = title => {
	return {
		type: ADD_TODO,
		toDoItem: {
			_id: new Date().getTime(),
			title,
		},
	};
};

const toDoListRequest = () => {
	return {
		type: TODO_LIST_REQUEST,
	};
};

const handleAuthenticationCallback = () => {
	return {
		type: HANDLE_AUTHENTICATION_CALLBACK,
	};
};

const userLogIn = () => {
	return {
		type: USER_LOG_IN,
	};
};

const userLogOut = () => {
	return {
		type: USER_LOG_OUT,
	};
};

export { addToDo, toDoListRequest, handleAuthenticationCallback, userLogIn, userLogOut };
