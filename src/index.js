/**********************************
SERVER ENTRY/CONFIGURATION FILE
***********************************/
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


/**********************************
NODE & CONFIG IMPORTS
***********************************/
const fs = require('fs');
const path = require('path');
const fastifyConfig = require('../config/fastify');
const graphqlConfig = require('../config/graphql');
const middlewareConfig = require('../config/middleware');

/***********************************
APOLLO & GRAPHQL LIBRARIES/IMPORTS
***********************************/
const { ApolloServer, gql } = require('apollo-server-fastify');
const schema = require('./graphql');
const { Admin, User, Devices, Ecosystem } = schema;

/***********************************
 MIDDLEWARE & API'S LIBRARIES
 **********************************/
const cors = require('fastify-cors');
const compress = require('fastify-compress');
const helmet = require('fastify-helmet');
const jwt = require('fastify-jwt');
const sensible = require('fastify-sensible');

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

/**********************************
 SERVER & APP DECLARATION
 *********************************/
const fastify = require('fastify')(fastifyConfig);
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

/****************************
 MIDDLEWARE DECLARATION
 ****************************/
fastify.register(helmet, middlewareConfig.helmet);
fastify.register(cors, middlewareConfig.cors);
fastify.register(compress, middlewareConfig.compress);

/****************************
SERVER INITIALIZATION
****************************/
fastify.register(require('fastify-compress'), { global: false })(
	async function() {
		try {
			fastify.register(server.createHandler());
			await fastify.listen(3000);
		} catch (e) {
			throw new Error('WTF!');
		}
	},
)();

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
