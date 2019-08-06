const observeNotifications = async (_, args = {}, ctx = {}) => {
	const id = args.id;
	const type = args.type;
	const notifications = await ctx.user;
	return notifications;
};

export const notification = {
	Query: {},
	Mutation: {},
	Notification: {
		__resolveType(notification) {
			return notification
		}
	}
};
