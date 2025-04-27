import { gql } from '@apollo/client';

export const GET_SORTED_PLAYERS = gql`
  query Players($orderBy: PlayerOrder!, $position: Position, $availableForLeagueId: Int) {
    players(orderBy: $orderBy, position: $position, availableForLeagueId: $availableForLeagueId) {
      id
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
        id
      }
    }
  }
`;



export const GET_TEAM_ROSTER = gql`
query Roster($teamId: Int) {
  roster(teamId: $teamId) {

    id
    
    teamInfo {
      name
      id
      league {
        title
        id
      }
    }

    goalie {
      id
      lastName
      position
      statistics {
        statLineLastSeason {
          points
          saves
        }
      }
    }

    defense1 {
    id
    lastName
    position
    statistics {
      statLineLastSeason {
        points
        turnovers
      }
     } 
    }
   
    defense2 {
      id
      lastName
      position
      statistics {
        statLineLastSeason {
          points
          turnovers
      }
     } 
    }

    lsm {
      id
      lastName
      position
      statistics {
        statLineLastSeason {
          points
          groundBalls
        }
      }
    }

    ssdm {
      id
      lastName
      position
      statistics {
        statLineLastSeason {
          points
          groundBalls
        }
      }
    }

    fo {
      id
      lastName
      position
      statistics {
        statLineLastSeason {
          points
          faceoffsWon
        }
      }
    }

    midfield1 {
      id
      lastName
      position
      statistics {
        statLineLastSeason {
          points
          goals
          assists
        }
      }
    }

    midfield2 {
      id
      lastName
      position
      statistics {
        statLineLastSeason {
          points
          goals
          assists
        }
      }
    }

    attack1 {
      id
      lastName
      position
      statistics {
        statLineLastSeason {
          points
          goals
          assists
        }
      }
    }

    attack2 {
      id
      lastName
      position
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