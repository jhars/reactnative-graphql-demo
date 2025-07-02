import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { getCurrentUser } from "../data/userService";
import LiveDraftHomeScreen from "../views/Draft/screens/LiveDraftHomeScreen";
import LiveDraftLanding from "../views/Draft/screens/LiveDraftLanding";
import HomeScreen from "../views/Home/screens/HomeScreen";
import MyAccountScreen from "../views/Home/screens/MyAccountScreen";
import CreateNewTeamConfirmation from "../views/Leagues/screens/CreateNewTeamConfirmation";
import LeaguesScreen from "../views/Leagues/screens/LeaguesScreen";
import LeagueTeamsScreen from "../views/Leagues/screens/LeagueTeamsScreen";
import SelectLeagueFromList from "../views/Leagues/screens/SelectLeagueFromList";
import AllPlayersScreen from "../views/Players/screens/AllPlayersScreen";
import RosterScreen from "../views/Roster/screens/RosterScreen";
import MyTeamsScreen from "../views/Teams/screens/MyTeamsScreen";
import TeamHomeScreen from "../views/Teams/screens/TeamHomeScreen";
import {
  CreateLiveDraftParamList,
  CreateTeamStackParamList,
  LeaguesStackParamList,
  MyTeamsStackParamList,
  RootDrawerParamList,
} from "./navTypes";

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const LeagueStack = createNativeStackNavigator<LeaguesStackParamList>();
const MyTeamsStack = createNativeStackNavigator<MyTeamsStackParamList>();
const CreateTeamStack = createNativeStackNavigator<CreateTeamStackParamList>();
const CreateDraftStack = createNativeStackNavigator<CreateLiveDraftParamList>();

export const Navigation = () => {
  // const { user, setUser } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getCurrentUser().then((res) => setUser(res));
  }, []);

  function LeaguesNavigator() {
    return (
      <LeagueStack.Navigator>
        <LeagueStack.Screen
          options={{ headerShown: false }}
          name="LeaguesScreen"
          component={LeaguesScreen}
        />
        <LeagueStack.Screen
          name="LeagueTeamsScreen"
          component={LeagueTeamsScreen}
        />
        <LeagueStack.Screen name="RosterScreen" component={RosterScreen} />
      </LeagueStack.Navigator>
    );
  }

  function MyTeamsNavigator() {
    return (
      <MyTeamsStack.Navigator>
        <MyTeamsStack.Screen
          options={{ headerShown: false }}
          name="UserTeams"
          component={MyTeamsScreen}
        />
        <MyTeamsStack.Screen name="TeamHomeScreen" component={TeamHomeScreen} />
        <MyTeamsStack.Screen
          name="RosterScreen"
          component={RosterScreen}
          options={{ headerBackTitle: "My Teams" }}
        />
        <MyTeamsStack.Screen
          name="AvailablePlayersScreen"
          component={AllPlayersScreen}
          options={({ route }) => ({ title: "Available Players" })}
        />
      </MyTeamsStack.Navigator>
    );
  }

  function CreateTeamNavigator() {
    return (
      <CreateTeamStack.Navigator>
        <CreateTeamStack.Screen
          name="SelectLeagueFromList"
          component={SelectLeagueFromList}
        />
        <CreateTeamStack.Screen
          name="CreateNewTeamConfirmation"
          component={CreateNewTeamConfirmation}
          options={{ title: "Choose Team Name" }}
        />
      </CreateTeamStack.Navigator>
    );
  }
  function LiveDraftNavigator() {
    return (
      <CreateDraftStack.Navigator>
        <CreateDraftStack.Screen
          name="LiveDraftSelectTeam"
          component={LiveDraftLanding}
          options={{}}
        />
        <CreateDraftStack.Screen
          name="LiveDraftHomeScreen"
          component={LiveDraftHomeScreen}
        />
      </CreateDraftStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen
          name="MyTeams"
          component={MyTeamsNavigator}
          options={{ title: "My Teams" }}
        />
        <Drawer.Screen name="Leagues" component={LeaguesNavigator} />
        <Drawer.Screen name="Players" component={AllPlayersScreen} />
        <Drawer.Screen name="Account" component={MyAccountScreen} />
        <Drawer.Screen
          name="CreateTeam"
          component={CreateTeamNavigator}
          options={() => ({
            drawerItemStyle: { display: "none" },
            title: "Create New Team",
          })}
        />
        <Drawer.Screen
          name="LiveDraft"
          component={LiveDraftNavigator}
          options={() => ({
            drawerItemStyle: { display: "none" },
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
