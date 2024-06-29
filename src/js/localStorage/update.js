// Function to update data in custom local storage
export const updateStorage = (storageName, data) => {
    localStorage.setItem(storageName, JSON.stringify(data));
};