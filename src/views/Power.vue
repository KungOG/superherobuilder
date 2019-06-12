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