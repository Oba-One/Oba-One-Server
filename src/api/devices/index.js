module.exports = {
	resolvers: require('./devices.resolvers'),
	typeDefs: require('../../utils/gqlLoader')('devices/devices.graphql'),
};
