export default class LocalStorageService {
    constructor() {

    }

    getCuisine(cuisineId){
        let cuisine = {};
        let storedCuisine = localStorage.getItem(cuisineId);

        if(storedCuisine != null){
            cuisine = JSON.parse(storedCuisine);
        }

        return cuisine;
    }

    setCuisine(cuisine){
        localStorage.setItem(cuisine.id, JSON.stringify(cuisine));
    }

    validateData(dataVersion){
        let storedDataVersion = localStorage.getItem('dataVersion');

        if(storedDataVersion != null && storedDataVersion != dataVersion.toSring()){
            localStorage.clear();
        }

    }

    setDataVersion(dataVersion){
        localStorage.setItem('dataVersion', dataVersion.toSring());
    }


}