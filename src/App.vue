<template>
  <div id="app">
    <div id="nav">
        <span>
      <p id="login">Login</p>
        </span>
      <div class="red-bar">
        <h1>SUPERHEROS</h1>
              <!-- -->
            <router-link to="/">Home</router-link> |
      <router-link to="/builder">builder</router-link> | 
      <router-link to="/power">power</router-link> | 
      <router-link to="/contact">contact</router-link> |
      <router-link to="/profile">profile</router-link>
      <!-- -->
      </div>
    </div>
    <router-view/>
  </div>
</template>


<style lang="scss">
@import '@/sass/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  width: 100%;
  height: 5rem;
  max-width: 800px;
  h1 {
 
    font-weight: bold;
    font-size: 2rem;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
