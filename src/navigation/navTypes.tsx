import { RouteProp, NavigatorScreenParams, ParamListBase, CompositeScreenProps, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import { Team, Position, RosterSpot, League } from '../data/types';
import type { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

//JH-NOTE: review all of this... necessary? 
export type BaseNavigationProps = NativeStackNavigationProp<ParamListBase>;
export type AvailablePlayersScreenRouteProp = RouteProp<MyTeamsStackParamList, 'AvailablePlayersScreen'>;
export type RosterScreenRouteProps = RouteProp<LeaguesStackParamList|MyTeamsStackParamList,'RosterScreen'>;

export type MyTeamsScreenNavigationProps = NavigatorScreenParams<MyTeamsStackParamList>;

export type LeagueTeamsScreenRouteProps = RouteProp<LeaguesStackParamList, 'LeagueTeamsScreen'>;
export type LeaguesScreenNavigationProps = NavigatorScreenParams<LeaguesStackParamList>;

export type CreateNewTeamConfirmationScreenRouteProp = RouteProp<CreateTeamStackParamList, 'CreateNewTeamConfirmation'>;
export type CreateNewTeamNavigationProps = NavigatorScreenParams<CreateTeamStackParamList>;

export type RootDrawerParamList = {
  Home: undefined;
  MyTeams: MyTeamsScreenNavigationProps;
  Leagues: LeaguesScreenNavigationProps;
  Players: undefined;
  Account: undefined;
  CreateTeam: CreateNewTeamNavigationProps;
};

export type CreateTeamStackParamList = { 
  SelectLeagueFromList: undefined,
  CreateNewTeamConfirmation: {
    leagueID: number;
    leagueTitle: string;
  }
}
// JH-NOTE: myTeam should just be true/false, never undefined
export type RosterScreenParamList = {
  team: Team | undefined;
  myTeam: boolean | undefined;
}

export type MyTeamsStackParamList = {
  UserTeams: undefined,
  RosterScreen: RosterScreenParamList,
  AvailablePlayersScreen: { 
    availableForLeagueId: number | undefined;
    team: Team | undefined;
    position: Position | undefined;
    rosterId: string | undefined;
    rosterSpot: RosterSpot | undefined;
  }
};

export type LeaguesStackParamList = {
  LeaguesScreen: undefined,
  LeagueTeamsScreen: {
    league: League;
  },
  RosterScreen: RosterScreenParamList
};


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
