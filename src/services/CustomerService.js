import React from 'react'

const LIKE_API_URL = 'http://localhost:8080/api/customer/like/recipe';
const UNLIKE_API_URL = 'http://localhost:8080/api/customer/CID/recipe/RID';
const FIND_ALL_GROCERIES = 'http://localhost:8080/api/groceries';

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
            method: 'post',
            credentials: 'same-origin'
        });
    }

    unlikeRecipe(userId, recipeId) {
        return fetch (UNLIKE_API_URL.replace('CID', userId).replace('RID', recipeId), {
            body: JSON.stringify(userId, recipeId),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
    }

    findAllGroceries() {
        return fetch(FIND_ALL_GROCERIES)
            .then(function (response) {
            return response.json();
        });
    }
}
export default CustomerService;