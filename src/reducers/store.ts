import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { PlayersByStatReducer } from './playersByStatisticReducer';
import { CurrentUserReducer } from './currentUserReducer';
import { AllLeaguesReducer  } from './leagueReducer';
import { TeamsForUserReducer  } from './teamReducer';
import { TeamsByLeagueReducer  } from './teamsByLeagueReducer';
import { PlayersForTeamReducer  } from './playersForTeamReducer';
import { CreateNewTeamsForLeaagueReducer  } from './teamNewToLeagueReducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    currentUserSession: CurrentUserReducer,
    playersByStat: PlayersByStatReducer,
    allLeagues: AllLeaguesReducer,
    teamsForUser: TeamsForUserReducer,
    teamsByLeague: TeamsByLeagueReducer,
    playersForTeam: PlayersForTeamReducer,
    createNewTeam: CreateNewTeamsForLeaagueReducer
  },
})

export default store;