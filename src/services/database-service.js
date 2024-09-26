import { getDatabase, ref, get, query, orderByChild, limitToLast, set, increment, onValue} from "firebase/database";
import { getFirestore, doc, updateDoc, deleteField, setDoc, getDoc } from "firebase/firestore/lite";

export default class DatabaseService {
   /**
    * Set the flag to control if the application should attempt to read/write from/to local storage.
    * @constructor
    * @param {FirebaseApp} firebaseApp - The firebase application
    */
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
      
      /*
      ************************************************************
      ************************************************************
      Realtime Databse methods 
      ************************************************************
      ************************************************************
      */
      
      /**
       * Set the node reference of all the DB nodes
       */
      setNodeReferences(){
        this._favoritesReference = ref(this._realtimeDatabase, 'favorites')
        this._triedReference = ref(this._realtimeDatabase, 'tried')
        this._wishlistRefernce = ref(this._realtimeDatabase, 'wishlist')
      }
      

      /**
       * Returns all the cuisines configured in the firebase realtime database
       * @return {Record<string, {continent: string, country: string, description: string, isSalty: boolean, isSour: boolean, isSpicy: boolean, isSweet: boolean, isUmani: boolean}>} The cuisines configured in the realtime database. If no data exists empty object is returned
       */
      async getCuisines(){
        const cuisinesRef = ref(this._realtimeDatabase, 'cuisines');
        let cuisineList = {};
        onValue(cuisinesRef, (snapshot) =>{
          snapshot.forEach((childSnapshot) => {
            cuisineList[childSnapshot.key] = childSnapshot.val();
          })
        }, {onlyOnce: true});

        return cuisineList;
      }

      /**
       * Returns the cuisne for the provided cuisineId stored in the firebase real-time database
       * @param cuisineId - The ID of the cuisine for which to get data
       * @return {{cuisineId: string, continent: string, country: string, description: string, isSalty: boolean, isSour: boolean, isSpicy: boolean, isSweet: boolean, isUmani: boolean}} 
       * The cuisne data returned as an object. If no cuisine found empty object is returned
       */
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
              cuisine = {}
            }
          });

          return cuisine;
      }

      /**
       * Returns the top 10 most favorite cusines stored in the the firebase real-time database
       * @return {string[]} An array of the top 10 most favorite cuisines. If no cuisine found an empty array is returned
       */
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

      /**
       * Update the favorite count for the provided cusine by the amount passed
       * @param {string} cuisineId - The cuisine for which to update the favorite count
       * @param {int} amount - The amount to increase/decrease the favorite count
       */
      async updateFavoriteCount(cuisineId, amount){
        await set(ref(this._realtimeDatabase, `favorites/${cuisineId}`), {count:increment(amount)});        
      }
   

      /**
       * Returns the top 10 most tried cusines stored in the the firebase real-time database
       * @return {string[]} An array of the top 10 most tried cuisines. If no cuisine found an empty array is returned
       */
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


      /**
       * Update the tried count for the provided cusine by the amount passed
       * @param {string} cuisineId - The cuisine for which to update the tried count
       * @param {int} amount - The amount to increase/decrease the tried count
       */
      async updateTriedCount(cuisineId, amount){
        await set(ref(this._realtimeDatabase, `tried/${cuisineId}`), {count:increment(amount)});        
      }


      /**
       * Returns the top 10 most wishlisted cusines stored in the the firebase real-time database
       * @return {string[]} An array of the top 10 most wishlisted cuisines. If no cuisine found an empty array is returned
       */
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

      
      /**
       * Update the wishlist count for the provided cusine by the amount passed
       * @param {string} cuisineId - The cuisine for which to update the wishlist count
       * @param {int} amount - The amount to increase/decrease the wishlist count
       */
      async updateWishlistCount(cuisineId, amount){
        await set(ref(this._realtimeDatabase, `wishlist/${cuisineId}`), {count:increment(amount)});        
      }

      /*
      ************************************************************
      ************************************************************
      Firestore Methods
      ************************************************************
      ************************************************************
      */
      // 
      
      /**
       * Set the document reference for the firestore document
       * @param {string} userId 
       */
      setDocumentReferences(userId){
        this._userFavoritesReference = doc(this._firestore, 'favorites', userId);
        this._userTriedReference = doc(this._firestore, 'tried', userId);
        this._userWishlistReference = doc(this._firestore, 'wishlist', userId)
      }

      /**
       * Create a document at the provided reference setting the value to true
       * @param {string} docReference - the root of the new document
       * @param {string} cuisineId - the ID of the cuisine to set
       */
      async _setField(docReference, cuisineId){
        let cuisine = {}
        cuisine[cuisineId] = true
        await setDoc(docReference, cuisine, { merge: true });
      }

      /**
       * Delete a document at the provided reference
       * @param {string} docReference - the root of the document
       * @param {string} cuisineId - the ID of the cuisine to remove
       */
      async _deleteField(docReference, cuisineId){
        let cuisine = {}
        cuisine[cuisineId] = deleteField()
        // Remove the 'cuisineId' field from the document
        await updateDoc(docReference, cuisine)
      }

      /**
       * Get the cuisines that have been marked as favorite by the user
       * @returns {string[]} an array of cuisine IDs that are in the user's favorites. If no cusines have been marked as favorite an empty array is returend
       */
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

      /**
       * Add a cuisine to the user's list of favorite cuisines
       * @param {string} cusineId - the cuisine to add to the list of favorites
       */
      async setUserFavorite(cusineId){
        await this._setField(this._userFavoritesReference, cusineId)
        
      }

      /**
       * Remove a cuisine from the user's list of favorite cuisines
       * @param {string} cuisineId 
       */
      async deleteUserFavorite(cuisineId){
        await this._deleteField(this._userFavoritesReference, cuisineId)
      }

      /**
       * Get the cuisines that have been marked as tried by the user
       * @returns {string[]} an array of cuisine IDs that are in the user's tried cuisines. If no cusines have been marked as tried an empty array is returend
       */
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

      /**
       * Add a cuisine to the user's list of tried cuisines
       * @param {string} cusineId - the cuisine to add to the list of tried
       */
      async setUserTried(cusineId){
        await this._setField(this._userTriedReference, cusineId)
        
      }

      /**
       * Remove a cuisine from the user's list of tried cuisines
       * @param {string} cuisineId 
       */
      async deleteUserTried(cuisineId){
        await this._deleteField(this._userTriedReference, cuisineId)
      }

      /**
       * Get the cuisines that have been marked as wishlist by the user
       * @returns {string[]} an array of cuisine IDs that are in the user's wishlist. If no cusines have been marked as wishlist an empty array is returend
       */
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

      /**
       * Add a cuisine to the user's list of wishlist cuisines
       * @param {string} cusineId - the cuisine to add to the list of wishlist
       */
      async setUserWishlist(cusineId){
        await this._setField(this._userWishlistReference, cusineId)
        
      }
      /**
       * Remove a cuisine from the user's list of wishlist cuisines
       * @param {string} cuisineId 
       */
      async deleteUserWishlist(cuisineId){
        await this._deleteField(this._userWishlistReference, cuisineId)
      }

 }
 