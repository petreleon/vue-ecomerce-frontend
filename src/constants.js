export default new class CONSTANTS {
    constructor(){
        this.API = "http://127.0.0.1:5000"
        this.RECOMMENDATION = this.API + "/recommendations"
        this.RATING = this.API + "/rating"
    }
}