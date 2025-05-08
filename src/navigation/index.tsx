import React, {useEffect, useContext} from 'react';
import {
  createStaticNavigation,
  useNavigation,
  StackActions
} from '@react-navigation/native';
import { Button, HeaderBackButton } from '@react-navigation/elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/screens/HomeScreen';
import MyTeamsScreen from '../views/screens/MyTeamsScreen';
import MyAccountScreen from '../views/screens/MyAccountScreen';
import RosterScreen from '../views/screens/RosterScreen';
import SelectLeagueFromList from '../views/screens/SelectLeagueFromList';
import CreateNewTeamConfirmation from '../views/screens/CreateNewTeamConfirmation';
import AllPlayersScreen from '../views/screens/AllPlayersScreen';
import LeaguesScreen from '../views/screens/LeaguesScreen';
import LeagueTeamsScreen from '../views/screens/LeagueTeamsScreen';
import {getCurrentUser} from '../data/userService';
import { UserContext } from "../contexts/UserContext"
import { MyTeamsStackParamList, LeaguesStackParamList, RootDrawerParamList, CreateTeamStackParamList } from "./types"
import { CurrentUser } from '../data/types';

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const LeagueStack = createNativeStackNavigator<LeaguesStackParamList>();
const MyTeamsStack = createNativeStackNavigator<MyTeamsStackParamList>();
const CreateTeamStack = createNativeStackNavigator<CreateTeamStackParamList>();

export const Navigation = () => {
  const { user, setUser } = useContext(UserContext);
  
  useEffect(()=>{
    getCurrentUser()
    .then(res => setUser(res))
  }, []);

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
        <MyTeamsStack.Navigator>
          <MyTeamsStack.Screen options={{ headerShown: false }} name="UserTeams" component={MyTeamsScreen} />
          <MyTeamsStack.Screen name="RosterScreen" component={RosterScreen} options={{ headerBackTitle: 'My Teams'}} />
          <MyTeamsStack.Screen name="AvailablePlayersScreen" component={AllPlayersScreen} options={({ route }) => ({ title: "Available Players" })}/>
        </MyTeamsStack.Navigator>
    );
  }
  
  function CreateTeamNavigator() {
    return (
      <CreateTeamStack.Navigator>
        <CreateTeamStack.Screen name="SelectLeagueFromList" component={SelectLeagueFromList} />
        <CreateTeamStack.Screen name="CreateNewTeamConfirmation" component={CreateNewTeamConfirmation} options={{ title: 'Choose Team Name' }} />
      </CreateTeamStack.Navigator>
    );
    
  }

  return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="MyTeams" component={MyTeamsNavigator} options={{ title: 'My Teams' }}/>
          <Drawer.Screen name="Leagues" component={LeaguesNavigator} />
          <Drawer.Screen name="Players" component={AllPlayersScreen}/>
          <Drawer.Screen name="Account" component={MyAccountScreen} />
          <Drawer.Screen name="CreateTeam" component={CreateTeamNavigator} options={() => ({
            drawerItemStyle: { display: 'none' },
            title: 'Create New Team'
          })}/>
        </Drawer.Navigator>
        
      </NavigationContainer>
  );
}
