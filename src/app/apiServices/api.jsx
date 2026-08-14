import axios from "axios"

const getProducts = () => {
    return axios.get("https://fakestoreapi.com/products")
        .then((res) => res?.data)
}

const getProdDetail = (id) => {
     return axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res?.data)
}
export {getProducts, getProdDetail}