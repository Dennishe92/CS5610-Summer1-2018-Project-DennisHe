const USER_API_URL = 'http://localhost:8080/api/user';
const USER_API_LOGIN = 'http://localhost:8080/api/login';
const USER_API_LOGOUT = 'http://localhost:8080/api/logout';
const PROFILE_API_URL = 'http://localhost:8080/api/profile';
const CUSTOMER_API_URL = 'http://localhost:8080/api/customer';
const SELLER_API_URL = 'http://localhost:8080/api/seller';
const DELIVERY_API_URL = 'http://localhost:8080/api/delivery';
const CHECKLOGIN_API_URL = 'http://localhost:8080/api/checklogin';
const ORDER_API_URL = 'http://localhost:8080/api/order';
const FIND_ALL_SELLERS_API_URL = 'http://localhost:8080/api/seller';
const FOLLOW_SELLER_API_URL = 'http://localhost:8080/api/customer/follow/seller';
const CURRENT_USER_API_URL = 'http://localhost:8080/api/user/current'

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

    deleteUser(customerId) {

    }

    findAllOrders() {
        return fetch(ORDER_API_URL)
            .then(function(response) {
                return response.json();
            })
    }

    findAllRecipes() {
        return fetch('http://localhost:8080/api/recipe')
            .then(function(response) {
                return response.json();
            })
    }

    findAllProducts() {
        return fetch('http://localhost:8080/api/product')
            .then(function(response) {
                return response.json();
            })
    }


    login(user) {
        return fetch(USER_API_LOGIN, {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            if (response.status === 409 || response.status === 500) {
                return null;
            } else {
                return response.json();
            }
        })
    }

    logout() {
        return fetch(USER_API_LOGOUT, {
            method: 'post',
            credentials: 'same-origin'
        }).then(function(response) {
            if (response.status === 409 || response.status === 500) {
                return null;
            } else {
                alert("log out unsuccessful")
            }
        })
    }

    populateProfile() {
        return fetch(PROFILE_API_URL, {
            method: 'get',
            credentials: 'same-origin'
        }).then(function(response) {
            if (response.status === 409) {
                return null;
            } else {
                return response.json();
            }
        });
    }

    updateUser(userId, user) {
        return fetch(PROFILE_API_URL + '/' + userId, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            credentials: 'same-origin'
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
            method: 'POST',
            credentials: 'same-origin'
        }).then(function(response) {
            if (response. status === 409 || response.status === 500) {
                return null
            } else {
                return response.json();
            }
        })
    }

    findUserById(userId) {
        return fetch(USER_API_URL + '/' + userId, {
            credentials: 'same-origin'
        })
            .then(function (response) {
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

    findCurrentUser() {
        return fetch(CURRENT_USER_API_URL)
            .then(function(response) {
                if (response.status === 409 || response.status === 500) {
                    return null;
                } else {
                    return response.json();
                }
            })
    }

    checkLogin() {
        return fetch(CHECKLOGIN_API_URL)
            .then(function (response) {
                console.log(response);
                return response;
            })
    }

    findAllSellers() {
        return fetch(FIND_ALL_SELLERS_API_URL)
            .then(function(response){
                return response.json();
            });
    }

    followSeller(sellerId) {
        return fetch (FOLLOW_SELLER_API_URL + '/' + sellerId, {
            body: JSON.stringify(sellerId),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            credentials: 'same-origin'
        });
    }
}
export default UserService;