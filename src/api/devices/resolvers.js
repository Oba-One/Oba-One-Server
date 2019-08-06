const getDevice = async (_, args = { deviceID: ``, userID: `` }, ctx = {}) => {
	const id = args.id;
	const deviceId = args.deviceId;
	const device = await ctx.devices;
	return device;
};
const getDevices = async (_, args = { id: `` }, ctx = {}) => {
	const id = args.id;
	const devices = await ctx.devices;
	return devices;
};

const addDevice = async (_, args = { id: ``, input: {} }, ctx = {}) => {
	const id = args.id;
	const deviceId = args.deviceId;
	const device = args.input;
	const newDevice = await ctx.devices;
	return newDevice;
};

const updateDevice = async (_, args = { id: ``, input: {} }, ctx = {}) => {
	const id = args.id;
	const deviceId = args.deviceId;
	const device = args.input;
	const updatedDevice = await ctx.devices;
	return updatedDevice;
};

const deleteDevice = async (_, args = { id: ``}, ctx = {}) => {
	const id = args.id;
	const deviceId = args.deviceId;
	const deletedDevice = await ctx.devices;
	return deletedDevice;
};

export const devices = {
	Query: {
		getDevice,
		getDevices,
	},
	Mutation: {
		addDevice,
		updateDevice,
		deleteDevice,
	},
};
