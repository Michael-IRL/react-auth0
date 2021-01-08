import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

let AddToDo = () => {
	let input;
	const dispatch = useDispatch();

	return (
		<Form
			onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				dispatch(addToDo(input.value));
				input.value = '';
			}}
		>
			<Form.Group controlId='formBasicEmail'>
				<InputGroup>
					<Form.Control
						type='text'
						placeholder='Enter an item'
						ref={node => {
							input = node;
						}}
					/>
					<InputGroup.Append>
						<Button type='submit'>Add To-Do</Button>
					</InputGroup.Append>
				</InputGroup>
			</Form.Group>
		</Form>
	);
};

export default AddToDo;
