import request from "./request";

const baseUrl = 'http://localhost:3030/data/recipes'

export const addRecipie = async (values) => {

    const response = await request.post(baseUrl, values);

    return response;
}

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
}

export const getOne = async (recipieId) => {
    const result = await request.get(`${baseUrl}/${recipieId}`);
    return result;
}
export const update = async (recipeId, data) => {
    await request.put(`${baseUrl}/${recipeId}`, data)
}

export const getLatest = async () => {

    const urlSearchParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: 3,
    });
    const urlParams = urlSearchParams.toString().replace('+', '%20')

    const result = await request.get(`${baseUrl}?${urlParams}`);

    const latestRecipes = Object.values(result);

    return latestRecipes;
}

const recipesAPI = {
    addRecipie,
    getAll,
    getOne,
    getLatest,
    update,
}

export default recipesAPI