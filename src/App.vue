<template>
<div>
   <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Ecomerce platform</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/product">Product</b-nav-item>
        <b-nav-item href="#/user">User</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-button v-b-modal.login-modal>Sign Out</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-button v-b-modal.login-modal>Launch demo modal</b-button>
  <router-link to="/product">Product</router-link>
  <router-link to="/user">User</router-link>
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
  <router-view></router-view>
  <b-modal id="login-modal" title="Login">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
  
</div>
</template>

<script>
import Login from './services/login'
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      name: Login,
      nameState: null
    }
  }
}
</script>

<style>

</style>
