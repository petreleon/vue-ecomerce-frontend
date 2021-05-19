<template>
<div>
  <p>product ID {{$route.query.ID}}</p>
  <recommendations :recommendations="list_of_recommendations"/>
  <ratingsDisplay :ratings="list_of_ratings"/>
</div>
</template>

<script>
import recommendation from '../services/recommendation'
import ratings from '../services/ratings'
import recommendations from './recommendations.vue'
import ratingsDisplay from './ratings_display.vue'
export default {
  components: { recommendations, ratingsDisplay },
    name:'product',
    data:function (){
      return{
        list_of_ratings:[],
        list_of_recommendations:[]
      }
    },
    methods: {
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
      }
    },
    mounted: function(){
      this.fill(this.$route.query.ID)
    },
    watch: {
      $route (to){
        this.fill(to.query.ID)
      }
    }
}
</script>

<style>

</style>