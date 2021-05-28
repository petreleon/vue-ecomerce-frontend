import axios from 'axios'
import CONSTANTS from '../constants'
export default new class recommendation {
    getRatingsFromProduct(product){
        return axios.get(CONSTANTS.RATING,  { params: { product:product } })
    }
    getRatingsFromUser(user){
        return axios.get(CONSTANTS.RATING,  { params: { user:user } })
    }
    getARating(user, product){
        return axios.get(CONSTANTS.RATING,  { params: { product:product, user:user } })
    }
    createOrModifyRating(rating){
        return axios.post(CONSTANTS.RATING, rating)
    }
    deleteRatingsByProduct(product){
        return axios.delete(CONSTANTS.RATING,  { params: { product:product } })
    }
    deleteRatingsByUser(user){
        return axios.delete(CONSTANTS.RATING,  { params: { user:user } })
    }
    deleteARating(user, product){
        return axios.delete(CONSTANTS.RATING,  { params: { product:product, user:user } })
    }
}