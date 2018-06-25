const USER_API_URL = 'http://localhost:8080/api/user';
const PROFILE_API_URL = 'http://localhost:8080/api/profile';
const CUSTOMER_API_URL = 'http://localhost:8080/api/customer';
const SELLER_API_URL = 'http://localhost:8080/api/seller';
const DELIVERY_API_URL = 'http://localhost:8080/api/delivery';

let _singleton = Symbol();
class UserService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new UserService(_singleton);
        return this[_singleton]
    }

    findAllUser() {

    }

    deleteUser(customerId) {

    }

    createUser(customer) {

    }

    populateProfile() {
        return fetch(PROFILE_API_URL)
            .then(function(response) {
                if (response.status === 409) {
                    return null;
                } else {
                    return response.json();
                }
            });
    }

    // updateUser(username, user) {
    //     return fetch(USER_API_URL + '/' + username, {
    //         body: JSON.stringify(user),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         method: 'PUT'
    //     }).then(function (response) {
    //         return response.json();
    //     })
    // }

    updateUser(userId, user) {
        return fetch(USER_API_URL + '/' + userId, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(function (response) {
            return response.json();
        })
    }

    createUser(userType, user) {
        return fetch(USER_API_URL + '/' + userType, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function(response) {
            return response.json();
        })
    }

    findUserByUsername(username) {
        return fetch(
            USER_API_URL + '/' + username
        ).then(function (response) {
            return response.json();
        });
    }

    findRecipesByCustomer(userId) {
        return fetch(
            CUSTOMER_API_URL + '/' + userId + '/recipe')
            .then(function (response) {
                    return response.json();
                }
            )
    }

    findProductsBySeller(userId) {
        return fetch(
            SELLER_API_URL + '/' + userId + '/product'
        ).then(function (response) {
            return response.json();
        })
    }

    findOrdersByCustomer(userId) {
        return fetch(
            CUSTOMER_API_URL + '/' + userId + '/order'
        ).then(function (response) {
            return response.json();
        })
    }

    findOrdersByDelivery(userId) {
        return fetch(
            DELIVERY_API_URL + '/' + userId + '/order'
        ).then(function (response) {
            return response.json();
        })
    }

}

export default UserService;