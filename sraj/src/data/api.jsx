import axios from 'axios'

function ProductData() {
    const products = axios.get("https://fakestoreapiserver.reactbd.com/products")
    return products
}

export default ProductData;