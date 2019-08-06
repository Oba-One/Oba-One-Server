/**********************************
 NODE, UTILS, & CONFIG IMPORTS
 *********************************/
import fastifyConfig from '../config/fastify';
import graphqlConfig from '../config/graphql';
import middlewareConfig from '../config/middleware';
import loadTypeSchema from './utils/schema';
import merge from 'lodash/merge';

/***********************************
APOLLO & GRAPHQL LIBRARIES/IMPORTS
***********************************/
import { ApolloServer } from 'apollo-server-fastify';

/***********************************
 MIDDLEWARE & API'S LIBRARIES
 **********************************/
import compress from 'fastify-compress';
import helmet from 'fastify-helmet';
import jwt from 'fastify-jwt';
import sensible from 'fastify-sensible';

/*****************************
 SERVER, DATABASE & API DECLARATION
 ****************************/
import database from './database';
import { admin, users, devices, ecosystem, notification } from './api';
const apis = ['users', 'devices', 'ecosystem', 'notification'];

/****************************
 MIDDLEWARE DECLARATION
 ***************************/
//fastify.register(helmet, middlewareConfig.helmet);
//fastify.register(compress, middlewareConfig.compress);

/****************************
SERVER INITIALIZATION
****************************/
const startServer = async () => {
	try {
		const rootSchema = `
			schema {
				query: Query
				mutation: Mutation
			}
		`;

		const fastify = require('fastify')();
		const db = database;
		const schemaTypes = await Promise.all(apis.map(loadTypeSchema));

		const server = new ApolloServer({
			typeDefs: [rootSchema, ...schemaTypes],
			resolvers: merge({}, users, devices, ecosystem, notification),
			context: {
				app: db.collection('app'),
				users: db.collection('users'),
				devices: db.collection('devices'),
				ecosystem: db.collection('ecosystem'),
			},
		});
		const PORT = 3000;
		fastify.register(server.createHandler());
		await fastify.listen(PORT);
		console.log(`GQL server ready at Port: ${PORT} 🚀`);
	} catch (e) {
		console.error(`Server error ${e} 💨`);
	}
};

export default startServer;
