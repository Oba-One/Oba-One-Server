import Firestore from '@google-cloud/firestore';

const database = new Firestore({
	projectId: 'obaone-01',
	keyFilename: './firestore-key.json',
});

export default database;