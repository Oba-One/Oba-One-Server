'use strict';

const autocannon = require('autocannon');

const instance = autocannon(
	{
		url: 'http://localhost:3000',
		connections: 10, //default
		pipelining: 1, // default
		duration: 10, // default
	},
	console.log,
);

process.once('SIGINT', () => {
	instance.stop();
});

autocannon.track(instance, {renderProgressBar: false})