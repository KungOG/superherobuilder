<template>
    <main class="content">
        <section class="headline">
            <h1>Your Superheroes</h1>
        </section>
        <section class="home-page-content-2">
            <div class="a">
                <img src="../assets/img/1.png" alt="?">
            </div>
            <div v-if="this.$store.state.femaleOrMale == 'm'" class="b active">
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
            <div v-else-if="this.$store.state.femaleOrMale == 'f'" class="b active">
            <img v-if="headImg == 1" src="@/assets/img/fh1.png" alt="Head image">
            <img v-if="headImg == 2" src="@/assets/img/fh2.png" alt="Head image">
            <img v-if="headImg == 3" src="@/assets/img/fh3.png" alt="Head image">
            <img v-if="bodyImg == 1" src="@/assets/img/fb1.png" alt="Body image">
            <img v-if="bodyImg == 2" src="@/assets/img/fb2.png" alt="Body image">
            <img v-if="bodyImg == 3" src="@/assets/img/fb3.png" alt="Body image">
            <img v-if="legImg == 1" src="@/assets/img/fl1.png" alt="Leg image">
            <img v-if="legImg == 2" src="@/assets/img/fl2.png" alt="Leg image">
            <img v-if="legImg == 3" src="@/assets/img/fl3.png" alt="Leg image">
            </div>
            <div class="c">
                <img src="../assets/img/1.png" alt="?">
            </div>
        </section>
        <section class="middle-content">
            <h3 class="showcast">{{ name }}</h3>
        </section>
        <section class="profile-btns">
            <a href="#" class="download-btn" @click="downloadBtn">download</a>
            <a href="#" class="edit-btn" @click="editBtn">edit</a>
            <a href="#" class="delete-btn" @click="deleteBtn">delete</a>
    </section>
    </main>
</template>

<script>
export default {
    name: 'profile',
    computed: {
        name() {
            return this.$store.getters.name
        },        
        headImg() {
            return this.$store.getters.getHeadNumber
        },
        bodyImg() {
            return this.$store.getters.getBodyNumber
        },
        legImg() {
            return this.$store.getters.getLegNumber
        }
    },
    methods: {
        downloadBtn (name) {
            alert('You just downloaded' + ' '+ this.name.toUpperCase() + '!');
        },
        editBtn () {
            this.$router.push('/builder');
        },
        deleteBtn (name) {
            alert('You just deleted' + ' '+ this.name.toUpperCase() + '!');
            this.$router.push('/');
            setTimeout(() => {
                window.location.reload(false);
            })
        }
    }
    
}
</script>