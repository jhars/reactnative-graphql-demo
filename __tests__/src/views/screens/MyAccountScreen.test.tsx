/**
 * @format
 */

import 'react-native';
import React from 'react';
import MyAccountScreen from '../../../../src/views/screens/MyAccountScreen';
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

jest.mock('@aws-amplify/ui-react-native', () => {
  return {
    useAuthenticator: () => ({
      signOut: jest.fn(),
    }),
  };
});

describe('My Account Screen Tests', () => {

	it('renders with current user email and username', async () => {
	  const MyAccount = render(
	  	<UserContext.Provider value={{user: mockCurrentUser}}>
			  	<MockedProvider addTypename={false}>
			  			<MyAccountScreen />
			  	</MockedProvider>
		  	</UserContext.Provider>
	  )

	  const testedTree = MyAccount.toJSON()
	  
    await waitFor(() => {
      expect(screen.getByText(`Email: ${mockEmail}`)).toBeVisible()
      expect(screen.getByText(`Username: ${mockPrefUserName}`)).toBeVisible()
      expect(testedTree).toMatchSnapshot()
    });
	});

});


