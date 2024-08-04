
import request from "./request";

const baseUrl = 'http://localhost:3030/data/favorites';

const like = async (pecipeId) => {
  const result = await request.post(baseUrl, { pecipeId});
  return result;

}

const isLiked = async (pecipeId) => {
    const params = new URLSearchParams({
        where: `pecipeId="${pecipeId}"`
    });

    const result = await request.get(`${baseUrl}?${params.toString()}`);

    return result;
}

const favoritesAPI = {
    like,
    isLiked
}

export default favoritesAPI