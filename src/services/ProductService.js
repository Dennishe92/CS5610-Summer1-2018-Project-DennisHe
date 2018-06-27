const PRODUCT_API_URL = 'http://localhost:8080/api/products';

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
}
export default ProductService;