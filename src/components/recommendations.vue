<template>
<div>
<ol>
  <li v-for="product in recommendations" :key="product"><a :href="'/#/product?ID='+product">{{product}}</a></li>
</ol>
<br/>
{{recommendations}}
</div>
</template>

<script>
export default {
  props:[
    'recommendations'
  ]
}
</script>

<style>

</style>