import request from "./request";

const baseUrl = 'http://localhost:3030/data/recipes'

export const addRecipie = async (values) => {

    const response = await request.post(baseUrl, values);
}

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
}

export const getOne = async (recipieId) => {
    const result = await request.get(`${baseUrl}/${recipieId}`);
    return result;
}

const recipesAPI = {
    addRecipie,
    getAll,
    getOne
}

export default recipesAPI