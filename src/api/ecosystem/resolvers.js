const getEcosystem = async (_, args = { enum: `` }, ctx = {}) => {
	const ecosystemEnum = args.enum;
	const ecosystem = await ctx.ecosystem;
	return ecosystem;
};

const getEcosystems = async (_, args = {}, ctx = {}) => {
	const ecosystemEnum = args.enum;
	const ecosystem = await ctx.ecosystem;
	return ecosystem;
};

const updateEcosystem = async (
	_,
	args = { id: ``, enum: ``, input: {} },
	ctx = {},
) => {
	const id = args.id;
	const ecosystemEnum = args.enum;
	const ecosystem = args.input;
	const updatedEcosystem = await ctx.ecosystem;
	return updatedEcosystem;
};

export const ecosystem = {
	Query: {
		getEcosystem,
		getEcosystems,
	},
	Mutation: {
		updateEcosystem,
	},
};
