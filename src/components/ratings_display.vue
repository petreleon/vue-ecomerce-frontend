<template>
<div>
  <b-table striped hover :items="ratings" :fields="fields">
    <template #cell(user)="data">
        <a :href="'/#/user?ID='+data.item.user">{{ data.item.user }}</a>
    </template>
    <template #cell(product)="data">
        <a :href="'/#/product?ID='+data.item.product">{{ data.item.product }}</a>
    </template>
  </b-table>
</div>
</template>

<script>
export default {
  data:()=>{
    return {
      fields:["product", "user", "rating"]
    }
  },
  props:[
    'ratings'
  ]
}
</script>

<style>

</style>