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
        <b-button v-if="name.login === ''" v-b-modal.modal-prevent-closing>Login</b-button>
        <b-button v-if="name.login !== ''" v-on:click="logout">Logout</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-link to="/product">Product</router-link>
  <router-link to="/user">User</router-link>
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
  <router-view></router-view>
  <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="nameModal"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
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
      nameModal: '',
      nameState: null
    }
  },
  methods: {
    checkFormValidity(){
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.nameModal = ''
      this.nameState = null
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Login as name
      this.loginAs(this.nameModal)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    logout(){
      Login.logout()
    },
    loginAs(name){
      Login.loginAs(name)
    }
  }
}
</script>

<style>

</style>
