const admin = require('./admin');
const devices = require('./devices');
const ecosystem = require('./ecosystem');
const notification = require('./notification');
const users = require('./users');

const merge = require('lodash/merge');

const db = require('../database');

module.exports = () => ({
	typeDefs: [
		admin.typeDefs,
		devices.typeDefs,
		ecosystem.typeDefs,
		notification.typeDefs,
		users.typeDefs,
	].join(''),
	resolvers: merge(
		{},
		admin.resolvers,
		devices.resolvers,
		ecosystem.resolvers,
		notification.resolvers,
		users.resolvers,
	),
	context: async () => ({
		auth: {},
		db: db(),
		cache: {},
	}),
});
