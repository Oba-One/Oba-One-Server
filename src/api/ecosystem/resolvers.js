const getEcosystem = async (_, args = {}, ctx = {}) => {
	const ecosystemEnum = args.enum;
	const ecosystem = await ctx.ecosystem;
	return ecosystem;
};

const updateEcosystem = async (_, args = {}, ctx = {}) => {
	const id = args.id;
	const ecosystemEnum = args.enum;
	const ecosystem = args.input;
	const updatedEcosystem = await ctx.ecosystem;
	return updatedEcosystem;
};

export const ecosystem = {
	Query: {},
	Mutation: {},
};
