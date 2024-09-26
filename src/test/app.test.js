//import Cuisine from '../models/Cuisine';
import App from '../app';

let app;

const allCuisines = ['100', '120', '200', '230', '300', '340', '400', '450', '500', '510', '600'];
const favorites = ['100', '120'];
const wishlist = ['200', '230'];
const tried = ['300', '340'];

const asia = ['100', '120'];
const africa = ['200', '230'];
const northAmerica = ['300', '340'];
const southAmerica = ['400', '450'];
const europe = ['500', '510'];
const oceania = ['600'];

const salty = ['100', '120', '510', '600'];
const sour = ['120', '200', '230', '600'];
const spicy = ['230', '300', '340', '600'];
const sweet = ['340', '400', '450', '600'];
const umani = ['450', '500', '600'];

const mostFavorite = ['100', '120', '510', '600'];
const mostTried = ['230', '300', '340', '600'];
const mostWishlist = ['450', '500', '600'];

const remaining = ['120', '510', '600'];


beforeEach(() => {
const cuisines = {
    '100' : {continent: 'Asia', country: 'Asia1', description: 'Description', isSalty: true, isSour: false, isSpicy: false, isSweet: false, isUmani: false},
    '120' : {continent: 'Asia', country: 'Asia2', description: 'Description', isSalty: true, isSour: true, isSpicy: false, isSweet: false, isUmani: false},
    '200' : {continent: 'Africa', country: 'Africa1', description: 'Description', isSalty: false, isSour: true, isSpicy: false, isSweet: false, isUmani: false},
    '230' : {continent: 'Africa', country: 'Africa2', description: 'Description', isSalty: false, isSour: true, isSpicy: true, isSweet: false, isUmani: false},
    '300' : {continent: 'North America', country: 'North America 1', description: 'Description', isSalty: false, isSour: false, isSpicy: true, isSweet: false, isUmani: false},
    '340' : {continent: 'North America', country: 'North America 2', description: 'Description', isSalty: false, isSour: false, isSpicy: true, isSweet: true, isUmani: false},
    '400' : {continent: 'South America', country: 'South America 1', description: 'Description', isSalty: false, isSour: false, isSpicy: false, isSweet: true, isUmani: false},
    '450' : {continent: 'South America', country: 'South America 2', description: 'Description', isSalty: false, isSour: false, isSpicy: false, isSweet: true, isUmani: true},
    '500' : {continent: 'Europe', country: 'Europe1', description: 'Description', isSalty: false, isSour: false, isSpicy: false, isSweet: false, isUmani: true},
    '510' : {continent: 'Europe', country: 'Europe2', description: 'Description', isSalty: true, isSour: false, isSpicy: false, isSweet: false, isUmani: false},
    '600' : {continent: 'Oceania', country: 'Oceania 1', description: 'Description', isSalty: true, isSour: true, isSpicy: true, isSweet: true, isUmani: true}
};

const flavors = {};
flavors['salty'] =  salty;
flavors['sour'] = sour;
flavors['spicy'] = spicy;
flavors['sweet'] = sweet;
flavors['umani'] = umani;

const continents = {};
continents['Asia'] = asia;
continents['Africa'] = africa;
continents['North America'] = northAmerica;
continents['South America'] = southAmerica;
continents['Europe'] = europe;
continents['Oceania'] = oceania;

app = new App(cuisines, mostFavorite, mostTried, mostWishlist); 
app.init();
//app.cuisines = cuisines;
//app.flavors = flavors;
//app.continents = continents;

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

test('<HAPPY>[addFavorite] - Add a new cuisine to favorites', () => {
    app.addFavorite('100');
    expect(app.favorites).toEqual(['100']);
    expect(app.cuisines['100'].isFavorite).toBe(true);
});

test('<HAPPY>[removeFavorite] - Remove a favorite from favorites with multiple favorites', () => {
    app.setFavorites(mostFavorite);
    expect(app.favorites.sort()).toEqual(mostFavorite.sort());
    mostFavorite.forEach((item)=>{
        expect(app.cuisines[item].isFavorite).toBe(true);
    });

    app.removeFavorite('100');
    expect(app.favorites).toEqual(remaining.sort());
    expect(app.cuisines['100'].isFavorite).toBe(false);


});

test('<HAPPY>[removeFavorite] - Remove a favorite from favorites with one favorites', () => {
    app.addFavorite('100');
    expect(app.favorites).toEqual(['100']);
    app.removeFavorite('100');
    expect(app.favorites).toEqual([]);
    expect(app.cuisines['100'].isFavorite).toBe(false);
});

test('<HAPPY>[addTried] - Add a new cuisine to tried', () => {
    app.addTried('100');
    expect(app.tried).toEqual(['100']);
    expect(app.cuisines['100'].isTried).toBe(true);
});

test('<HAPPY>[removeTried] - Remove a tried cuisine from tried with multiple tried', () => {
    app.setTried(mostFavorite);
    expect(app.tried.sort()).toEqual(mostFavorite.sort());
    mostFavorite.forEach((item)=>{
        expect(app.cuisines[item].isTried).toBe(true);
    });

    app.removeTried('100');
    expect(app.tried).toEqual(remaining.sort());
    expect(app.cuisines['100'].isTried).toBe(false);

});

test('<HAPPY>[removeTried] - Remove a tried cuisine from tried with one tried', () => {
    app.addTried('100');
    expect(app.tried).toEqual(['100']);
    app.removeTried('100');
    expect(app.tried).toEqual([]);
    expect(app.cuisines['100'].isTried).toBe(false);

});

test('<HAPPY>[addWishlist] - Add a new cuisine to tried', () => {
    app.addWishlist('100');
    expect(app.wishlist).toEqual(['100']);
    expect(app.cuisines['100'].isWishlist).toBe(true);
});

test('<HAPPY>[removeWishlist] - Remove a wishlist cuisine from wishlist with multiple wishlist', () => {
    app.setWishlist(mostFavorite);
    expect(app.wishlist.sort()).toEqual(mostFavorite.sort());
    mostFavorite.forEach((item)=>{
        expect(app.cuisines[item].isWishlist).toBe(true);
    });

    app.removeWishlist('100');
    expect(app.wishlist).toEqual(remaining.sort());
    expect(app.cuisines['100'].isWishlist).toBe(false);
});

test('<HAPPY>[removeWishlist] - Remove a wishlist cuisine from wishlist with one wishlist', () => {
    app.addWishlist('100');
    expect(app.wishlist).toEqual(['100']);
    app.removeWishlist('100');
    expect(app.wishlist).toEqual([]);
    expect(app.cuisines['100'].isWishlist).toBe(false);
});


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
    app.setAvailableCuisines('Asia');

    expect(app.availableCuisines.sort()).toEqual(asia.sort());
    expect(app.remaningCount).toBe(asia.length);
});
test('<HAPPY>[setAvailableCuisines] - Set with africa', () => {
    app.setAvailableCuisines('Africa');

    expect(app.availableCuisines.sort()).toEqual(africa.sort());
    expect(app.remaningCount).toBe(africa.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with northAmerica', () => {
    app.setAvailableCuisines('North America');

    expect(app.availableCuisines.sort()).toEqual(northAmerica.sort());
    expect(app.remaningCount).toBe(northAmerica.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with southAmerica', () => {
    app.setAvailableCuisines('South America');

    expect(app.availableCuisines.sort()).toEqual(southAmerica.sort());
    expect(app.remaningCount).toBe(southAmerica.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with europe', () => {
    app.setAvailableCuisines('Europe');

    expect(app.availableCuisines.sort()).toEqual(europe.sort());
    expect(app.remaningCount).toBe(europe.length);
});

test('<HAPPY>[setAvailableCuisines] - Set with oceania', () => {
    app.setAvailableCuisines('Oceania');

    expect(app.availableCuisines.sort()).toEqual(oceania.sort());
    expect(app.remaningCount).toBe(oceania.length);
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
    app.addFavorite('100');
    app.setAvailableCuisines('favorites');

    expect(app.availableCuisines).toEqual(['100']);
    expect(app.remaningCount).toBe(1);

    expect(app.generateCuisine()).toBe('100');
    expect(app.availableCuisines).toEqual([]);
    expect(app.favorites).toEqual(['100']);    
    expect(app.remaningCount).toBe(0);

});

test('<HAPPY>[generateCuisne] - Get with all', () => {
    app.setAvailableCuisines('all');
    expect(app.availableCuisines.sort()).toEqual(allCuisines.sort());
    expect(app.remaningCount).toBe(allCuisines.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = allCuisines.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(allCuisines.length-1);    
});

test('<HAPPY>[generateCuisne] - Get with wishlist', () => {
    app.setWishlist(wishlist);
    app.setAvailableCuisines('wishlist');
    expect(app.availableCuisines.sort()).toEqual(wishlist.sort());
    expect(app.remaningCount).toBe(wishlist.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = wishlist.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(wishlist.length-1);
    expect(app.wishlist.length).toBe(wishlist.length);    

});

test('<HAPPY>[generateCuisne] - Get with favorites', () => {
    app.setFavorites(favorites);
    app.setAvailableCuisines('favorites');
    expect(app.availableCuisines.sort()).toEqual(favorites.sort());
    expect(app.remaningCount).toBe(favorites.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = favorites.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(favorites.length-1);
    expect(app.favorites.length).toBe(favorites.length);   
});

test('<HAPPY>[generateCuisne] - Get with tried', () => {
    app.setTried(tried);
    app.setAvailableCuisines('tried');
    expect(app.availableCuisines.sort()).toEqual(tried.sort());
    expect(app.remaningCount).toBe(tried.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = tried.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(tried.length-1); 
    expect(app.tried.length).toBe(tried.length);
});

test('<HAPPY>[generateCuisne] - Get with asia', () => {
    app.setAvailableCuisines('Asia');
    expect(app.availableCuisines.sort()).toEqual(asia.sort());
    expect(app.remaningCount).toBe(asia.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = asia.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(asia.length-1); 
    expect(app.continents['Asia'].length).toBe(asia.length);
});

test('<HAPPY>[generateCuisne] - Get with africa', () => {
    app.setAvailableCuisines('Africa');
    expect(app.availableCuisines.sort()).toEqual(africa.sort());
    expect(app.remaningCount).toBe(africa.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = africa.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(africa.length-1); 
    expect(app.continents['Africa'].length).toBe(africa.length);
});

test('<HAPPY>[generateCuisne] - Get with northAmerica', () => {
    app.setAvailableCuisines('North America');
    expect(app.availableCuisines.sort()).toEqual(northAmerica.sort());
    expect(app.remaningCount).toBe(northAmerica.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = northAmerica.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(northAmerica.length-1); 
    expect(app.continents['North America'].length).toBe(northAmerica.length);
});

test('<HAPPY>[generateCuisne] - Get with southAmerica', () => {
    app.setAvailableCuisines('South America');
    expect(app.availableCuisines.sort()).toEqual(southAmerica.sort());
    expect(app.remaningCount).toBe(southAmerica.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = southAmerica.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(southAmerica.length-1); 
    expect(app.continents['South America'].length).toBe(southAmerica.length);
});

test('<HAPPY>[generateCuisne] - Get with europe', () => {
    app.setAvailableCuisines('Europe');
    expect(app.availableCuisines.sort()).toEqual(europe.sort());
    expect(app.remaningCount).toBe(europe.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = europe.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(europe.length-1); 
    expect(app.continents['Europe'].length).toBe(europe.length);
});

test('<HAPPY>[generateCuisne] - Get with oceania', () => {
    app.setAvailableCuisines('Oceania');
    expect(app.availableCuisines.sort()).toEqual(oceania.sort());
    expect(app.remaningCount).toBe(oceania.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = oceania.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(oceania.length-1); 
    expect(app.continents['Oceania'].length).toBe(oceania.length);
});

test('<HAPPY>[generateCuisne] - Get with salty', () => {
    app.setAvailableCuisines('salty');
    expect(app.availableCuisines.sort()).toEqual(salty.sort());
    expect(app.remaningCount).toBe(salty.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = salty.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(salty.length-1); 
    expect(app.flavors['salty'].length).toBe(salty.length);
});

test('<HAPPY>[generateCuisne] - Get with sweet', () => {
    app.setAvailableCuisines('sweet');
    expect(app.availableCuisines.sort()).toEqual(sweet.sort());
    expect(app.remaningCount).toBe(sweet.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = sweet.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(sweet.length-1); 
    expect(app.flavors['sweet'].length).toBe(sweet.length);
});

test('<HAPPY>[generateCuisne] - Get with sour', () => {
    app.setAvailableCuisines('sour');
    expect(app.availableCuisines.sort()).toEqual(sour.sort());
    expect(app.remaningCount).toBe(sour.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = sour.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(sour.length-1); 
    expect(app.flavors['sour'].length).toBe(sour.length);
});

test('<HAPPY>[generateCuisne] - Get with spicy', () => {
    app.setAvailableCuisines('spicy');
    expect(app.availableCuisines.sort()).toEqual(spicy.sort());
    expect(app.remaningCount).toBe(spicy.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = spicy.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(spicy.length-1); 
    expect(app.flavors['spicy'].length).toBe(spicy.length);
});

test('<HAPPY>[generateCuisne] - Get with umani', () => {
    app.setAvailableCuisines('umani');
    expect(app.availableCuisines.sort()).toEqual(umani.sort());
    expect(app.remaningCount).toBe(umani.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = umani.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(umani.length-1); 
    expect(app.flavors['umani'].length).toBe(umani.length);
});

test('<HAPPY>[generateCuisne] - Get with mostFavorite', () => {
    app.setAvailableCuisines('mostFavorite');
    expect(app.availableCuisines.sort()).toEqual(mostFavorite.sort());
    expect(app.remaningCount).toBe(mostFavorite.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = mostFavorite.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(mostFavorite.length-1); 
    expect(app.mostFavorite.length).toBe(mostFavorite.length);
});

test('<HAPPY>[generateCuisne] - Get with mostTried', () => {
    app.setAvailableCuisines('mostTried');
    expect(app.availableCuisines.sort()).toEqual(mostTried.sort());
    expect(app.remaningCount).toBe(mostTried.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = mostTried.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(mostTried.length-1); 
    expect(app.mostTried.length).toBe(mostTried.length);
});

test('<HAPPY>[generateCuisne] - Get with mostWishlist', () => {
    app.setAvailableCuisines('mostWishlist');
    expect(app.availableCuisines.sort()).toEqual(mostWishlist.sort());
    expect(app.remaningCount).toBe(mostWishlist.length);

    const generatedCuisine = app.generateCuisine();
    const isIn = mostWishlist.includes(generatedCuisine);
    expect(isIn).toBe(true);
    expect(app.remaningCount).toBe(mostWishlist.length-1); 
    expect(app.mostWishlist.length).toBe(mostWishlist.length);
});