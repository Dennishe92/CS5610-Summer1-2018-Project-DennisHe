const PRODUCT_API_URL = 'http://localhost:8080/api/products';
const ADDPRODUCT_API_URL = 'http://localhost:8080/api/seller/SID/product'
const DELETEPRODUCT_API_URL = 'http://localhost:8080/api/seller/SID/product/PID'

let _singleton = Symbol();
class ProductService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ProductService(_singleton);
        return this[_singleton]
    }

    findAllGroceries() {
        return fetch(PRODUCT_API_URL)
            .then(function(response){
                return response.json();
            });
    }

    createProduct(sellerId, product) {
        return fetch(ADDPRODUCT_API_URL.replace('SID', sellerId), {
            body: JSON.stringify(sellerId, product),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function(response) {
            return response.json();
        });
    }

    deleteProduct(sellerId, productId) {
        return fetch(DELETEPRODUCT_API_URL.replace('SID', sellerId).replace('PID', productId), {
            body: JSON.stringify(sellerId, productId),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
    }
}
export default ProductService;