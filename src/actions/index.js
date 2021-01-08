const ADD_TODO = 'ADD_TODO';

let addToDo = title => {
	return {
		type: ADD_TODO,
		toDoItem: {
			_id: new Date().getTime(),
			title,
		},
	};
};

export { ADD_TODO, addToDo };
