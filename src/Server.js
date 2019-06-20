// SERVER ENTRY/CONFIGURATION FILE

/**********************************
 NODE & CONFIG IMPORTS
 *********************************/
const fs = require('fs');
const path = require('path');
const fastifyConfig = require('../config/fastify');
const graphqlConfig = require('../config/graphql');
const middlewareConfig = require('../config/middleware');

/***********************************
APOLLO & GRAPHQL LIBRARIES/IMPORTS
***********************************/
const { ApolloServer, gql } = require('apollo-server-fastify');
const apiConfig = require('./api');

/***********************************
 MIDDLEWARE & API'S LIBRARIES
 **********************************/
const compress = require('fastify-compress');
const helmet = require('fastify-helmet');
const jwt = require('fastify-jwt');
const sensible = require('fastify-sensible');

/*****************************
 SERVER & API DECLARATION
 ****************************/
const fastify = require('fastify')();
const server = new ApolloServer({
	...apiConfig(),
	engine: {
		apiKey: 'service:Oba-One-01:ymdiQbFKPQwPoKcUPe789g',
	},
	cacheControl: {
		defaultMaxAge: 5,
	},
});

/****************************
 MIDDLEWARE DECLARATION
 ***************************/
fastify.register(helmet, middlewareConfig.helmet);
fastify.register(compress, middlewareConfig.compress);

/****************************
SERVER INITIALIZATION
****************************/
export const startServer = async () => {
	try {
		fastify.register(server.createHandler());
		await fastify.listen(3000);
	} catch (e) {
		throw new Error('WTF! Server Init Error');
	}
};
