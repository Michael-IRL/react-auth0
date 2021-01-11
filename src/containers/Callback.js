import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { handleAuthenticationCallback } from '../actions';

let Callback = () => {
	const { user } = useSelector(state => state);
	const dispatch = useDispatch();

	if (user) return <Redirect to='/' />;

	dispatch(handleAuthenticationCallback());

	return <div className='text-center'>Loading user profile.</div>;
};

export default Callback;
