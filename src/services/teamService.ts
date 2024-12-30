import axios from 'axios';
import { app } from '../../appConfig';
import { NewTeamArgs } from '../actions/createNewTeamAction';

export const getTeamsByUser = async (userId: string) => {

	console.log("========STARTING GET TEAMS BY USER ============");
	try {
		const response = await axios.get(`https://fantasy-lax-api-71359d347c0a.herokuapp.com/teams/user/${userId}`);
		// const response = await axios.get(`http://localhost:3000/teams/user/${userId}`);
		console.log("fetch teams respsonse")
		console.log(response.data)
		return response.data
	} catch(error) {
		console.log(error);
		throw error
	}
}

export const getTeamsByLeague = async (leagueId: string) => {

	console.log("========STARTING GET TEAMS BY LEAGUE ============");
	try {
		console.log("leagueId")
		console.log(leagueId)
		const response = await axios.get(`https://fantasy-lax-api-71359d347c0a.herokuapp.com/teams/league/${leagueId}`);
		// const response = await axios.get(`http://localhost:3000/teams/league/${leagueId}`);
		console.log("fetch teams by league respsonse")
		console.log(response.data)
		return response.data
	} catch(error) {
		console.log(error);
		throw error
	}
}

export const addNewTeamsToLeague = async (args: NewTeamArgs) => {

	console.log("========STARTING ADD NEW TEAM TO LEAGUE ============");
	try {
		console.log("leagueId")
		// console.log(leagueId)
		const response = await axios.post(`https://fantasy-lax-api-71359d347c0a.herokuapp.com/teams/${args.leagueId}/${args.userId}/${args.name}`);
		// const response = await axios.post(`http://localhost:3000/teams/${args.leagueId}/${args.userId}/${args.name}`);
		console.log("fetch teams by league respsonse")
		console.log(response.data)
		return response.data
	} catch(error) {
		console.log(error);
		throw error
	}
}