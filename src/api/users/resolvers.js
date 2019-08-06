const loginUser = async (_, args = { id: '', input: {} }, ctx = {}) => {
	// Declare Argument Variables
	const id = args.id;

	// Fetch User
	const user = ctx.users.doc(id);
	const publicProfile = user.collection('public-profile').get();
	return publicProfile;
};

const logoutUser = async (_, args = { id: '' }, ctx = {}) => {
	// Declare Argument Variables
	const id = args.id;

	// Fetch User
	const user = ctx.users.doc(id);
	const publicProfile = user.collection('public-profile').get();
	return publicProfile;
};

const getPublicProfile = async (_, args = { id: '' }, ctx = {}) => {
	// Declare Argument Variables
	const id = args.id;

	// Fetch User
	const user = ctx.users.doc(id);
	const publicProfile = user.collection('public-profile').get();
	return publicProfile;
};

const getUserProfile = async (_, args = { id: '' }, ctx = {}) => {
	// Declare Argument Variables
	const id = args.id;

	// Fetch User
	const userProfile = await ctx.users.doc(id).get();

	if (!userProfile) {
		return {};
	}
	return userProfile;
};

const updateUser = async (_, args = { id: '', input: {} }, ctx = {}) => {
	// Declare Argument Variables
	const id = args.id;
	const userUpdate = args.input;

	// Fetch User
	const updatedUser = await ctx.users.doc(id).update(userUpdate);

	return updatedUser;
};

const removeUser = async (_, args = { id: '' }, ctx = {}) => {
	// Declare Argument Variables
	const id = args.id;

	// Fetch User
	const deletedUser = await ctx.users.doc(id).delete();
	return deletedUser;
};

export default {
	Query: {
		getUserProfile,
		getPublicProfile,
	},

	Mutation: {
		loginUser,
		logoutUser,
		updateUser,
		removeUser,
	},
};
