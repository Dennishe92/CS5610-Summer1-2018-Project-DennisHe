import React from 'react'



let _singleton = Symbol();
class LikeService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LikeService(_singleton);
        return this[_singleton]
    }







}