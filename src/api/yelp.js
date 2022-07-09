import axios from "axios";

export default axios.create({

    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'BearerWVdN59eqWKdsolzU7xrc2ZkOWzDjyxXDwjuYLGPCzzhx3hFOGzSPKKYrUH_Hdlr75RWUpfIU_Mw2nCl3iwzlkIy3anda0NUH4Ou7N8sDMqksfq4ER6o5DPxRUqbHYnYx'
    }
});