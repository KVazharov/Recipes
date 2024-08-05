
import request from "./request";

const baseUrl = 'http://localhost:3030/data/favorites';

const like = async (pecipeId) => {
    const result = await request.post(baseUrl, { pecipeId });
    return result;

}

const disLike = async (likesId) => {
    // console.log("API", likesId);
    const result = await request.del(`${baseUrl}/${likesId}`);
}

const isLiked = async (recipeId) => {
    const params = new URLSearchParams({
        where: `pecipeId="${recipeId}"`
    });

    const result = await request.get(`${baseUrl}?${params.toString()}`);

    return result;
}

export const getLike = async (recipeId, userId) => {
    const params = new URLSearchParams({
        where: `pecipeId="${recipeId}"`,
        // load: `_ownerId="${userId}":users`
    });

    const result = await request.get(`${baseUrl}?${params.toString()}`);

    return result;
}

const favoritesAPI = {
    like,
    isLiked,
    disLike,
    getLike
}

export default favoritesAPI