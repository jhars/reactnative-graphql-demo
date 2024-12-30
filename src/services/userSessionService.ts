import { fetchAuthSession } from 'aws-amplify/auth';

export const getCurrentUser = async () => {
	console.log("========GET CURRENT USER============");
	try {
		const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
		console.log(idToken.payload.email)
		console.log(idToken)
		console.log(accessToken)
		return {
			email: idToken.payload.email,
			id: idToken.payload.sub
		}
		// return idToken.payload
	} catch (err) {
		console.log(err);
	}

} 