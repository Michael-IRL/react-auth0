import { useSelector } from 'react-redux';
import ToDoList from '../components/ToDoList';

let ToDoListContainer = () => {
	const { toDoList } = useSelector(state => state);
	return <ToDoList toDoList={toDoList} />;
};

export default ToDoListContainer;
