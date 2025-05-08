/**
 * @format
 */

import 'react-native';
import React from 'react';
import RosterTableHeader from '../../../../src/views/components/RosterTableHeader';
import {it, describe} from '@jest/globals';
import { render } from '@testing-library/react-native';

describe('Roster Table Header Tests', () => {
	
	it('renders ACTION column on the header component when it is one of MyTeam rosters', async () => {
	  const {getByText} = render(<RosterTableHeader myTeam={true} />)
    const actionColumn = getByText('Action')
    expect(actionColumn).toBeVisible();
	});

	it('does not render ACTION column on the header component when NOT one of MyTeam rosters', async () => {
	  const {queryByTestId} = render(<RosterTableHeader myTeam={false} />)
    const actionColumn = queryByTestId('actionColumnHeaderTestID')
    expect(actionColumn).toBeNull();
	});

});


