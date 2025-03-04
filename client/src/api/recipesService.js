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
    await request.put(`${baseUrl}/${recipeId}`, data);
}

const remove = async (id) => {

    await request.del(`${baseUrl}/${id}`)
}

export const getByCategory = async (category) => {

    const params = new URLSearchParams({
        where: `category="${category}"`,
    })
    const result = await request.get(`${baseUrl}?${params.toString()}`);

    return result;

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

const summerCocktails = async () => {
    const params = new URLSearchParams({
        where: `category="cocktails"`,
        pageSize: 3
    });

    const result = await request.get(`${baseUrl}?${params.toString()}`);

    return result;
}



const recipesAPI = {
    addRecipie,
    getAll,
    getOne,
    getLatest,
    update,
    remove,
    getByCategory,
    summerCocktails
}

export default recipesAPI