import { gql } from '@apollo/client';

export const ADD_TEAM_TO_LEAGUE = gql`
	mutation AddTeam($name: String!, $leagueId: Int!, $ownerId: ID!) {
	  addTeam(name: $name, leagueId: $leagueId, ownerId: $ownerId) {
	    name
	    leagueId
	    ownerId
	    league {
	      title
	      id
	    }
	  }
	}
`;