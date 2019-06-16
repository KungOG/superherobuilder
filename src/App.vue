<template>
  <div id="app">
    <div id="nav">
      <Slide id="slide">
        <div class="my-superheroes">
          <span>My superheroes</span>
          <img src="@/assets/img/user.png" alt="superheroes" />
        </div>
        <router-link to="/profile">
          <span class="heroProfile">
            - {{ name.charAt(0).toUpperCase() + name.slice(1) }}
          </span>
        </router-link>
        <router-link to="/contact">Contact</router-link> 
      </Slide>
        <p id="login-mobile">Login</p>
        <router-link to="/">
          <h1 class="red-bar">SUPERHEROES</h1>
        </router-link>
        <p id="login">Login</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  name: 'app',
  components : {
    Slide
  },
  computed: {
    name() {
        return this.$store.getters.name
    },
  methods: {
    googleLogin() {
        alert('You have signed in with Google!');
    }
  }
  },
}
</script>


<style lang="scss">
@import '@/sass/main.scss';

</style>
