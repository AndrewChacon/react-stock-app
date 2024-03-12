import axios from 'axios';

const apiToken = process.env.REACT_APP_API_TOKEN;
const apiUrl = process.env.REACT_APP_API_URL;

export default axios.create({
	baseURL: apiUrl,
	params: {
		token: apiToken,
	},
});
