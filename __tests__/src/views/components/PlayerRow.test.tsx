/**
 * @format
 */

import 'react-native';
import React from 'react';
import PlayerRow from '../../../../src/views/components/PlayerRow';
import {Player} from '../../../../src/data/types';
import { MOCK_PLAYER } from '../../../mocks/MOCKS_SHARED'
// Note: import explicitly to use the types shiped with jest.
import {it, describe} from '@jest/globals';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react-native';

describe('Player Row Tests', () => {

  afterEach(cleanup);

  it('renders add player column on the player rows when searching for available players to add to team', () => {
    const showAddPlayerButton = true
    const fn = jest.fn()

    const {getByText} = render(<PlayerRow player={MOCK_PLAYER} addPlayerButton={showAddPlayerButton} addPlayerCallback={fn} />);
    const addPlayerButtonElement = getByText('Add')

    expect(addPlayerButtonElement).toBeVisible();
    
  });

  it('renders without add player column when browsing All Players', () => {
    const showAddPlayerButton = false
    const fn = jest.fn()

    const {queryByTestId } = render(<PlayerRow player={MOCK_PLAYER} addPlayerButton={false} addPlayerCallback={fn} />);
    const addPlayerButton = queryByTestId('addPlayerButtonTestID')

    expect(addPlayerButton).toBeNull()
    
  });
})


