import { gql } from "@apollo/client";

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
  mutation AddPlayerToTeamRoster(
    $leagueId: Int!
    $teamId: Int!
    $playerId: Int!
    $position: Position!
    $rosterSpot: RosterSpot!
    $rosterId: ID!
  ) {
    addPlayerToTeamRoster(
      leagueId: $leagueId
      teamId: $teamId
      playerId: $playerId
      position: $position
      rosterSpot: $rosterSpot
      rosterId: $rosterId
    ) {
      id
      teamId
      teamInfo {
        name
        leagueId
        ownerId
      }
    }
  }
`;

export const REMOVE_PLAYER_FROM_TEAM = gql`
  mutation RemovePlayerFromTeamRoster(
    $leagueId: Int!
    $playerId: Int!
    $rosterSpot: RosterSpot!
    $rosterId: ID!
  ) {
    removePlayerFromTeamRoster(
      leagueId: $leagueId
      playerId: $playerId
      rosterSpot: $rosterSpot
      rosterId: $rosterId
    ) {
      id
      teamId
      teamInfo {
        name
        leagueId
        ownerId
      }
    }
  }
`;
