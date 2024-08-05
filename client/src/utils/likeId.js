export default function likedId (data, userId) {
    const result = data.filter(like => like._ownerId == userId);
    return result[0]._id;
    
}