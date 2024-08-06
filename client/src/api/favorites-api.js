import request from "./request";

const baseUrl = 'http://localhost:3030/data/favorites';

const like = async (recipeId) => {
    const result = await request.post(baseUrl, { recipeId });
    return result;

}

const disLike = async (likesId) => {

    const result = await request.del(`${baseUrl}/${likesId}`);
}

const isLiked = async (recipeId) => {
    const params = new URLSearchParams({
        where: `recipeId="${recipeId}"`
    });

    const result = await request.get(`${baseUrl}?${params.toString()}`);

    return result;
}

export const getLike = async (recipeId, userId) => {
    const params = new URLSearchParams({
        where: `recipeId="${recipeId}"`
    });

    const result = await request.get(`${baseUrl}?${params.toString()}`);

    return result;
}

export const favorites = async (userId) => {
    const params = new URLSearchParams({
        where: `_ownerId="${userId}"`
    })
    const result = await request.get(`${baseUrl}?${params.toString()}`);

    return result;
}

const favoritesAPI = {
    like,
    isLiked,
    disLike,
    getLike,
    favorites

}

export default favoritesAPI;