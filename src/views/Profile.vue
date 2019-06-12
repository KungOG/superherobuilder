<template>
    <main class="content">
        <section class="headline">
            <h1>Your Superheroes</h1>
        </section>
        <section class="home-page-content-2">
            <img src="../assets/img/Superman.png" alt="Superhero img" class="home-page-content-img">
            <img src="../assets/img/Superman.png" alt="Superhero img" class="home-page-content-img">
            <img src="../assets/img/Superman.png" alt="Superhero img" class="home-page-content-img">
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

    methods : {
        downloadBtn (name) {
            alert('You just downloaded' + ' '+ this.name + '!');
        },
        editBtn () {
            this.$router.push('/builder');
        },
        deleteBtn (name) {
            alert('You just deleted' + ' '+ this.name + '!');
        }
    }
    
}
</script>