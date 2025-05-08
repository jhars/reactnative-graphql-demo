/**
 * @format
 */

import 'react-native';
import React from 'react';
import RosterScreen from '../../../../src/views/screens/RosterScreen';
import {it, describe} from '@jest/globals';
import { render, screen, waitFor, act } from '@testing-library/react-native';
import {Roster} from '../../../../src/data/types';
import { MOCK_TEAM, MOCK_ROSTER } from '../../../mocks/mocks_shared'
import {MockedProvider} from '@apollo/react-testing';
import { GET_TEAM_ROSTER } from '../../../../src/data/queries';
import { NavigationContainer } from '@react-navigation/native';

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      setOptions: jest.fn(() => {title: MOCK_TEAM.name})
    }),
    useRoute: () => ({
    	params: {
    		myTeam: false,
    		team: MOCK_TEAM
    	}
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

describe('Roster Screen Tests', () => {
	
	it('ASSERT SOMETHING HERE', async () => {
		const mockRoster: Roster = MOCK_ROSTER
		const mockTeamId = MOCK_TEAM.id

		const mocks = [
		  {
		    request: {
		      query: GET_TEAM_ROSTER,
		      variables: { teamId: Number(mockTeamId) }
		    },
		    result: {
		    	data: {
		    		roster: MOCK_ROSTER
		    	}
		    }
		  }
		];

	  const Roster = render(
	  	<MockedProvider mocks={mocks} addTypename={false}>
	  		<NavigationContainer>
  				<RosterScreen />
  			</NavigationContainer>
	  	</MockedProvider>
	  )

	  await wait(1000)
	  const testedTree = screen.toJSON()
    await waitFor(() => {
      expect(testedTree).toMatchSnapshot()
    });
	});

});


