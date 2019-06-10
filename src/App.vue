<template>
  <div id="app">
    <div id="nav">
      <div class="red-bar">
        <h1>SUPERHEROES</h1>
        <!-- -->
        <router-link to="/">Home</router-link> |
        <router-link to="/builder">builder</router-link> | 
        <router-link to="/power">power</router-link> | 
        <router-link to="/contact">contact</router-link> |
        <router-link to="/profile">profile</router-link>
        <!-- -->
      </div>
        <span id="login">Login</span>
    </div>
    <router-view/>
  </div>
</template>


<style lang="scss">
@import '@/sass/main.scss';
</style>
