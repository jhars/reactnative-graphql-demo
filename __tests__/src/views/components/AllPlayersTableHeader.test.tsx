/**
 * @format
 */

import 'react-native';
import React from 'react';
import AllPlayersTableHeader from '../../../../src/views/components/AllPlayersTableHeader';
import {it, describe} from '@jest/globals';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';

describe('All Players Table Header', () => {
	
	it('calls the AllPlayerScreen callback from local sortTable() on POINTS Column Header Button Press', async () => {
		const mockSortPlayerCallback = jest.fn();
	  
	  const TableHeader = render(<AllPlayersTableHeader 
	  	sortCriteria={'points'}
	  	sortOrder={'DESC'}
	  	callback={mockSortPlayerCallback} 
	  	availableForLeague={undefined}
	  />)

	  const sortByPointsHeaderButton = await screen.queryByTestId('pointsColumnSortHeaderButtonTestID')
	  
	  fireEvent.press(sortByPointsHeaderButton)
	  await waitFor(() => {
  		expect(mockSortPlayerCallback).toHaveBeenCalledWith('points', 'DESC')
    });
	  
	});

		it('calls sortPlayerCallbacl on POINTS Column Header Button Press with ASC sort Order', async () => {
			const mockSortPlayerCallback = jest.fn();
		  
		  const TableHeader = render(<AllPlayersTableHeader 
		  	sortCriteria={'points'}
		  	sortOrder={'ASC'}
		  	callback={mockSortPlayerCallback} 
		  	availableForLeague={undefined}
		  />)

		  const sortByPointsHeaderButton = await screen.queryByTestId('pointsColumnSortHeaderButtonTestID')
		  
		  fireEvent.press(sortByPointsHeaderButton)
		  await waitFor(() => {
	  		expect(mockSortPlayerCallback).toHaveBeenCalledWith('points', 'ASC')
	    });
		  
		});

	it('calls the callback function from local sortTable() method when the POSITION Column Header Button is Pressed', async () => {
		const mockCallback = jest.fn();
	  
	  const TableHeader = render(<AllPlayersTableHeader 
	  	sortCriteria={'points'}
	  	sortOrder={'DESC'}
	  	callback={mockCallback} 
	  	availableForLeague={undefined}
	  />)

	  const sortByPositionHeaderButton = await screen.queryByTestId('positionColumnSortHeaderButtonTestID')
	  
	  fireEvent.press(sortByPositionHeaderButton)
    await waitFor(() => {
  		expect(mockCallback).toHaveBeenCalledWith('position', 'DESC')
    })
	  
	});	

	it('calls the callback function from local sortTable() method when the NAME Column Header Button is Pressed', async () => {
		const mockCallback = jest.fn();
	  
	  const TableHeader = render(<AllPlayersTableHeader 
	  	sortCriteria={'points'}
	  	sortOrder={'DESC'}
	  	callback={mockCallback} 
	  	availableForLeague={undefined}
	  />)

	  const sortByNameHeaderButton = await screen.queryByTestId('nameColumnSortHeaderButtonTestID')
	  
	  fireEvent.press(sortByNameHeaderButton)
	  await waitFor(() => {
			expect(mockCallback).toHaveBeenCalledWith('lastName', 'DESC')  
	  })
	  
	});	

});


