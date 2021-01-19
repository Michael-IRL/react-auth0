import { useSelector, useDispatch } from 'react-redux';
import { userLogIn, userLogOut } from '../actions';
import Navigation from '../components/Navigation';

const NavigationContainer = () => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();
	const logIn = () => {
		dispatch(userLogIn());
	};
	const logOut = () => {
		dispatch(userLogOut());
	};

	return <Navigation user={user} signIn={logIn} signOut={logOut} />;
};

export { NavigationContainer as default };
