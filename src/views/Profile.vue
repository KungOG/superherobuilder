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
            <h3 class="showcast">Superman</h3>
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
    methods : {
        downloadBtn () {
            alert('You just downloaded your Superhero!');
        },
        editBtn () {
            this.$router.push('/builder');
        },
        deleteBtn () {
            alert('You just deleted your Superhero');
        }

    }
}
</script>