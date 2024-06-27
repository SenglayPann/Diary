// Function to retrieve custom local storage name
export const retrieveStorage = (storageName) => {
    return JSON.parse(localStorage.getItem(storageName)) || {};
}