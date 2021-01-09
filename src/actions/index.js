export const ADD_TODO = 'ADD_TODO';
export const TODO_LIST_REQUEST = 'TODO_LIST_REQUEST';
export const TODO_LIST_SUCCESS = 'TODO_LIST_SUCCESS';

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

export { addToDo, toDoListRequest };
