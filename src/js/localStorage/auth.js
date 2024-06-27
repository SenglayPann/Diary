export const Auth = JSON.parse(localStorage.getItem('currentAuth')) || {
    loggedIn: false,
    userName: null
};