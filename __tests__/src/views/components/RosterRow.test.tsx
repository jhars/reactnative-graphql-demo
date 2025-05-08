/**
 * @format
 */

import 'react-native';
import React from 'react';
import RosterRow from '../../../../src/views/components/RosterRow';
import {Player, RosterSpot, Position} from '../../../../src/data/types';
import { MOCK_PLAYER, MOCK_TEAM } from '../../../mocks/MOCKS_SHARED'
// Note: import explicitly to use the types shiped with jest.
import {it, describe} from '@jest/globals';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react-native';

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe('Roster Row Tests', () => {

  afterEach(cleanup);

  it('renders DROP button when viewing user owned team roster and RosterSpot is FILLED', () => {
    const mockPlayerInfo = MOCK_PLAYER
    const isMyTeam = true
    const fn = jest.fn()

    const {getByText, queryByTestId} = render(<RosterRow
    	dropPlayerCallback={fn}
    	rosterId={"rosterTestID"}
    	rosterSpot={RosterSpot.G}
    	position={undefined}
    	playerInfo={mockPlayerInfo}
    	myTeam={isMyTeam}
    	teamInfo={MOCK_TEAM}     
    />);

    const dropPlayerButton = getByText('Drop')
    const addPlayerButton = queryByTestId('rosterRowAddButtonID')

    expect(dropPlayerButton).toBeVisible();
    expect(addPlayerButton).toBeNull();
    
  });

  it('renders ADD button when viewing user owned team roster and RosterSpot is EMPTY', () => {
    const mockPlayerInfo = undefined
    const isMyTeam = true
    const fn = jest.fn()

    const {getByText, queryByTestId} = render(<RosterRow
    	dropPlayerCallback={fn}
    	rosterId={"rosterTestID"}
    	rosterSpot={RosterSpot.G}
    	position={undefined}
    	playerInfo={mockPlayerInfo}
    	myTeam={isMyTeam}
    	teamInfo={MOCK_TEAM}     
    />);

    const addPlayerButton = getByText('Add')
    const dropPlayerButton = queryByTestId('rosterRowDropButtonID')

    expect(addPlayerButton).toBeVisible();
    expect(dropPlayerButton).toBeNull();
  });

  it('Does Not render DROP or ADD buttons when viewing Roster in Leagues Menu', () => {
    const mockPlayerInfo = MOCK_PLAYER
    const isMyTeam = false
    const fn = jest.fn()

    const {queryByTestId} = render(<RosterRow
    	dropPlayerCallback={fn}
    	rosterId={"rosterID"}
    	rosterSpot={RosterSpot.G}
    	position={undefined}
    	playerInfo={mockPlayerInfo}
    	myTeam={isMyTeam}
    	teamInfo={MOCK_TEAM}     
    />);

    const dropPlayerButton = queryByTestId('rosterRowDropButtonID')
    const addPlayerButton = queryByTestId('rosterRowAddButtonID')

    expect(dropPlayerButton).toBeNull();
    expect(addPlayerButton).toBeNull();
  });

});


