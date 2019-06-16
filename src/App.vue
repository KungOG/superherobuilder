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
        <a @click="googleLogin()" id="login-mobile">{{ login }}</a>
        <router-link to="/">
          <h1 class="red-bar">SUPERHEROES</h1>
        </router-link>
        <a @click="googleLogin()" id="login">{{ login }}</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  name: 'app',
  data() {
    return {
      login: 'Login'
    }
  },
  components : {
    Slide
  },
  computed: {
    name() {
        return this.$store.getters.name
    },
  },
  methods: {
    googleLogin() {
      if (this.login != 'Logout') {
        alert('You have signed in with Google!');
        this.login = 'Logout';
      } else {
        alert('You have logged out. May the force be with you.');
        this.login = 'Login';
      }
    }
  }
}
</script>


<style lang="scss">
@import '@/sass/main.scss';

</style>
