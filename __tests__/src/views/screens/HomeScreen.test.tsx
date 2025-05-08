/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomeScreen from '../../../../src/views/screens/HomeScreen';
import { it, describe } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react-native';
import { CurrentUser } from '../../../../src/data/types';
import { MOCK_CURRENT_USER } from '../../../mocks/MOCKS_SHARED'
import { MockedProvider } from '@apollo/react-testing';
import { UserContext } from '../../../../src/contexts/UserContext';

const mockCurrentUser: CurrentUser = MOCK_CURRENT_USER
const mockCurrentUserID = MOCK_CURRENT_USER.id
const mockEmail = MOCK_CURRENT_USER.email
const mockPrefUserName = MOCK_CURRENT_USER.preferred_username

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});


describe('Home Screen Tests', () => {

	it('renders with CurrentUsers preferred username', async () => {
	  const Home = render(
	  	<UserContext.Provider value={{user: mockCurrentUser}}>
			  	<MockedProvider addTypename={false}>
			  			<HomeScreen />
			  	</MockedProvider>
		  	</UserContext.Provider>
	  )

	  const testedTree = Home.toJSON()
	  
    await waitFor(() => {
      expect(screen.getByText(`Welcome, ${mockPrefUserName}`)).toBeVisible()
      expect(testedTree).toMatchSnapshot()
    });
	});

});


