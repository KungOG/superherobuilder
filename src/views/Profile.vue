<template>
    <main class="home">
        <section class="headline">
            <h1>YOUR SUPERHEROS</h1>
        </section>
        <section class="home-page-content-2">
            <img src="../assets/img/Superman.png" alt="Superhero img" class="home-page-content-img">
            <img src="../assets/img/Superman.png" alt="Superhero img" class="home-page-content-img">
            <img src="../assets/img/Superman.png" alt="Superhero img" class="home-page-content-img">
        </section>
        <section >
            <h3 class="showcast">Namn</h3>
            <ul class="active">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </section>
        <section class="profile-btns">
            <a href="" class="download-btn">DOWNLOAD</a>
            <a href="" class="edit-btn">EDIT</a>
            <a href="" class="delete-btn">DELETE</a>
    </section>
    </main>
</template>

<script>
export default {
    name: 'profile'
}
</script>
<style>

.home {
    display: flex;
    justify-content: center;
    flex-direction: column;

}
.headline {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    font-size: 1.75rem;
}
.showcast {
    display: flex;
    justify-content: center;
    padding: 1rem;
    background: #E54626 /* $orange; */
}
.active {
    display: flex;
    justify-content: space-evenly !important;
    flex-direction: row;
}
.profile-btns {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    
}
.download-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: green;
    color: black;
    text-decoration: none;
    padding: 2.3rem;    

    /* width: 282px;
    height: 132px;
    left: 70px;
    top: 879px;  */
}    
.edit-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: yellow;
    color: black;
    text-decoration: none;
    padding: 2.3rem;

    /* width: 282px;
    height: 132px;
    left: 70px;
    top: 879px; */
}    
.delete-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
    color: black;
    text-decoration: none;
    padding: 2.3rem;

  /*   width: 282px;
    height: 132px;
    left: 70px;
    top: 879px; */
}    
</style>