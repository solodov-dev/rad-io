# rad-io

## Project setup
```
1) npm install
```
2) Create your own firebase-config.js file within the root directory of this project:
```
//firebase-config.js

const firebaseConfig = {
  apiKey: YOUR_API_KEY',
  authDomain: YOUR_AUTH_DOMAIN,
  databaseURL: YOUR_DB_URL,
  projectId: YOUR_PROJECT_ID,
  storageBucket: YOUR_STORAGE_BUCKET,
  messagingSenderId: YOUR_MSG_SENDER_ID,
  appId: YOUR_APP_ID,
};

export default firebaseConfig;
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
