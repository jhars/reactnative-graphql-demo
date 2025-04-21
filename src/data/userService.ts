import { fetchAuthSession } from 'aws-amplify/auth';

export const getCurrentUser = async () => {
	console.log("========GET CURRENT USER============");
	try {
		const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
		const user = {
			email: idToken.payload.email,
			id: idToken.payload.sub,
			preferred_username: idToken.payload.preferred_username
		}
		console.log(user)
		return user
	} catch (err) {
		console.log(err);
	}

} 