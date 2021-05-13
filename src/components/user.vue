<template>
<div>
  <p>user ID {{$route.query.ID === undefined}}</p>
  <p>{{list_of_recommendations}}</p>
  <p>{{list_of_ratings}}</p>
</div>
</template>

<script>
import recommendation from '../services/recommendation'
import ratings from '../services/ratings'
export default {
    name:'user',
    data:function (){
      return{
        list_of_ratings:[],
        list_of_recommendations:[]
      }
    },
    methods: {
      fill : function(ID){
        if(ID !== undefined){
          recommendation.getRecommendationForUser(ID).then(
            data => {
              this.list_of_recommendations = data.data.response
            }
          )
          ratings.getRatingsFromUser(ID).then(
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