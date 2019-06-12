<template>
    <main>
        <div class="home-page-content-1">
            <div>
                <h2>Super Hero Name:</h2>
            </div>
        <input type="text">
        <img v-if="headImg == 1" src="@/assets/img/h1.png" alt="Head image">
        <img v-if="headImg == 2" src="@/assets/img/h2.png" alt="Head image">
        <img v-if="headImg == 3" src="@/assets/img/h3.png" alt="Head image">
        <img v-if="bodyImg == 1" src="@/assets/img/b1.png" alt="Body image">
        <img v-if="bodyImg == 2" src="@/assets/img/b2.png" alt="Body image">
        <img v-if="bodyImg == 3" src="@/assets/img/b3.png" alt="Body image">
        <img v-if="legImg == 1" src="@/assets/img/l1.png" alt="Leg image">
        <img v-if="legImg == 2" src="@/assets/img/l2.png" alt="Leg image">
        <img v-if="legImg == 3" src="@/assets/img/l3.png" alt="Leg image">
        </div>
            <a class="selector">&#60;</a>
        <div class="content-1">
            <h2>The Slizzer</h2>
            <div class="pros">
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <hr>
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="cons">
                <h3>Lorem</h3>
                <p>Voluptatum non dolor tempora eligendi nemo ab! Numquam.</p>
            </div>
            <a class="btn">
                <router-link to="/profile">Done</router-link>
            </a>
        </div>
            <a class="selector">&gt;</a>
    </main>
</template>

<script>
export default {
    name: 'power',

    computed: {
        headImg() {
            return this.$store.getters.getHeadNumber
        },
        bodyImg() {
            return this.$store.getters.getBodyNumber
        },
        legImg() {
            return this.$store.getters.getLegNumber
        }
    }
}
</script>