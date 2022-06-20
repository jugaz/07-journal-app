import axios from 'axios'

const authApi = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key:'AIzaSyD1Z3gqQYBd-_kgnscWnEyGlt8bv3XY7ww'
    }
})

export default authApi