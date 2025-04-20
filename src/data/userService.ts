import { fetchAuthSession } from 'aws-amplify/auth';

export const getCurrentUser = async () => {
	console.log("========GET CURRENT USER============");
	try {
		const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
		return {
			email: idToken.payload.email,
			id: idToken.payload.sub,
			preferred_username: idToken.payload.preferred_username
		}
	} catch (err) {
		console.log(err);
	}

} 