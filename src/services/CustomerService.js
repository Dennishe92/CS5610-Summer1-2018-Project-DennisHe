import React from 'react'

const LIKE_API_URL = 'http://localhost:8080/api/customer/like/recipe';

let _singleton = Symbol();
class CustomerService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CustomerService(_singleton);
        return this[_singleton]
    }

    likeRecipe(recipeId) {
        return fetch (LIKE_API_URL + '/' + recipeId, {
            body: JSON.stringify(recipeId),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'post'
        });
    }


}
export default CustomerService;