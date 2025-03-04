async function request(method, url, data) {

    const options = {};
    const token = localStorage.getItem('accessToken');

    if (method != 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            'Content-Type': 'application/json'
        };
        options.body = JSON.stringify(data)
    }
    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};

    }
    const result = await response.json();

    if (!response.ok) {
        throw response;
    }
    return result;
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del
};
// export const get = (url, data) => requester('GET', url, data)