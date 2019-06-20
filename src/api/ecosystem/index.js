module.exports = {
	resolvers: require('./ecosystem.resolvers'),
	typeDefs: require('../../utils/gqlLoader')('ecosystem/ecosystem.graphql'),
};
