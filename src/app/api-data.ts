// Id приложения (API_ID, app_id client_id)
export const API_ID = '';

// Защищенный ключ (secret_key, client_secret)
export const SECRET_KEY = '';

// Права доступа
export const friendsAccess = 2;
export const wallAccess = 8192;

// Id пользователя
export const USER_ID = 0;

export const getAccessTokenUrl = `https://oauth.vk.com/authorize?client_id=${API_ID}&display=mobile&redirect_uri=http://vk.com/&scope=${friendsAccess + wallAccess}&response_type=token&v=5.74&state=123456`

export const ACCESS_TOKEN = '';

