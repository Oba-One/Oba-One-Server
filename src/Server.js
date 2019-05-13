var key = fs.readFileSync('config/private.key');
var cert = fs.readFileSync( 'config/primary.crt' );
var ca = fs.readFileSync( 'config/intermediate.crt' );
