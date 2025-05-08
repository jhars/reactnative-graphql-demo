/**
 * @format
 */

import 'react-native';
import React from 'react';
import DropPlayerConfirmationModal from '../../../../src/views/components/DropPlayerConfirmationModal';
import {it, describe} from '@jest/globals';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import {Player, RosterSpot, Position} from '../../../../src/data/types';
import { MOCK_PLAYER_ATTACK1, MOCK_TEAM, MOCK_ROSTER } from '../../../mocks/MOCKS_SHARED'
import {MockedProvider} from '@apollo/react-testing';
import { REMOVE_PLAYER_FROM_TEAM } from '../../../../src/data/mutations';

describe('Add Player Confirmation Modal Tests', () => {
	
	it('calls failedToAddPlayerCallback to show Failure Alert', async () => {
		const mockRosterSpot = RosterSpot.ATTACK1
		const mockRosterId = MOCK_ROSTER.id
		const mockRoster = MOCK_ROSTER
		const mockPlayerId = MOCK_PLAYER_ATTACK1.id
		const mockLastName = MOCK_PLAYER_ATTACK1.lastName
		const mockPosition = MOCK_PLAYER_ATTACK1.position
		const mockTeam = MOCK_TEAM
		const mockTeamId = MOCK_TEAM.id
		const mockLeagueId = MOCK_TEAM.league.id

		const mocks = [
		  {
		    request: {
		      query: REMOVE_PLAYER_FROM_TEAM,
		      variables: {
		      	leagueId: Number(mockLeagueId),
		      	playerId: Number(mockPlayerId),
		      	rosterSpot: mockRosterSpot,
		      	rosterId: mockRosterId
		      },
		    },
		    error: new Error('Network error'),
		  },
		];

		const mockSuccessCallback = jest.fn()
		const mockCancelCallback = jest.fn()
		const mockFailedToDropPlayerCallback = jest.fn()

	  const AddPlayerModal = render(
	  	<MockedProvider mocks={mocks} addTypename={false}>
	  			<DropPlayerConfirmationModal
		  			rosterSpot={mockRosterSpot}
		  			rosterId={mockRosterId}
		  			playerId={mockPlayerId}
		  			lastName={mockLastName}
		  			position={mockPosition}
		  			roster={mockRoster}
		  			modalCallback={mockSuccessCallback}
		  			cancelCallback={mockCancelCallback}
		  			failedToDropPlayerCallback={mockFailedToDropPlayerCallback}
		  		/>
	  	</MockedProvider>
	  )

    const confirmButton = await screen.queryByTestId('dropPlayerConfirmationButtonTestID')
    fireEvent.press(confirmButton)

    await waitFor(() => {
      expect(mockFailedToDropPlayerCallback).toHaveBeenCalled();
    });
	});

});


