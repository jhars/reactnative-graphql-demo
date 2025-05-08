/**
 * @format
 */

import 'react-native';
import React from 'react';
import AllPlayersScreen from '../../../../src/views/screens/AllPlayersScreen';
import {it, describe, act} from '@jest/globals';
import { MOCK_ALLPLAYERS_RESPONSE } from '../../../mocks/MOCK_GQL_QUERY_RESULTS'

// JH-NOTE: original annoation on on RosterRow test
// must import (below)  before 'react-native'
import { render, screen, waitFor } from '@testing-library/react-native';
import {MockedProvider} from '@apollo/react-testing';

import { GET_SORTED_PLAYERS } from '../../../../src/data/queries';

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: jest.fn(),
    }),
    useRoute: () => ({
    	params: {}
    })
  };
});

async function wait(ms = 0) {
  await act(() => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  });
}

describe('All Players Screen Test', () => {

	const mocks = [
	  {
	    request: {
	      query: GET_SORTED_PLAYERS,
	      fetchPolicy: "no-cache",
	      variables: { 
	      	orderBy: {
	      		field: 'points',
	      		order: 'DESC'
      		},
      		availableForLeagueId: null,
		  		position: null
	     	}
	    },
	    result: {
	    	data: MOCK_ALLPLAYERS_RESPONSE
	    }
	  }
	];
	
	it('calls renders player names on screen', async () => {
	  const AllPlayers = render(
	  	<MockedProvider mocks={mocks}>
	  		<AllPlayersScreen testID={"AllPlayersScreenTestID"}/>
	  	</MockedProvider>
	  )
	  
	  const playerName = await screen.findByText('Teat')
	  const testedTree = screen.toJSON()

	  await waitFor(() => {
	  	expect(playerName).toBeVisible()
	    expect(testedTree).toMatchSnapshot()
	  });
	  
	});

});


