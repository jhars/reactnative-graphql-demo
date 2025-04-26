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
export const ADD_PLAYER_TO_TEAM = gql`
mutation AddPlayerToTeamRoster($leagueId: Int!, $teamId: Int!, $playerId: Int!, $position: Position!, $rosterSpot: RosterSpot!,$rosterId: ID!) {
  addPlayerToTeamRoster(leagueId: $leagueId, teamId: $teamId, playerId: $playerId, position: $position, rosterSpot: $rosterSpot, rosterId: $rosterId) {

      goalie {
        lastName
        position
        statistics {
          statLineLastSeason {
            points
          }
        }
      }

      defense1 {
        lastName
        position
        statistics {
          statLineLastSeason {
            points
          }
        }
      }
    
      defense2 {
        lastName
        position
        statistics {
          statLineLastSeason {
            points
          }
        }
      }

      lsm {
        lastName
        position
        statistics {
          statLineLastSeason {
            points
          }
        }
      }

      fo {
        lastName
        position
        statistics {
          statLineLastSeason {
            points
          }
        }
      }

      ssdm {
        lastName
        position
        statistics {
          statLineLastSeason {
            points
          }
        }
      }

      midfield1 {
        lastName
        position
        statistics {
          statLineLastSeason {
            points
          }
        }
      }

      midfield2 {
        lastName
        position
        statistics {
          statLineLastSeason {
            points
          }
        }
      }

      attack1 {
        lastName
        position
        statistics {
          statLineLastSeason {
            points
          }
        }
      }

      attack2 {
        lastName
        position
        statistics {
          statLineLastSeason {
            points
          }
        }
      } 
    }

}
`;