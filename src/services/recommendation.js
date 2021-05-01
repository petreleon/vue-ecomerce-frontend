import axios from 'axios'
import CONSTANTS from '../constants'
export default new class recommendation {
    getRecommendationForProduct(product){
        return axios.get(CONSTANTS.RECOMMENDATION,  { params: { command: "getRecommendationRelatedToSpecifiedProduct", product:product } })
    }
    getRecommendationForUser(user){
        return axios.get(CONSTANTS.RECOMMENDATION,  { params: { command: "getRecommendationRelatedToSpecifiedUser", user:user } })
    }
}