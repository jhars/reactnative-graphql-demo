# L@x F@nt@sy Mobile

![Lax Fan Test Image](/assets/images/laxFan-Logo-01.png)

## Technnologies
React Native
GraphQL Client
Apollo Client
React Hooks
AWS Amplify Auth
Expo (EAS Hosting)


### A brief description of the project
An iOS/Android mobile application to play F@nt@sy L@cr0sse. Currently, functionality is limited to:

- Sign Up / Login
- Create a Team + Join League
- Add/Drop Players to/from your Team. 

Hoping for a Beta release in 2025, but lots of functionality still to build!

### Setup/Demo

There is Web App Demo you are welcome explore here: https://laxapp--3xft595bny.expo.app

You are welcome to fork and download this project, however, the setup process would require initializing new user group/pool on AWS Amplify and configuring the environment.

### Local Build commands for Web, Android & iOS

Run on Web:
```
$ npm run web
```

Emulator Build Commands:
```
$ npx expo run android
$ npx expo run ios
```

### Server Setup
There is also a [GraphQL Server](https://github.com/jhars/nodejs-graphql-psql-apollo-demo) for this application, built with NodeJS / PostgreSQL / Apollo, that you are welcome to download and run. Follow the instructions in that repo's [README](https://github.com/jhars/nodejs-graphql-psql-apollo-demo) to get it up and running locally and then you can checkout the GraphQL data explorer on localhost:4000.

