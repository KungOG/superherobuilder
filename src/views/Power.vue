<template>
    <main>
        <div class="home-page-content-1" id="power-page">
            <div class="content-header">
                <h2>Super Name:</h2>
                <input v-model="name" >
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

        <a @click="decPowers()" class="selector">&#60;</a>

        <div class="content-1">
            <div>
            <a @click="decPowers()" class="selector-mobile">&#60;</a>
                <h1 v-show="powerCount == 1">The Sizzler</h1>
                <h1 v-show="powerCount == 2">The Fizzler</h1>
                <h1 v-show="powerCount == 3">The Dizzler</h1>
            <a @click="incPowers()" class="selector-mobile">&gt;</a>
            </div>
            <div class="pros">
                <h2 v-show="powerCount == 1">Magic</h2>
                <h2 v-show="powerCount == 2">Invisibility</h2>
                <h2 v-show="powerCount == 3">Time travel</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit sollicitudin magna id consectetur. 
                   Praesent ornare nunc eget odio dignissim, id ullamcorper nulla lobortis.</p>
                <hr>
                <h2 v-show="powerCount == 1">Flying</h2>
                <h2 v-show="powerCount == 2">Mind reading</h2>
                <h2 v-show="powerCount == 3">Speed</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit sollicitudin magna id consectetur. 
                   Praesent ornare nunc eget odio dignissim, id ullamcorper nulla lobortis.</p>
            </div>
            <div class="cons">
                <h2 v-show="powerCount == 1">Sleepy</h2>
                <h2 v-show="powerCount == 2">Yawning</h2>
                <h2 v-show="powerCount == 3">Dizzy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit sollicitudin magna id consectetur. 
                   Praesent ornare nunc eget odio dignissim, id ullamcorper nulla lobortis.</p>
            </div>
            <router-link to="/profile" >
                <a class="btn" @click="makeSomeMagic()">
                    Done
                </a>
            </router-link>
        </div>

        <a @click="incPowers()" class="selector">&gt;</a>
        <router-link to="/profile">
            <a class="btn-tablet">
                Done
            </a>
        </router-link>
    </main>
</template>

<script>
export default {
    name: 'power',
    data(){
        return {
            name:"",
            powerCount: 1
        }
    },

    methods: {
        incPowers() {
            if(this.powerCount > 0) {
                this.powerCount++;
                if (this.powerCount > 3) {
                    this.powerCount = 1;
                }
            }
        },
        decPowers() {
            if(this.powerCount <= 3) {
                this.powerCount--;
                if (this.powerCount == 0) {
                    this.powerCount = 3;
                }
            }
        },
        makeSomeMagic(){
            this.$store.commit('setName', this.name);
        }
    },

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