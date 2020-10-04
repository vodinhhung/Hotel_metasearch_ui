import * as AppAuth from 'expo-app-auth';
export const googleLoginConfig = {
  iosClientId: `942559879619-8ok9ub6r8fldfh8vahtndrm270gia59q.apps.googleusercontent.com`,
  androidClientId: `942559879619-ptdpaujllfc8aqcns2p19l5s8rkge9cq.apps.googleusercontent.com`,
  iosStandaloneAppClientId: `942559879619-8ok9ub6r8fldfh8vahtndrm270gia59q.apps.googleusercontent.com`,
  androidStandaloneAppClientId: `942559879619-ptdpaujllfc8aqcns2p19l5s8rkge9cq.apps.googleusercontent.com`,
  scopes: ['profile', 'email'],
  redirectUrl: "host.exp.exponent:/oauth2redirect/google"
};
export const facebookLoginConfig = {
  appId: "2649238258738835"
}