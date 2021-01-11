import auth0 from 'auth0-js';

const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
const returnTo = process.env.REACT_APP_REDIRECT_URL || '';

const audience = `https://${domain}/userinfo`;
const redirectUri = `${returnTo}/callback`;

const auth0Client = new auth0.WebAuth({
	domain,
	audience,
	clientID,
	redirectUri,
	responseType: 'id_token',
	scope: 'openid profile email',
});

const handleAuthentication = () => {
	return new Promise((resolve, reject) => {
		auth0Client.parseHash((err, authResult) => {
			if (err) return reject(err);
			if (!authResult || !authResult.idToken) {
				return reject(err);
			}

			const { idToken, idTokenPayload: profile } = authResult;

			const expiresAt = authResult.idTokenPayload.exp * 1000;

			resolve({
				authenticated: true,
				idToken,
				profile,
				expiresAt,
			});
		});
	});
};

const signIn = () => {
	auth0Client.authorize();
};

const signOut = () => {
	auth0Client.logout({
		returnTo,
		clientID,
	});
};

export { handleAuthentication, signIn, signOut };
