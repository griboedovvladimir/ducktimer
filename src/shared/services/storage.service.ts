import { STORAGE_CONSTANTS } from '../../CONSTANTS';

export const storageService = {
    setTokenToLocalStorage,
    setTokenToSessionStorage,
    getTokenFromLocalStorage,
    getTokenFromSessionStoragng,
    removeTokenFromLocalStorage,
    removeTokenFromSessionStoragng
};

function setTokenToLocalStorage(token: string) {
    localStorage.setItem(STORAGE_CONSTANTS.SET_TOKEN, token);
}

function setTokenToSessionStorage(token: string) {
    sessionStorage.setItem(STORAGE_CONSTANTS.SET_TOKEN, token);
}

function getTokenFromLocalStorage() {
    localStorage.getItem(STORAGE_CONSTANTS.SET_TOKEN);
}

function getTokenFromSessionStoragng() {
    sessionStorage.getItem(STORAGE_CONSTANTS.SET_TOKEN);
}

function removeTokenFromLocalStorage() {
    localStorage.removeItem(STORAGE_CONSTANTS.SET_TOKEN);
}

function removeTokenFromSessionStoragng() {
    sessionStorage.removeItem(STORAGE_CONSTANTS.SET_TOKEN);
}