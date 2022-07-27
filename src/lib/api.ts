import axios, { Axios } from 'axios';

const instance: Axios = axios.create({
	baseURL: 'https://api.chucknorris.io/jokes/',
});

const getRandom = async () => {
	const result = await instance.get('random');
	return result;
};

// eslint-disable-next-line import/prefer-default-export
export { getRandom };
