// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase : {
    apiKey: 'AIzaSyDX4hUF7OsxOSeFDKgOmKyiBggB0mgf5v0',
    authDomain: 'kators-tennis-club.firebaseapp.com',
    databaseURL: 'https://kators-tennis-club.firebaseio.com',
    projectId: 'kators-tennis-club',
    storageBucket: 'kators-tennis-club.appspot.com',
    messagingSenderId: '896954058887'
  }

};
