<template>
    <main>
        <div class="home-page-content-1" id="power-page">
            <div class="content-header">
                <h2>Super Name:</h2>
                <input type="text">
            </div>

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
            <h1>The Sizzler</h1>
            <div class="pros">
                <h2>Magic</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit sollicitudin magna id consectetur. 
                   Praesent ornare nunc eget odio dignissim, id ullamcorper nulla lobortis.</p>
                <hr>
                <h2>Flying</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit sollicitudin magna id consectetur. 
                   Praesent ornare nunc eget odio dignissim, id ullamcorper nulla lobortis.</p>
            </div>
            <div class="cons">
                <h2>Sleepy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit sollicitudin magna id consectetur. 
                   Praesent ornare nunc eget odio dignissim, id ullamcorper nulla lobortis.</p>
            </div>
            <router-link to="/profile">
                <a class="btn">
                    Done
                </a>
            </router-link>
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