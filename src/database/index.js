const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
	projectId: 'obaone-01',
	keyFilename: './firestore-key.json',
});

module.exports = () => ({
	admin: app.doc('admin'),
	users: db.collection('users'),
	devices: db.collection('devices'),
	ecosystem: db.collection('ecosystem'),
});
