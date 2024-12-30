import axios from 'axios';
import { app } from '../../appConfig';

export const getAllLeagues = async () => {
	console.log("========STARTING GET ALL LEAGUES ============");
	try {		
		const response = await axios.get("https://fantasy-lax-api-71359d347c0a.herokuapp.com/leagues");
		// const response = await axios.get("http://localhost:3000/leagues");
		console.log("fetch leagues respsonse")
		console.log(response.data)
		return response.data
	} catch(error) {
		console.log(error);
		throw error
	}
}