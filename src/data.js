export const API_KEY = 'AIzaSyC_oKnA_RwOt7e8Q8yBgr6dAddfyWUTn7g';

export const valueConvertor = (value) => {

    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if ( value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value
    }

}