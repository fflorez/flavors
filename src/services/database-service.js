import { getDatabase, ref, get, query, orderByChild, limitToLast, set, increment} from "firebase/database";
import { getFirestore, doc, updateDoc, deleteField, setDoc, getDoc } from "firebase/firestore/lite";

export default class DatabaseService {
    constructor(firebaseApp) {
        this._realtimeDatabase = getDatabase(firebaseApp);
        this._firestore = getFirestore(firebaseApp);
        this._favoritesReference = null;
        this._triedReference = null;
        this._wishlistRefernce = null;
        this._userFavoritesReference = null
        this._userTriedReference = null
        this._userWishlistReference = null
      }

      // Realtime Databse methods 

      // Set node references
      setNodeReferences(){
        this._favoritesReference = ref(this._realtimeDatabase, 'favorites')
        this._triedReference = ref(this._realtimeDatabase, 'tried')
        this._wishlistRefernce = ref(this._realtimeDatabase, 'wishlist')
      }

      async getMetadata(){
        const metadataRef = ref(this._realtimeDatabase, 'metadata/');
        const metadata = {};

        await get(metadataRef).then((snapshot) =>{
          if(snapshot.exists()){
            snapshot.forEach((child)=>{
              metadata[child.key] = child.val();   
            });                   
          }else{
            console.log("No metadata available");
          }
        });

        return metadata;

      }

      // Get the list of available cuisines
      async getCuisine(cuisineId){
        
        const cuisinesRef = ref(this._realtimeDatabase, 'cuisines/'+cuisineId);

        const cuisine = {'id': cuisineId};
       
        await get(cuisinesRef).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach((child) => {
                  cuisine[child.key] = child.val();                    
                });                
            } else {
              console.log("No cuisine data available");
            }
          });

          return cuisine;
      }

      //Get the top 10 most favorite cuisines
      async getTopFavorites(){
        let topFavoritesList = []
        const topFavoriteQuery = query(this._favoritesReference, orderByChild('count'), limitToLast(10));
        await get(topFavoriteQuery).then((snapshot) => {
            if(snapshot.exists()){
                topFavoritesList = Object.keys(snapshot.val())
            }else{
                console.log("No top favorite data available")
            }
        });

        return topFavoritesList;
        
      }

      // Update the global cuisine favorite count
      async updateFavoriteCount(cuisineId, amount){
        await set(ref(this._realtimeDatabase, `favorites/${cuisineId}`), {count:increment(amount)});        
      }
   

      // Get the top 10 most tried cuisines
      async getTopTried(){
        let topTriedList = []
        const topTriedQuery = query(this._triedReference, orderByChild('count'), limitToLast(10));
        await get(topTriedQuery).then((snapshot) => {
            if(snapshot.exists()){
                topTriedList = Object.keys(snapshot.val())
            }else{
                console.log("No top tried data available")
            }
        });

        return topTriedList;
        
      }

      // Update the global cuisine favorite count
      async updateTriedCount(cuisineId, amount){
        await set(ref(this._realtimeDatabase, `tried/${cuisineId}`), {count:increment(amount)});        
      }


      // Get the top 10 most wishlisted cuisines
      async getTopWishlist(){
        let topWishlistList = []
        const topWishlistQuery = query(this._triedReference, orderByChild('count'), limitToLast(10));
        await get(topWishlistQuery).then((snapshot) => {
            if(snapshot.exists()){
                topWishlistList = Object.keys(snapshot.val())
            }else{
                console.log("No top wishlist data available")
            }
        });

        return topWishlistList;
        
      }

      // Update the global cuisine favorite count
      async updateWishlistCount(cuisineId, amount){
        await set(ref(this._realtimeDatabase, `wishlist/${cuisineId}`), {count:increment(amount)});        
      }

      // Firestore Methods

      setDocumentReferences(userId){
        this._userFavoritesReference = doc(this._firestore, 'favorites', userId);
        this._userTriedReference = doc(this._firestore, 'tried', userId);
        this._userWishlistReference = doc(this._firestore, 'wishlist', userId)
      }

      async _setField(docReference, cuisineId){
        let cuisine = {}
        cuisine[cuisineId] = true
        await setDoc(docReference, cuisine, { merge: true });
      }

      async _deleteField(docReference, cuisineId){
        let cuisine = {}
        cuisine[cuisineId] = deleteField()
        // Remove the 'cuisineId' field from the document
        await updateDoc(docReference, cuisine)
      }

      // Get the cuisines the user has marked as favorites
      async getUserFavorites(){
        let favoritesList = []
        
        await getDoc(this._userFavoritesReference).then((snapshot)=> {
            if (snapshot.exists()) {
                favoritesList = Object.keys(snapshot.data())
            }else {
                console.log("No favorites document!");
              }

        })
        return favoritesList
      }

      // Add a cuisine to the favorite lists
      async setUserFavorite(cusineId){
        await this._setField(this._userFavoritesReference, cusineId)
        
      }

      // Remove a cuisine from the favorite lists
      async deleteUserFavorite(cuisineId){
        await this._deleteField(this._userFavoritesReference, cuisineId)
      }

      // Get the cuisines the user has marked as tried
      async getUserTried(){
        let triedList = []
        
        await getDoc(this._userTriedReference).then((snapshot)=> {
            if (snapshot.exists()) {
                triedList = Object.keys(snapshot.data())
            }else {
                console.log("No tried document!");
              }

        })
        return triedList
      }

      // Add a cuisine to the tried lists
      async setUserTried(cusineId){
        await this._setField(this._userTriedReference, cusineId)
        
      }

      // Remove a cuisine from the tried lists
      async deleteUserTried(cuisineId){
        await this._deleteField(this._userTriedReference, cuisineId)
      }

      // Get the cuisines the user has marked as tried
      async getUserWishlist(){
        let wishlistList = []
        
        await getDoc(this._userWishlistReference).then((snapshot)=> {
            if (snapshot.exists()) {
                wishlistList = Object.keys(snapshot.data())
            }else {
                console.log("No wishlist document!");
              }

        })
        return wishlistList
      }

      // Add a cuisine to the wishlist
      async setUserWishlist(cusineId){
        await this._setField(this._userWishlistReference, cusineId)
        
      }

      // Remove a cuisine from the wishlist
      async deleteUserWishlist(cuisineId){
        await this._deleteField(this._userWishlistReference, cuisineId)
      }

 }
 