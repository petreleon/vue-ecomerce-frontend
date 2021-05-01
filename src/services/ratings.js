import axios from 'axios'
import CONSTANTS from '../constants'
export default new class recommendation {
    getRatingsFromProduct(product){
        return axios.get(CONSTANTS.RATING,  { params: { product:product } })
    }
    getRatingsFromUser(user){
        return axios.get(CONSTANTS.RATING,  { params: { user:user } })
    }
    getARating(user){
        return axios.get(CONSTANTS.RATING,  { params: { product:product, user:user } })
    }
}