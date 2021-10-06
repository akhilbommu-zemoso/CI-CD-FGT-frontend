const TOKEN_KEY = 'user';
export const login = (data, accessToken) => {

    return new Promise((resolve, reject) => {
        localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
        localStorage.setItem("accessToken", accessToken);
        resolve();
    })
}
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("accessToken");
}
export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
    return false;
}