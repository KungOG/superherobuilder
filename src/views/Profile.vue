<template>
    <main class="content">
        <section class="headline">
            <h1>Your Superheroes</h1>
        </section>
        <section class="home-page-content-2">
            <div class="a">
                <img src="../assets/img/1.png" alt="?">
            </div>
            <div class="b active">
                <img src="../assets/img/1.png" alt="?">
            </div>
            <div class="c">
                <img src="../assets/img/1.png" alt="?">
            </div>
        </section>
        <section class="middle-content">
            <h3 class="showcast">{{ name }}</h3>
            <ul class="circle">
                <li></li>
                <li class="active"></li>
                <li></li>
            </ul>
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