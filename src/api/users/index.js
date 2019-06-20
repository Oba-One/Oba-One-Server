module.exports = {
	resolvers: require('./users.resolvers'),
	typeDefs: require('../../utils/gqlLoader')('users/users.graphql'),
};
