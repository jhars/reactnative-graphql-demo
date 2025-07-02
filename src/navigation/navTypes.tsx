import {
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { League, Position, RosterSpot, Team } from "../data/types";

//JH-NOTE: review all of this... necessary?
export type BaseNavigationProps = NativeStackNavigationProp<ParamListBase>;
export type AvailablePlayersScreenRouteProp = RouteProp<
  MyTeamsStackParamList,
  "AvailablePlayersScreen"
>;
export type RosterScreenRouteProps = RouteProp<
  LeaguesStackParamList | MyTeamsStackParamList,
  "RosterScreen"
>;

export type MyTeamsScreenNavigationProps =
  NavigatorScreenParams<MyTeamsStackParamList>;

export type LeagueTeamsScreenRouteProps = RouteProp<
  LeaguesStackParamList,
  "LeagueTeamsScreen"
>;
export type LeaguesScreenNavigationProps =
  NavigatorScreenParams<LeaguesStackParamList>;

export type CreateNewTeamConfirmationScreenRouteProp = RouteProp<
  CreateTeamStackParamList,
  "CreateNewTeamConfirmation"
>;
export type CreateNewTeamNavigationProps =
  NavigatorScreenParams<CreateTeamStackParamList>;

export type TeamHomeScreenRouteProp = RouteProp<
  MyTeamsStackParamList,
  "TeamHomeScreen"
>;

export type RootDrawerParamList = {
  Home: undefined;
  MyTeams: MyTeamsScreenNavigationProps;
  Leagues: LeaguesScreenNavigationProps;
  Players: undefined;
  Account: undefined;
  CreateTeam: CreateNewTeamNavigationProps;
  //JH-NOTE: Below Needs Diff params
  LiveDraft: CreateNewTeamNavigationProps;
};

export type CreateLiveDraftParamList = {
  LeagueDraftLanding: {
    league: League;
  };
};

export type TeamHomeScreenParamList = {
  team: Team | undefined;
  myTeam: boolean | undefined;
};

export type CreateTeamStackParamList = {
  SelectLeagueFromList: undefined;
  CreateNewTeamConfirmation: {
    leagueID: number;
    leagueTitle: string;
  };
};
// JH-NOTE: myTeam should just be true/false, never undefined
export type RosterScreenParamList = {
  team: Team | undefined;
  myTeam: boolean | undefined;
};

export type MyTeamsStackParamList = {
  UserTeams: undefined;
  TeamHomeScreen: TeamHomeScreenParamList;
  RosterScreen: RosterScreenParamList;
  AvailablePlayersScreen: {
    availableForLeagueId: number | undefined;
    team: Team | undefined;
    position: Position | undefined;
    rosterId: string | undefined;
    rosterSpot: RosterSpot | undefined;
  };
};

export type LeaguesStackParamList = {
  LeaguesScreen: undefined;
  LeagueTeamsScreen: {
    league: League;
  };
  RosterScreen: RosterScreenParamList;
};

//JH-NOTE: may not be the best idea...
// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootDrawerParamList {}
//   }
// }
