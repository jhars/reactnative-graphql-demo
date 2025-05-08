import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { League } from '../../data/types';
import { ButtonStyles, ContainerStyles } from '../styles/index';

interface LeagueRowProps {
  league: League
}

const LeagueRow = ({league}: LeagueRowProps) => {
  const navigation = useNavigation();

    return(
      <View style={ContainerStyles.container}>
        <TouchableOpacity
          style={ButtonStyles.secondaryButton} 
          onPress={() => {
          return navigation.navigate('Leagues',{
            screen: 'LeagueTeamsScreen',
            params: {league: league}
          })
        }}>
          <Text style={ButtonStyles.secondaryButtonText}>{league.title}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default LeagueRow;