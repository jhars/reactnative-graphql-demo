import { gql } from '@apollo/client';

export const GET_ALL_PLAYERS = gql`
	query Players {
	  players {
	  	id
	    firstName
	    lastName
	    jersey
	    statistics {
	      statLineLastSeason {
	        points
	      }
	    }
	  }
	}
`;

export const GET_ALL_LEAGUES = gql`
	query Leagues {
	  leagues {
	    id
	    title
	    teams {
	      name
	    }
	  }
	}
`;

export const GET_TEAM_ROSTER = gql`
	query Teams($leagueId: Int, $teamsId: Int) {
	  teams(leagueId: $leagueId, teamsId: $teamsId) {
	    name
	    roster {
	      goalie
	      attack1
	      attack2
	      defense1
	      defense2
	      fo
	      lsm
	      midfield1
	      midfield2
	    }
	  }
	}
`;

