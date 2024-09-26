export default class UtilityService {
    constructor() {

    }

    /**
     * Return True if object passed is not empty
     * 
     * @param {Object} obj - The object to check 
     * @returns {boolean} - If the object obtained is empty or not
     */
    static isNotEmptyObject(obj){
        if (obj === undefined || obj === null){
            return false;
        }
        
        return Object.keys(obj).length > 0
    }

}