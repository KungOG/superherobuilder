<template>
  <div id="app">
    <div id="nav">
      <Slide id="slide">
        <router-link to="/">Home</router-link>
        <router-link to="/builder">Builder</router-link>
        <router-link to="/power">Power</router-link> 
        <router-link to="/contact">Contact</router-link> 
        <router-link to="/profile">Profile</router-link>
      </Slide>
        <h1 class="red-bar">SUPERHEROES</h1>
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
  }
}
</script>


<style lang="scss">
@import '@/sass/main.scss';
</style>
