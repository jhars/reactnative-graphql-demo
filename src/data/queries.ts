import { gql } from '@apollo/client';

export const GET_PLAYERS = gql`
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