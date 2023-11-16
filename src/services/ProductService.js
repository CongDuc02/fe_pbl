import axios from "axios"
// import { axiosJWT } from "./UserService"


export const getAllProduct = async () => {
    
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`)
    // let res = {}
    // if (search?.length > 0) {
    //     res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all?filter=name&filter=${search}&limit=${limit}`)
    // } else {
    //     res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all?limit=${limit}`)
    // }
    return res.data
}


