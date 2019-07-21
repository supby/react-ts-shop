const handleResponse = async (response) => {
    const data = await response.json();

    if (!response.ok) {
        if ([401, 403].indexOf(response.status) !== -1) {            
            logout();
            location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }

    return data;
}

const login = async (username:string, password:string) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    const resp = await fetch(`login`, requestOptions);
    const user = await handleResponse(resp);

    localStorage.setItem('currentUser', JSON.stringify(user));

    return user;
}

const logout = () => {
    localStorage.removeItem('currentUser');
}

export default { login, logout }