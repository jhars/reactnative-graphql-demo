import axios from 'axios';
import { app } from '../../appConfig';
import { OrderedStatsArgs } from '../actions/playersOrderedByStatisticAction';


// export const getPlayersGQL = async () => {
// 	console.log("========STARTING GET PLAYERS GQL============");
// 	try {		
// 		const response = await axios.get("https://fantasy-lax-api-71359d347c0a.herokuapp.com/players");
// 		// const response = await axios.get("localhost:3000/players");
// 		return response.data
// 	} catch(error) {
// 		console.log(error);
// 		throw error
// 	}
// }

export const getPlayers = async () => {
	console.log("========STARTING GET PLAYERS============");
	try {		
		const response = await axios.get("https://fantasy-lax-api-71359d347c0a.herokuapp.com/players");
		// const response = await axios.get("localhost:3000/players");
		return response.data
	} catch(error) {
		console.log(error);
		throw error
	}
}

export const getPlayersForTeam = async (teamId: string) => {
	console.log("======== STARTING GET PLAYERS BY STAT ============");
	try {		
		const response = await axios.get(`https://fantasy-lax-api-71359d347c0a.herokuapp.com/players/team/${teamId}`);
		// const response = await axios.get(`http://localhost:3000/players/team/${teamId}`);
		console.log(response.data)
		return response.data
	} catch(error) {
		console.log(error);
		throw error
	}
}

export const getPlayersOrderedByStatistic = async (args: OrderedStatsArgs) => {
	console.log("======== STARTING GET PLAYERS BY STAT ============");
	try {		
		const response = await axios.get(`https://fantasy-lax-api-71359d347c0a.herokuapp.com/players/statistics/${args.stat}?order_by=${args.order}`);
		// const response = await axios.get(`http://localhost:3000/players/statistics/${args.stat}?order_by=${args.order}`);
		console.log(response.data)
		return response.data
	} catch(error) {
		console.log(error);
		throw error
	}
}