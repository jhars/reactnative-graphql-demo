import { gql } from '@apollo/client';

export const GET_SORTED_PLAYERS = gql`
  query Players($orderBy: PlayerOrder) {
    players(orderBy: $orderBy) {
      lastName
      position
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
	      id
	      name
	    }
	  }
	}
`;

export const GET_TEAMS = gql`
  query Teams($ownerId: ID, $teamsId: Int, $leagueId: Int) {
    teams(ownerId: $ownerId, teamsId: $teamsId, leagueId: $leagueId) {
      id
      name
      league {
        title
      }
    }
  }
`;



export const GET_TEAM_ROSTER = gql`
query Roster($teamId: Int) {
  roster(teamId: $teamId) {

    goalie {
      lastName
      statistics {
        statLineLastSeason {
          points
          saves
        }
      }
    }

    defense1 {
    lastName
     statistics {
      statLineLastSeason {
        points
        turnovers
      }
     } 
    }
   
    defense2 {
     lastName
     statistics {
      statLineLastSeason {
        points
        turnovers
      }
     } 
    }

    lsm {
      lastName
      statistics {
        statLineLastSeason {
          points
          groundBalls
        }
      }
    }

    fo {
      lastName
      statistics {
        statLineLastSeason {
          points
          faceoffsWon
        }
      }
    }

    midfield1 {
      lastName
      statistics {
        statLineLastSeason {
          points
          goals
          assists
        }
      }
    }

    midfield2 {
      lastName
      statistics {
        statLineLastSeason {
          points
          goals
          assists
        }
      }
    }

    attack1 {
      lastName
      statistics {
        statLineLastSeason {
          points
          goals
          assists
        }
      }
    }

    attack2 {
      lastName
      statistics {
        statLineLastSeason {
          points
          goals
          assists
        }
      }
    } 
  }
}
`;