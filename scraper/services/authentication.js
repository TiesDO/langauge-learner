import crypto from 'crypto';
import base64url from 'base64url';

const hashkey = 'myVeryPrivateKey';

const users = [
	{
		name: 'ties',
		allow: {
			read: true,
			update: true,
			create: true,
			remove: true,
		},
		pw: 'adminpass',
	},
	{
		name: 'sammy',
		allow: {
			read: true,
			update: true,
		},
		pw: 'sammyspass',
	},
];

const signToken = (head, payload) => {
	return crypto
		.createHmac('sha256', hashkey)
		.update([head, payload].join('.'))
		.digest();
};

export const dummyAuth = {
	canUser: (action, un) => {
		// get the user
		const user = users.find((u) => u.name === un);

		return user?.allow[action] === true;
	},

	tryGetToken: (un, pw) => {
		const user = users.find((u) => u.name === un && u.pw === pw);

		if (!user) {
			throw {
				code: 'AUTH_FAIL',
				message: 'credentials do not match',
			};
		}

		const payload = {
			username: user.name,
			allow: user.allow,
		};

		const tokenHead = base64url(
			JSON.stringify({
				alg: 'SHA256',
				typ: 'JWT',
			})
		);

		const tokenPayload = base64url(JSON.stringify(payload));

		const tokenSignature = base64url(signToken(tokenHead, tokenPayload));

		return {
			user: payload,
			token: [tokenHead, tokenPayload, tokenSignature].join('.'),
		};
	},

	verifyToken: (token) => {
		const split = token.split('.');

		return split[2] === base64url(signToken(split[0], split[1]));
	},
};
