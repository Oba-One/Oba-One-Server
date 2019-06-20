module.exports = {
	resolvers: require('./admin.resolvers'),
	typeDefs: require('../../utils/gqlLoader')('admin/admin.graphql'),
};
