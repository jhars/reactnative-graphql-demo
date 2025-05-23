import { fetchAuthSession } from 'aws-amplify/auth';
import { CurrentUser } from './types'


export const getCurrentUser = async (): Promise<CurrentUser> => {
	console.log("========GET CURRENT USER============");
	try {
		const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
		const user = {
			email: String(idToken?.payload?.email),
			id: String(idToken?.payload?.sub),
			preferred_username: String(idToken?.payload?.preferred_username)
		}
		console.log(user)
		return user
	} catch (err) {
		throw new Error("Unable To Fetch Current User")
	}
} 