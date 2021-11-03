export const TOKEN_KEY = "@trainee_front_end-Token";
export const USER_ID = "user_id";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const getUserId = () => sessionStorage.getItem(USER_ID);
export const login = (token, user_id) => {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(USER_ID, user_id);
};
export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_ID);
};
