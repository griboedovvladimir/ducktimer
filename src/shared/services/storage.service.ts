import { STORAGE_CONSTANTS } from '../../CONSTANTS';

export const storageService = {
    setTokenToLocalStorage,
    setTokenToSessionStorage,
    getTokenFromLocalStorage,
    getTokenFromSessionStorage,
    removeTokenFromLocalStorage,
    removeTokenFromSessionStorage,
    setThemeToSessionStorage,
    getThemeFromLocalStorage,
};

function setTokenToLocalStorage(token: string) {
    localStorage.setItem(STORAGE_CONSTANTS.SET_TOKEN, token);
}

function setTokenToSessionStorage(token: string) {
    sessionStorage.setItem(STORAGE_CONSTANTS.SET_TOKEN, token);
}

function getTokenFromLocalStorage(): string | null {
   return localStorage.getItem(STORAGE_CONSTANTS.SET_TOKEN) ;
}

function getTokenFromSessionStorage(): string | null {
   return sessionStorage.getItem(STORAGE_CONSTANTS.SET_TOKEN);
}

function removeTokenFromLocalStorage() {
    localStorage.removeItem(STORAGE_CONSTANTS.SET_TOKEN);
}

function removeTokenFromSessionStorage() {
    sessionStorage.removeItem(STORAGE_CONSTANTS.SET_TOKEN);
}

function setThemeToSessionStorage(theme: string) {
    sessionStorage.setItem(STORAGE_CONSTANTS.SET_THEME, theme);
}

function getThemeFromLocalStorage(): string | null {
    return sessionStorage.getItem(STORAGE_CONSTANTS.SET_THEME) ;
}