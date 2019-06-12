<template>
  <main class="home">
    <section class="home-page-content-1">
      <div class="home-page-content-text">
        <h1>Build your own superman!</h1>
        <p>Create your ultimate super hero with a fun name, look, powers and more!</p>
      </div>
      <div>
      <router-link to="/builder">
        <a class="btn">
          Start
        </a>
      </router-link>
      </div>
    </section>
    <section class="home-page-content-2">
        <div class="a">
          <img src="../assets/img/1.png" alt="?">
        </div>
        <div class="b">
          <img src="../assets/img/1.png" alt="?">
        </div>
        <div class="c">
          <img src="../assets/img/1.png" alt="?">
        </div>
    </section>
  </main>
</template>

<script>

export default {
  name: 'home',
  components: {}
}
</script>