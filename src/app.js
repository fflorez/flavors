export default class App {
    constructor(cuisines, flavors, continents, mostFavorite, mostTried, mostWishlist) {
        this.cuisines = cuisines;
        this.flavors = flavors;
        this.continents = continents;
        this.favorites = [];
        this.tried = [];
        this.wishlist = [];
        this.availableCuisines = [];
        this.mostFavorite = mostFavorite;
        this.mostTried = mostTried;
        this.mostWishlist = mostWishlist;
        this.remaningCount = 0;
    }

    setFavorites(favorites){
        this.favorites = favorites;
        favorites.forEach((cuisineId) => this.cuisines[cuisineId].isFavorite = true);
    }

    setTried(tried){
        this.tried = tried;
        tried.forEach((cuisineId) => this.cuisines[cuisineId].isTried = true);
    }

    setWishlist(wishlist){
        this.wishlist = wishlist;
        wishlist.forEach((cuisineId) => this.cuisines[cuisineId].isWishlist = true);
    }

    addFavorite(cuisineId){
        this.favorites.push(cuisineId);
        this.cuisines[cuisineId].isFavorite = true;
    }

    removeFavorite(cuisineId){
        const index = this.favorites.indexOf(cuisineId);
        this.favorites.splice(index, index);
    }


    addTried(cuisineId){
        this.tried.push(cuisineId);
        this.cuisines[cuisineId].isTried = true;
    }

    removeTried(cuisineId){
        const index = this.tried.indexOf(cuisineId);
        this.tried.splice(index, index);
    }

    addWishlist(cuisineId){
        this.wishlist.push(cuisineId);
        this.cuisines[cuisineId].isWishlist = true;
    }

    removeWishlist(cuisineId){
        const index = this.wishlist.indexOf(cuisineId);
        this.wishlist.splice(index, index);
    }

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
            case 'asia':
                this.availableCuisines = structuredClone(this.continents['asia']);
                break;
            case 'africa':
                this.availableCuisines = structuredClone(this.continents['africa']);
                break;
            case 'northAmerica':
                this.availableCuisines = structuredClone(this.continents['northAmerica']);
                break;
            case 'southAmerica':
                this.availableCuisines = structuredClone(this.continents['southAmerica']);
                break;
            case 'europe':
                this.availableCuisines = structuredClone(this.continents['europe']);
                break;
            case 'australia':
                this.availableCuisines = structuredClone(this.continents['australia']);
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

    generateCuisine(){
        let cuisine = '';
        if(this.remaningCount >= 2){
            const index = Math.floor(Math.random() * this.remaningCount);
            cuisine = this.availableCuisines[index];
            this.availableCuisines.splice(index, index);

        }else if(this.remaningCount == 1){
            cuisine = this.availableCuisines[0];
            this.availableCuisines = [];
            this.remaningCount = 0;
        }

        return cuisine;
    }

    getCuisine(cuisineId){
        return this.cuisines[cuisineId];
    }

}