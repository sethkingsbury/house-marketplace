import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDhbx0hqkpHF8SSvC5yjHpsHmmkMjgS8gE',
	authDomain: 'house-marketplace-app-26920.firebaseapp.com',
	projectId: 'house-marketplace-app-26920',
	storageBucket: 'house-marketplace-app-26920.appspot.com',
	messagingSenderId: '194179373333',
	appId: '1:194179373333:web:28b871140aed8e7bd8b11c',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
