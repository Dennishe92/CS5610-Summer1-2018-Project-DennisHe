import React from 'react'

const YUMMLY_URL = 'http://api.yummly.com/v1/api/recipes?_app_id=a0d23074' +
    '&_app_key=f12a9990ff4909c04c80d5ed84a0e6b6&q=searchInput&requirePictures=true';
const YUMMLY_URL_FIND_BY_ID = 'http://api.yummly.com/v1/api/recipe/RID?_app_id=a0d23074' +
    '&_app_key=f12a9990ff4909c04c80d5ed84a0e6b6';

let _singleton = Symbol();
class YummlyService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new YummlyService(_singleton);
        return this[_singleton]
    }

    findRecipe(recipeName) {
        return fetch (YUMMLY_URL.replace('searchInput', encodeURIComponent(recipeName)))
            .then(function(response) {
                return response.json();})
            .then(function(data){
                return data.matches.slice(0,12)
            });
    }

    findRecipeById(recipeId) {
        return fetch (YUMMLY_URL_FIND_BY_ID.replace('RID', recipeId))
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
            return data;
        })
    }


}
export default YummlyService;