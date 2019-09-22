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

const loginUser = async (_, args = { id: '', info: {} }, ctx = {}) => {
	// Declare Argument Variables
	const id = args.id;
	const userInfo = args.info;

	// Fetch User
	const user = await ctx.users.doc(id);

	if (!user) {
		await ctx.users.doc(id).set(userInfo);
		const newUser = await ctx.users.doc(id).get();

		return newUser;
	}

	const exisitingUser = await user.get();

	return exisitingUser;
};

const logoutUser = async (_, args = {}, ctx = {}) => {
	// Declare Argument Variables
	const id = args.id;

	// Fetch User
	const userProfile = await ctx.users;
	return userProfile;
};

const updateUser = async (_, args = {}, ctx = {}) => {
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
