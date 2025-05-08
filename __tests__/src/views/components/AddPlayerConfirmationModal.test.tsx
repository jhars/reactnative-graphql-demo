/**
 * @format
 */

import 'react-native';
import React from 'react';
import AddPlayerConfirmationModal from '../../../../src/views/components/AddPlayerConfirmationModal';
import {it, describe} from '@jest/globals';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import {Player, RosterSpot, Position} from '../../../../src/data/types';
import { MOCK_PLAYER_ATTACK1, MOCK_TEAM } from '../../../mocks/MOCKS_SHARED'
import {MockedProvider} from '@apollo/react-testing';
import { ADD_PLAYER_TO_TEAM } from '../../../../src/data/mutations';

describe('Add Player Confirmation Modal Tests', () => {
	
	it('calls failedToAddPlayerCallback to show Failure Alert', async () => {
		const mockRosterSpot = RosterSpot.ATTACK1
		const mockRosterId = "XXXX-XXXX-XXXX-XXXX"
		const mockPlayerId = MOCK_PLAYER_ATTACK1.id
		const mockLastName = MOCK_PLAYER_ATTACK1.lastName
		const mockPosition = MOCK_PLAYER_ATTACK1.position
		const mockTeam = MOCK_TEAM
		const mockTeamId = MOCK_TEAM.id
		const mockLeagueId = MOCK_TEAM.league.id

		const mocks = [
		  {
		    request: {
		      query: ADD_PLAYER_TO_TEAM,
		      variables: {
		      	teamId: Number(mockTeamId),
		      	playerId: Number(mockPlayerId),
		      	rosterSpot: mockRosterSpot,
		      	leagueId: Number(mockLeagueId),
		      	position: mockPosition,
		      	rosterId: mockRosterId,
		      },
		    },
		    error: new Error('Network error'),
		  },
		];

		const mockSuccessCallback = jest.fn()
		const mockCancelCallback = jest.fn()
		const mockFailedToAddPlayerCallback = jest.fn()

	  const AddPlayerModal = render(
	  	<MockedProvider mocks={mocks} addTypename={false}>
	  			<AddPlayerConfirmationModal
		  			rosterSpot={mockRosterSpot}
		  			rosterId={mockRosterId}
		  			playerId={mockPlayerId}
		  			lastName={mockLastName}
		  			position={mockPosition}
		  			team={mockTeam}
		  			callback={mockSuccessCallback}
		  			cancelCallback={mockCancelCallback}
		  			failedToAddPlayerCallback={mockFailedToAddPlayerCallback}
		  		/>
	  	</MockedProvider>
	  )

    const confirmButton = await screen.queryByTestId('addPlayerConfrimationButtonTestID')
    fireEvent.press(confirmButton)

    await waitFor(() => {
      expect(mockFailedToAddPlayerCallback).toHaveBeenCalled();
    });
	});

});


