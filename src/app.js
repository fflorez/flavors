export default class App {
    constructor(mostFavorite, mostTried, mostWishlist) {
        this.cuisines = {
            'AFG' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ALB' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'DZA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'AND' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'AGO' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ATG' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ARG' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ARM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'AUS' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'AUT' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'AZE' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BHS' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BHR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BGD' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BRB' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BLR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BEL' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BLZ' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BEN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BTN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BOL' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BIH' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BWA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BRA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'VGB' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BGR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BFA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'BDI' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'CRI' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'CPV' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'KHM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'CMR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'CAN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'CAF' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'TCD' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'CHL' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'CHN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'COL' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'COM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'COG' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'CRI' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'HRV' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'CUB' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'CYP' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'CZE' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'COD' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'DNK' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'DJI' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'DMA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'DOM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ECU' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'EGY' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SLV' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'GNQ' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ERI' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'EST' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SWZ' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ETH' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'FJI' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'FIN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'FRA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'GAB' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'GMB' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'GEO' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'DEU' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'GHA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'GRC' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'GRD' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'GTM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'GIN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'GNB' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'GUY' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'HTI' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'VAT' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'HND' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'HUN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ISL' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'IND' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'IDN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'IRN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'IRQ' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'IRL' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ISR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ITA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'JAM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'JPN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'JOR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'KAZ' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'KEN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'KIR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'KWT' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'KGZ' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'LAO' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'LVA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'LBN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'LSO' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'LBR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'LBY' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'LIE' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'LTU' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'LUX' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MDG' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MWI' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MYS' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MDV' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MLI' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MLT' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MHL' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MRT' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MUS' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MEX' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'FSM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'FSM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MCO' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MNG' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MNE' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MAR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MOZ' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MMR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'NAM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'NRU' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'NPL' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'NLD' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'NZL' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'NIC' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'NER' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'NGA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'NFK' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'MKD' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'NOR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'OMN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'PAK' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'PLW' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'PSE' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'PAN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'PNG' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'PRY' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'PER' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'PHL' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'POL' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'PRT' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'QAT' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ROU' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'RUS' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'RWA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'KNA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'LCA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'VCT' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'WSM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SMR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'STP' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SAU' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SEN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SRB' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SYC' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SLE' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SGP' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SVK' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SVN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SLB' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SOM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ZAF' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SGS' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SSD' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ESP' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'LKA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SDN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SUR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SWE' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'CHE' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'SYR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'TJK' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'TZA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'THA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'TLS' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'TGO' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'TON' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'TTO' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'TUN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'TUR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'TKM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'TUV' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'UGA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'UKR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ARE' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'GBR' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'USA' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'URY' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'UZB' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'VUT' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'VEN' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'VNM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'YEM' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ZMB' :  {isFavorite: false, isTried: false, isWishlist : false} ,
            'ZWE' :  {isFavorite: false, isTried: false, isWishlist : false}
        };
        this.flavors = {
            'salty' : [],
            'sour' : [],
            'spicy' : [],
            'sweet' : [],
            'umani' : []
        };
        this.continents = {
            'africa': ['DZA', 'AGO', 'BEN', 'BWA', 'BFA', 'BDI', 'CPV', 'CMR', 'CAF', 'TCD', 'COM', 'COG', 'COD', 'DJI', 'EGY', 'GNQ', 'ERI', 'SWZ', 'ETH', 'GAB', 'GMB', 'GHA', 'GIN', 'GNB', 'KEN', 'LSO', 'LBR', 'LBY', 'MDG', 'MWI', 'MLI', 'MRT', 'MUS', 'MAR', 'MOZ', 'NAM', 'NER', 'NGA', 'RWA', 'STP', 'SEN', 'SYC', 'SLE', 'SOM', 'ZAF', 'SSD', 'SDN', 'TGO', 'TUN', 'UGA', 'ZMB', 'ZWE'],
            'asia' : ['AFG', 'ARM', 'AZE', 'BHR', 'BGD', 'BTN', 'BOL', 'KHM', 'CHN', 'CYP', 'GEO', 'IND', 'IDN', 'IRN', 'IRQ', 'ISR', 'JPN', 'JOR', 'KAZ', 'KWT', 'KGZ', 'LAO', 'LBN', 'MYS', 'MDV', 'MNG', 'MMR', 'NPL', 'OMN', 'PAK', 'PHL', 'QAT', 'SAU', 'SGP', 'LKA', 'TJK', 'TZA', 'THA', 'TLS', 'TUR', 'TKM', 'ARE', 'GBR', 'UZB', 'VNM', 'YEM'],
            'northAmerica' : ['ATG', 'BHS', 'BRB', 'BLZ', 'VGB', 'CRI', 'CAN', 'CRI', 'CUB', 'DMA', 'DOM', 'SLV', 'GRD', 'GTM', 'HTI', 'HND', 'JAM', 'MEX', 'FSM', 'NIC', 'PAN', 'KNA', 'LCA', 'VCT', 'TTO', 'USA'],
            'southAmerica' : ['ARG', 'BRA', 'CHL', 'COL', 'ECU', 'GUY', 'PRY', 'PER', 'SGS', 'SUR', 'URY'],
            'europe' : ['ALB', 'AND', 'AUT', 'BLR', 'BEL', 'BIH', 'BGR', 'HRV', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'VAT', 'HUN', 'ISL', 'IRL', 'ITA', 'LVA', 'LIE', 'LTU', 'LUX', 'MLT', 'MCO', 'MNE', 'NLD', 'MKD', 'NOR', 'POL', 'PRT', 'ROU', 'RUS', 'SMR', 'SRB', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'SYR', 'UKR'],
            'oceania' : ['AUS', 'FJI', 'KIR', 'MHL', 'FSM', 'NRU', 'NZL', 'NFK', 'PLW', 'PSE', 'PNG', 'WSM', 'SLB', 'TON', 'TUV', 'VUT', 'VEN']
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

    setFavorites(favorites){
        this.favorites = favorites;
        favorites.forEach(element => {
            this.cuisines[element].isFavorite = true;
        });
    }

    setTried(tried){
        this.tried = tried;
        tried.forEach(element => {
            this.cuisines[element].isTried = true;
        });
    }

    setWishlist(wishlist){
        this.wishlist = wishlist;
        wishlist.forEach(element => {
            this.cuisines[element].isWishlist = true;
        });
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
            case 'oceania':
                this.availableCuisines = structuredClone(this.continents['oceania']);
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
}