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
        favorites.forEach((countryCode) => this.cuisines[countryCode].isFavorite = true);
    }

    setTried(tried){
        this.tried = tried;
        tried.forEach((countryCode) => this.cuisines[countryCode].isTried = true);
    }

    setWishlist(wishlist){
        this.wishlist = wishlist;
        wishlist.forEach((countryCode) => this.cuisines[countryCode].isWishlist = true);
    }

    addFavorite(countryCode){
        this.favorites.push(countryCode);
        this.cuisines[countryCode].isFavorite = true;
    }

    removeFavorite(countryCode){
        this.favorites = this.favorites.filter((item) => {
            return item !== countryCode
        });
        this.cuisines[countryCode].isFavorite = false;
    }


    addTried(countryCode){
        this.tried.push(countryCode);
        this.cuisines[countryCode].isTried = true;
    }

    removeTried(countryCode){
        this.tried = this.tried.filter((item) => {
            return item !== countryCode
        });

        this.cuisines[countryCode].isTried = false;
    }

    addWishlist(countryCode){
        this.wishlist.push(countryCode);
        this.cuisines[countryCode].isWishlist = true;
    }

    removeWishlist(countryCode){
        this.wishlist = this.wishlist.filter((item) => {
            return item !== countryCode
        });

        this.cuisines[countryCode].isWishlist = false;
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

    getCuisine(cuisineId){
        return this.cuisines[cuisineId];
    }

}