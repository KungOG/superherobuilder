<template>
    <main>
        <div class="home-page-content-1">
            <div>
                <h2>Super Hero Name:</h2>
            </div>
        <input type="text">
        <img src="../assets/img/done.png" alt="Sucks To Be You!">
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
}
</script>