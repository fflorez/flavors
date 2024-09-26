export default class App {

    /**
     * Create a new instance of the Application class
     * @constructor
     * @param {Record<string, {continent: string, country: string, description: string, isSalty: boolean, isSour: boolean, isSpicy: boolean, isSweet: boolean, isUmani: boolean}>} cuisines - the map of cuisine objects. 
     * @param {string[]} mostFavorite - the list of cuisines that have been most favorite by users
     * @param {string[]} mostTried - the list of cuisine IDs that have been most tried by users
     * @param {string[]} mostWishlist - the list of cuisine IDs that have been most wishlisted by users
     */
    constructor(cuisines, mostFavorite, mostTried, mostWishlist) {
        this.cuisines = cuisines;
        this.flavors = {
            'salty' : [],
            'sour' : [],
            'spicy' : [],
            'sweet' : [],
            'umani' : []
        };
        this.continents = {
            'Africa': [],
            'Asia' : [],
            'North America' : [],
            'South America' : [],
            'Europe' : [],
            'Oceania' : []
        };
        this.favorites = [];
        this.tried = [];
        this.wishlist = [];
        this.availableCuisines = [];
        this.mostFavorite = mostFavorite;
        this.mostTried = mostTried;
        this.mostWishlist = mostWishlist;
        this.remaningCount = 0;
    }

    /**
     * Initialize the internal data strucutres based on the cuisine data
     */
    init() {
        for(let country in this.cuisines) {

            this.cuisines[country].isFavorite = false;
            this.cuisines[country].isTried = false;
            this.cuisines[country].isWishlist = false;

            this.continents[this.cuisines[country].continent].push(country);            

            if(this.cuisines[country].isSalty){
                this.flavors["salty"].push(country);
            }

            if(this.cuisines[country].isSweet){
                this.flavors["sweet"].push(country);
            }

            if(this.cuisines[country].isSour){
                this.flavors["sour"].push(country);
            }

            if(this.cuisines[country].isSpicy){
                this.flavors["spicy"].push(country);
            }

            if(this.cuisines[country].isUmani){
                this.flavors["umani"].push(country);
            }
        }
    }

    /**
     * Set the favorites to the user's favorites list and update the cuisines isFavorite to true
     * @param {string[]} favorites - list of cuisine IDs that the user has marked favorites
     */
    setFavorites(favorites){
        this.favorites = favorites;
        favorites.forEach(element => {
            this.cuisines[element].isFavorite = true;
        });
    }

    /**
     * Set the tried to the user's tried list and update the cuisines isTried to true
     * @param {string[]} tried - list of cuisine IDs that the user has marked tried
     */
    setTried(tried){
        this.tried = tried;
        tried.forEach(element => {
            this.cuisines[element].isTried = true;
        });
    }

    /**
     * Set the wishlist to the user's wish list and update the cuisines isWishlist to true
     * @param {string[]} tried - list of cuisine IDs that the user has marked wishlist
     */
    setWishlist(wishlist){
        this.wishlist = wishlist;
        wishlist.forEach(element => {
            this.cuisines[element].isWishlist = true;
        });
    }

    /**
     * Add a cuisine to the list of favorite cuisines and update the cuisine isFavorite to true
     * @param {string} cusineId - Id of the cuisine to add to favorites
     */
    addFavorite(cusineId){
        this.favorites.push(cusineId);

        this.cuisines[cusineId].isFavorite = true;
    }

    /**
     * Remove a cuisine from the list of favorite cuisines and update the cuisine isFavorite to false
     * @param {string} cusineId - Id of the cuisine to remove from favorites
     */
    removeFavorite(cusineId){
        this.favorites = this.favorites.filter((item) => {
            return item !== cusineId
        });


        this.cuisines[cusineId].isFavorite = false;
    }

    /**
     * Add a cuisine to the list of tried cuisines and update the cuisine isTried to true
     * @param {string} cusineId - Id of the cuisine to add as tried
     */
    addTried(cusineId){
        this.tried.push(cusineId);

        this.cuisines[cusineId].isTried = true;
    }

    /**
     * Remove a cuisine frp, the list of tried cuisines and update the cuisine isFavorite to false
     * @param {string} cusineId - Id of the cuisine to remove from tried
     */
    removeTried(cusineId){
        this.tried = this.tried.filter((item) => {
            return item !== cusineId
        });

        this.cuisines[cusineId].isTried = false;
    }

    /**
     * Add a cuisine to the list of wishlist cuisines and update the cuisine isWishlist to true
     * @param {string} cusineId - Id of the cuisine to mark as wishlist
     */
    addWishlist(cusineId){
        this.wishlist.push(cusineId);

        this.cuisines[cusineId].isWishlist = true;
    }

    /**
     * Remove a cuisine from the list of wishlist cuisines and update the cuisine isWishlist to false
     * @param {string} cusineId - Id of the cuisine to remove from wishlist
     */
    removeWishlist(cusineId){
        this.wishlist = this.wishlist.filter((item) => {
            return item !== cusineId
        });

        this.cuisines[cusineId].isWishlist = false;
    }

    /**
     * Set the method that will be used to generate the cuisines. The list of cuisines that match the strategy will be used during option generation 
     * 
     * @param {string} strategy - the user selected strategy to generate cuisines.
     */
    setAvailableCuisines(strategy){
        switch(strategy){
            case 'all':
                this.availableCuisines = Object.keys(this.cuisines);
                break;
            case 'wishlist':
                this.availableCuisines = structuredClone(this.wishlist);
                break;
            case 'favorites':
                this.availableCuisines = structuredClone(this.favorites);
                break;
            case 'tried':
                this.availableCuisines = structuredClone(this.tried);
                break;
            case 'Asia':
                this.availableCuisines = structuredClone(this.continents['Asia']);
                break;
            case 'Africa':
                this.availableCuisines = structuredClone(this.continents['Africa']);
                break;
            case 'North America':
                this.availableCuisines = structuredClone(this.continents['North America']);
                break;
            case 'South America':
                this.availableCuisines = structuredClone(this.continents['South America']);
                break;
            case 'Europe':
                this.availableCuisines = structuredClone(this.continents['Europe']);
                break;
            case 'Oceania':
                this.availableCuisines = structuredClone(this.continents['Oceania']);
                break;
            case 'salty':
                this.availableCuisines = structuredClone(this.flavors['salty']);
                break;
            case 'sweet':
                this.availableCuisines = structuredClone(this.flavors['sweet']);
                break;
            case 'sour':
                this.availableCuisines = structuredClone(this.flavors['sour']);
                break;
            case 'spicy':
                this.availableCuisines = structuredClone(this.flavors['spicy']);
                break;
            case 'umani':
                this.availableCuisines = structuredClone(this.flavors['umani']);
                break;
            case 'mostFavorite':
                this.availableCuisines = structuredClone(this.mostFavorite);    
                break;
            case 'mostTried':
                this.availableCuisines = structuredClone(this.mostTried);    
                break;
            case 'mostWishlist':
                this.availableCuisines = structuredClone(this.mostWishlist);    
                break;     
            default:
                this.availableCuisines = [];
        }

        this.remaningCount = this.availableCuisines.length;
    }
    /**
     * Generate a random cuisine. After the cuisine is generated, the same cuisine will not be generated again
     * @returns {string} - A cuisineId from the set up strategy. If there are no more cuisines, empty string is returned
     */
    generateCuisine(){
        let cuisine = '';
        if(this.remaningCount >= 2){
            const index = Math.floor(Math.random() * this.remaningCount);
            cuisine = this.availableCuisines[index];
            this.availableCuisines = this.availableCuisines.filter((item) => {
                return  item !== cuisine
            });
            this.remaningCount = this.availableCuisines.length;

        }else if(this.remaningCount == 1){
            cuisine = this.availableCuisines[0];
            this.availableCuisines = [];
            this.remaningCount = 0;
        }

        return cuisine;
    }   

    /**
     * Get a cuisine object for the provided cuisine Id
     * @param {string} cuisineId - the id of the cuisine to fetch
     * @returns {{continent: string, country: string, description: string, isSalty: boolean, isSour: boolean, isSpicy: boolean, isSweet: boolean, isUmani: boolean}} - The cuisine object 
     */
    getCuisine(cuisineId){
        return this.cuisines[cuisineId];
    }
}