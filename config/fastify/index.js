const fs = require('fs');
const path = require('path');
var key = fs.readFileSync('config/private.key');
var cert = fs.readFileSync( 'config/primary.crt' );


export default () => ({
	logger: true,
	allowHTTP1: true,
	http2: true,
	https: {
		key: fs.readFileSync(
			path.join(__dirname, 'config/certificate', 'server.key'),
		),
		cert: fs.readFileSync(
			path.join(__dirname, 'config/certificate', 'server.cert'),
		),
	},
});
