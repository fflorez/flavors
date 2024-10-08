import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import DatabaseService from './services/database-service';
import UtilityService from './services/utility-service';
import App from './app';

// Firebase Configuration
const firebaseApp = initializeApp({
    apiKey: 'AIzaSyAxYshc7RkKnvF10hcUVI_2lhnrMfeAmIs',
    authDomain: 'flavors-69d0b.firebaseapp.com',
    projectId: 'flavors-69d0b',
    storageBucket: 'flavors-69d0b.appspot.com',
    messagingSenderId: '934400421477',
    appId: '1:934400421477:web:0aa457b88b1bbb7a4a608c',
    databaseURL: 'https://flavors-69d0b-default-rtdb.firebaseio.com/'
});

/*
const appCheck = initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaEnterpriseProvider('6Ld26y8pAAAAAB_6ekl_ynjPM-TCazylbCm3u82e'),
    isTokenAutoRefreshEnabled: true // Set to true to allow auto-refresh.
});
*/

const databeseService = new DatabaseService(firebaseApp);
databeseService.setNodeReferences();

//const cuisines = await databeseService.getCuisines();
const topFavorites = await databeseService.getTopFavorites();
const topTried = await databeseService.getTopTried();
const topWishlist = await databeseService.getTopWishlist();

//const app = new App(cuisines, topFavorites, topTried, topWishlist);
//app.init();

//console.log(app);