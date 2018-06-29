const ORDER_API_URL = 'http://localhost:8080/api/order';

let _singleton = Symbol();
class OrderService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new OrderService(_singleton);
        return this[_singleton]
    }

    createOrder(order) {
        return fetch(ORDER_API_URL , {
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
    }

    deleteOrder(orderId) {
        return fetch(ORDER_API_URL + '/' + orderId, {
            body: JSON.stringify(orderId),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
    }


}
export default OrderService;