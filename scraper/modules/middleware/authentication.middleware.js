export const allowAnonymous = (req, res, next) => {
	res.locals.user = {
		usename: 'anon',
		allow: {
			read: true,
		},
	};

	next();
};
