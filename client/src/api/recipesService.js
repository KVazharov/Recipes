import request from "./request";

const baseUrl = 'http://localhost:3030/data/recipes'

export const addRecipie = async (values) => {

    const response = await request.post(baseUrl, values);
}

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
}

const recipesAPI = {
    addRecipie,
    getAll
}

export default recipesAPI