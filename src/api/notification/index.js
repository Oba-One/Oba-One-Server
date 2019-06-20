module.exports = {
	resolvers: require('./notification.resolvers'),
	typeDefs: require('../../utils/gqlLoader')(
		'notification/notification.graphql',
	),
};
