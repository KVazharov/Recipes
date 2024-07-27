import request from "./request";

const baseUrl = 'http://localhost:3030/data/pecipes'
export default  async function addRecipie(values) {

    const response = await request.post(baseUrl, values);

    console.log(response);
}

