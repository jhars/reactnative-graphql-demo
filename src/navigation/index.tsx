import React, {useEffect, useContext} from 'react';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/screens/HomeScreen';
import MyTeamsScreen from '../views/screens/MyTeamsScreen';
import MyAccountScreen from '../views/screens/MyAccountScreen';
import RosterScreen from '../views/screens/RosterScreen';
import CreateNewTeamScreen from '../views/screens/CreateNewTeamScreen';
import CreateNewTeamConfirmation from '../views/screens/CreateNewTeamConfirmation';
import AllPlayersScreen from '../views/screens/AllPlayersScreen';
import LeaguesScreen from '../views/screens/LeaguesScreen';
import LeagueTeamsScreen from '../views/screens/LeagueTeamsScreen';
import {getCurrentUser} from '../data/userService';
import { UserContext } from "../contexts/UserContext"

const Drawer = createDrawerNavigator();
const LeagueStack = createNativeStackNavigator();
const TeamsStack = createNativeStackNavigator();

export const Navigation = () => {
  const { user, setUser } = useContext(UserContext);
  
  useEffect(()=>{
    getCurrentUser().then(res => setUser(res))
  }, []);

  //JH-NOTE: Roster Screen is on here in two different stacks
  // should refactor, espcially in consideration of new Draft Stack
  // Either have it's own stack (but not in drawer) OR nest in a Draft Stack
  // Will need a better way to access Universally
  function LeaguesNavigator() {
    return (
      <LeagueStack.Navigator>
        <LeagueStack.Screen options={{ headerShown: false }} name="LeaguesScreen" component={LeaguesScreen} />
        <LeagueStack.Screen name="LeagueTeamsScreen" component={LeagueTeamsScreen} />
        <LeagueStack.Screen name="RosterScreen" component={RosterScreen} />
      </LeagueStack.Navigator>
    );
  }

  function MyTeamsNavigator() {
    return (
        <TeamsStack.Navigator>
          <TeamsStack.Screen options={{ headerShown: false }} name="UserTeams" component={MyTeamsScreen} />
          <TeamsStack.Screen name="RosterScreen" component={RosterScreen} options={{ headerBackTitle: 'My Teams'}} />
          <TeamsStack.Screen name="AvailablePlayersScreen" component={AllPlayersScreen} options={({ route }) => ({ title: "Available Players" })}/>
          <TeamsStack.Screen name="CreateNewTeamScreen" component={CreateNewTeamScreen} />
          <TeamsStack.Screen name="CreateNewTeamConfirmation" component={CreateNewTeamConfirmation} />
        </TeamsStack.Navigator>
    );
  }

  return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="My Teams" component={MyTeamsNavigator} />
          <Drawer.Screen name="Leagues" component={LeaguesNavigator} />
          <Drawer.Screen name="Players" component={AllPlayersScreen} />
          <Drawer.Screen name="Account" component={MyAccountScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
