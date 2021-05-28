<template>
<div>
  <p>product ID {{$route.query.ID}}</p>
  <p v-if="isLoggedIn">Logged In as {{login.login}}</p>
  <p v-if="isLoggedIn && $route.query.ID !== undefined">
    <b-form-rating show-clear v-model="rating_user" v-on:change="(event)=>{change(event)}" ></b-form-rating>
  </p>
  <recommendations :recommendations="list_of_recommendations"/>
  <ratingsDisplay :ratings="list_of_ratings"/>
</div>
</template>

<script>
import Login from '../services/login'
import recommendation from '../services/recommendation'
import ratings from '../services/ratings'
import recommendations from './recommendations.vue'
import ratingsDisplay from './ratings_display.vue'
export default {
  components: { recommendations, ratingsDisplay },
    name:'product',
    data:function (){
      return {
        list_of_ratings:[],
        list_of_recommendations:[],
        login:Login,
        rating_user:null,
        waiting:false,
        source_of_change:"internal"
      }
    },
    computed:{
      isLoggedIn(){
        return Login.isLoggedIn()
      }
    },
    methods: {
      change: function(event){
        console.log(this.source_of_change)
        if (this.source_of_change === "external"){
          return;
        }
        console.log(event)
        this.rating_user = event
        if(event === null){
          ratings.deleteARating(this.login.login, this.$route.query.ID).then(data => {
            console.log(data)
            this.fill(this.$route.query.ID)
          })
        }
        if(event !== null){
          ratings.createOrModifyRating({"user":this.login.login, "product":this.$route.query.ID, "rating":event}).then(data => {
            console.log(data)
            this.fill(this.$route.query.ID)
          })
        }
      },
      fill : function(ID){
        if(ID !== undefined){
          recommendation.getRecommendationForProduct(ID).then(
            data => {
              this.list_of_recommendations = data.data.response
            }
          )
          ratings.getRatingsFromProduct(ID).then(
            data => {
              this.list_of_ratings = data.data
            }
          )
        }
        else {
          this.list_of_recommendations = []
          this.list_of_ratings = []
        }
      },
      product_as_logged: function(login, product){
        if(login !== "" && product !== undefined){
          this.source_of_change = "external"
          ratings.getARating(login, product).then(
            data => {
              if (data.data !== null){
                this.rating_user = data.data.rating
                console.log(data)
              }
              else {
                this.rating_user = null
              }
            }
          ).finally(()=>{
            this.source_of_change = "internal"
          })
          console.log(login)
        }else{
          this.rating_user = null
        }
      }
    },
    mounted: function(){
      this.fill(this.$route.query.ID)
    },
    watch: {
      $route (to){
        this.fill(to.query.ID)
        this.product_as_logged(this.login.login, to.query.ID)
      },
      "login.login": {
        handler(to){
          this.product_as_logged(to, this.$route.query.ID)
        },
        deep: true
      } 
    }
}
</script>

<style>

</style>