import Cuisine from '../models/Cuisine';
import App from '../app';

let app;

const allCuisines = ['111111', '121111', '222222', '232222', '333333', '343333', '444444', '454444', '555555', '515555', '666666'];
const favorites = ['111111', '121111'];
const wishlist = ['222222', '232222'];
const tried = ['333333', '343333'];

const asia = ['111111', '121111'];
const africa = ['222222', '232222'];
const northAmerica = ['333333', '343333'];
const southAmerica = ['444444', '454444'];
const europe = ['555555', '515555'];
const australia = ['666666'];

const salty = ['111111', '121111', '515555', '666666const'];
const sour = ['121111', '222222', '232222', '666666'];
const spicy = ['232222', '333333', '343333', '666666'];
const sweet = ['343333', '444444', '454444', '666666'];
const umani = ['454444', '555555', '666666'];

const mostFavorite = ['111111', '121111', '515555', '666666'];
const mostTried = ['232222', '333333', '343333', '666666'];
const mostWishlist = ['454444', '555555', '666666'];


beforeEach(() => {
//Id, Country, Continent, Description, isSalty, isSour, isSpicy, isSweet, isUmani
const cuisines = {};
cuisines['111111'] = new Cuisine('111111', 'Country1', 'spicy', 'Temp Description', true, false, false, false, false);
cuisines['121111'] = new Cuisine('121111', 'Country12', 'spicy', 'Temp Description', true, true, false, false, false);
cuisines['222222'] = new Cuisine('222222', 'Country2', 'Africa', 'Temp Description', false, true, false, false, false);
cuisines['232222'] = new Cuisine('232222', 'Country23', 'Africa', 'Temp Description', false, true, true, false, false);
cuisines['333333'] = new Cuisine('333333', 'Country3', 'North America', 'Temp Description', false, false, true, false, false);
cuisines['343333'] = new Cuisine('343333', 'Country34', 'North America', 'Temp Description', false, false, true, true, false);
cuisines['444444'] = new Cuisine('444444', 'Country4', 'South America', 'Temp Description', false, false, false, true, false);
cuisines['454444'] = new Cuisine('454444', 'Country45', 'South America', 'Temp Description', false, false, false, true, true);
cuisines['555555'] = new Cuisine('555555', 'Country5', 'Europe', 'Temp Description', false, false, false, false, true);
cuisines['515555'] = new Cuisine('515555', 'Country51', 'Europe', 'Temp Description', true, false, false, false, true);
cuisines['666666'] = new Cuisine('666666', 'Country6', 'Australia', 'Temp Description', true, true, true, true, true);

const flavors = {};
flavors['salty'] =  salty;
flavors['sour'] = sour;
flavors['spicy'] = spicy;
flavors['sweet'] = sweet;
flavors['umani'] = umani;

const continents = {};
continents['asia'] = asia;
continents['africa'] = africa;
continents['northAmerica'] = northAmerica;
continents['southAmerica'] = southAmerica;
continents['europe'] = europe;
continents['australia'] = australia;

app = new App(cuisines, flavors, continents, mostFavorite, mostTried, mostWishlist); 

});


test('<HAPPY>[setFavorites] - Set with list with values', () => {
    app.setFavorites(favorites);
    expect(app.favorites.sort()).toEqual(favorites.sort());
    favorites.forEach((cuisine)=> expect(app.cuisines[cuisine].isFavorite).toBe(true));

    for (const [cuisineId, cuisineObj] of Object.entries(app.cuisines)) {
        if(!favorites.includes(cuisineId)){
            expect(cuisineObj.isFavorite).toBe(false);
        }
        
    }
});

test('<ANOMALY>[setFavorites] - Set favorite with empty list', () => {
    app.setFavorites([]);
    expect(app.favorites).toEqual([]);

    for (const [key, value] of Object.entries(app.cuisines)) {
        expect(app.cuisines[key].isFavorite).toBe(false);
    }
});

test('<HAPPY>[setTried] - Set tried with values', () => {
    app.setTried(tried);
    expect(app.tried.sort()).toEqual(tried.sort());
    tried.forEach((cuisine)=> expect(app.cuisines[cuisine].isTried).toBe(true));

    for (const [cuisineId, cuisineObj] of Object.entries(app.cuisines)) {
        if(!tried.includes(cuisineId)){
            expect(cuisineObj.isTried).toBe(false);
        }
        
    }
});

test('<ANOMALY>[setTried] - Set tried with empty list', () => {
    app.setTried([]);
    expect(app.tried).toEqual([]);

    for (const [key, value] of Object.entries(app.cuisines)) {
        expect(app.cuisines[key].isTried).toBe(false);
    }
});

test('<HAPPY>[setWishlist] - Set wishlist with list with values', () => {
    app.setWishlist(wishlist);
    expect(app.wishlist.sort()).toEqual(wishlist.sort());
    wishlist.forEach((cuisine)=> expect(app.cuisines[cuisine].isWishlist).toBe(true));

    for (const [cuisineId, cuisineObj] of Object.entries(app.cuisines)) {
        if(!wishlist.includes(cuisineId)){
            expect(cuisineObj.isWishlist).toBe(false);
        }
        
    }
});

test('<ANOMALY>[setWishlist] - Set wishlist with empty list', () => {
    app.setWishlist([]);
    expect(app.wishlist).toEqual([]);

    for (const [key, value] of Object.entries(app.cuisines)) {
        expect(app.cuisines[key].isWishlist).toBe(false);
    }
});

test('<HAPPY>[addFavorite] - Add a new cuisine to favorites', () => {});
test('<HAPPY>[removeFavorite] - Remove a favorite from favorites with multiple favorites', () => {});
test('<HAPPY>[removeFavorite] - Remove a favorite from favorites with one favorites', () => {});
test('<HAPPY>[addTried] - Add a new cuisine to tried', () => {});
test('<HAPPY>[removeTried] - Remove a tried cuisine from tried with multiple tried', () => {});
test('<HAPPY>[removeTried] - Remove a tried cuisine from tried with one tried', () => {});
test('<HAPPY>[addWishlist] - Add a new cuisine to tried', () => {});
test('<HAPPY>[removeWishlist] - Remove a wishlist cuisine from wishlist with multiple wishlist', () => {});
test('<HAPPY>[removeWishlist] - Remove a wishlist cuisine from wishlist with one wishlist', () => {});


test('<ANOMALY>[setAvailableCuisines] - Set with invalid strategy', () => {
    app.setAvailableCuisines('invalid');
    expect(app.availableCuisines).toEqual([]);
    expect(app.remaningCount).toBe(0);
});

test('<HAPPY>[setAvailableCuisines] - Set with all', () => {
    app.setAvailableCuisines('all');

    expect(app.availableCuisines.sort()).toEqual(allCuisines.sort());
    expect(app.remaningCount).toBe(allCuisines.length);
});


test('<HAPPY>[setAvailableCuisines] - Set with wishlist', () => {
    app.setWishlist(wishlist);
    app.setAvailableCuisines('wishlist');

    expect(app.availableCuisines.sort()).toEqual(wishlist.sort());
    expect(app.remaningCount).toBe(wishlist.length);
});


test('<HAPPY>[setAvailableCuisines] - Set with favorites', () => {
    app.setFavorites(favorites);
    app.setAvailableCuisines('favorites');

    expect(app.availableCuisines.sort()).toEqual(favorites.sort());
    expect(app.remaningCount).toBe(favorites.length);
});
test('<HAPPY>[setAvailableCuisines] - Set with tried', () => {
    app.setTried(tried);
    app.setAvailableCuisines('tried');

    expect(app.availableCuisines.sort()).toEqual(tried.sort());
    expect(app.remaningCount).toBe(tried.length);
});
test('<HAPPY>[setAvailableCuisines] - Set with asia', () => {
    app.setAvailableCuisines('asia');

    expect(app.availableCuisines.sort()).toEqual(asia.sort());
    expect(app.remaningCount).toBe(asia.length);
});
test('<HAPPY>[setAvailableCuisines] - Set with africa', () => {
    app.setAvailableCuisines('africa');

    expect(app.availableCuisines.sort()).toEqual(africa.sort());
    expect(app.remaningCount).toBe(africa.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with northAmerica', () => {
    app.setAvailableCuisines('northAmerica');

    expect(app.availableCuisines.sort()).toEqual(northAmerica.sort());
    expect(app.remaningCount).toBe(northAmerica.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with southAmerica', () => {
    app.setAvailableCuisines('southAmerica');

    expect(app.availableCuisines.sort()).toEqual(southAmerica.sort());
    expect(app.remaningCount).toBe(southAmerica.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with europe', () => {
    app.setAvailableCuisines('europe');

    expect(app.availableCuisines.sort()).toEqual(europe.sort());
    expect(app.remaningCount).toBe(europe.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with australia', () => {
    app.setAvailableCuisines('australia');

    expect(app.availableCuisines.sort()).toEqual(australia.sort());
    expect(app.remaningCount).toBe(australia.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with salty', () => {
    app.setAvailableCuisines('salty');

    expect(app.availableCuisines.sort()).toEqual(salty.sort());
    expect(app.remaningCount).toBe(salty.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with sweet', () => {
    app.setAvailableCuisines('sweet');

    expect(app.availableCuisines.sort()).toEqual(sweet.sort());
    expect(app.remaningCount).toBe(sweet.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with sour', () => {
    app.setAvailableCuisines('sour');

    expect(app.availableCuisines.sort()).toEqual(sour.sort());
    expect(app.remaningCount).toBe(sour.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with spicy', () => {
    app.setAvailableCuisines('spicy');

    expect(app.availableCuisines.sort()).toEqual(spicy.sort());
    expect(app.remaningCount).toBe(spicy.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with umani', () => {
    app.setAvailableCuisines('umani');

    expect(app.availableCuisines.sort()).toEqual(umani.sort());
    expect(app.remaningCount).toBe(umani.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with mostFavorite', () => {
    app.setAvailableCuisines('mostFavorite');

    expect(app.availableCuisines.sort()).toEqual(mostFavorite.sort());
    expect(app.remaningCount).toBe(mostFavorite.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with mostTried', () => {
    app.setAvailableCuisines('mostTried');

    expect(app.availableCuisines.sort()).toEqual(mostTried.sort());
    expect(app.remaningCount).toBe(mostTried.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with mostWishlist', () => {
    app.setAvailableCuisines('mostWishlist');

    expect(app.availableCuisines.sort()).toEqual(mostWishlist.sort());
    expect(app.remaningCount).toBe(mostWishlist.length);
});

test('<ANOMALY>[generateCuisne] - Empty available cuisines', () => {
    expect(app.generateCuisine()).toBe('');    
});

test('<HAPPY>[generateCuisne] - One available cuisine', () => {
    app.addFavorite('111111');
    app.setAvailableCuisines('favorites');

    expect(app.availableCuisines).toEqual(['111111']);
    expect(app.remaningCount).toBe(1);

    expect(app.generateCuisine()).toBe('111111');
    expect(app.favorites).toEqual(['111111']);    
    expect(app.remaningCount).toBe(0);

});

test('<HAPPY>[generateCuisne] - Get with all', () => {

});

test('<HAPPY>[generateCuisne] - Get with wishlist', () => {

});

test('<HAPPY>[generateCuisne] - Get with favorites', () => {

});

test('<HAPPY>[generateCuisne] - Get with tried', () => {

});

test('<HAPPY>[generateCuisne] - Get with asia', () => {

});

test('<HAPPY>[generateCuisne] - Get with africa', () => {

});

test('<HAPPY>[generateCuisne] - Get with northAmerica', () => {

});

test('<HAPPY>[generateCuisne] - Get with southAmerica', () => {

});

test('<HAPPY>[generateCuisne] - Get with europe', () => {

});

test('<HAPPY>[generateCuisne] - Get with australia', () => {

});

test('<HAPPY>[generateCuisne] - Get with salty', () => {

});

test('<HAPPY>[generateCuisne] - Get with sweet', () => {

});

test('<HAPPY>[generateCuisne] - Get with sour', () => {

});

test('<HAPPY>[generateCuisne] - Get with spicy', () => {

});

test('<HAPPY>[generateCuisne] - Get with umani', () => {

});

test('<HAPPY>[generateCuisne] - Get with mostFavorite', () => {

});

test('<HAPPY>[generateCuisne] - Get with mostTried', () => {

});

test('<HAPPY>[generateCuisne] - Get with mostWishlist', () => {

});

test('<HAPPY>[getCuisine] - Get with valid cuisine ID', () => {

});

test('<ANOMALY>[getCuisine] - Get with invalid cuisine ID', () => {

});
