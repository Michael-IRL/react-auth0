import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';

const NavigationContainer = () => {
	const { user } = useSelector(state => state);
	return <Navigation user={user} />;
};

export { NavigationContainer as default };
