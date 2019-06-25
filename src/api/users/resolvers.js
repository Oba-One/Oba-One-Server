const getPublicProfile = async (_, args = {}, ctx = {}) => {
	const id = args.id;
	const publicProfile = await ctx.users;
	return publicProfile;
};

const getUserProfile = async (_, args = {}, ctx = {}) => {
	const id = args.id;
	const userProfile = await ctx.users;
	return userProfile;
};

const loginUser = async (_, args = {}, ctx = {}) => {
	const id = args.id;
	const userProfile = await ctx.users;
	return userProfile;
};

const logoutUser = async (_, args = {}, ctx = {}) => {
	const id = args.id;
	const userProfile = await ctx.users;
	return userProfile;
};

const updateUser = async (_, args = {}, ctx = {}) => {
	const id = args.id;
	const userUpdate = args.input;
	const user = await ctx.user;
	return user;
};

const removeUser = async (_, args = {}, ctx = {}) => {
	const id = args.id;
	const user = await ctx.user;
	return user;
};

export const users = {
	Query: {},
	Mutation: {},
};
