<template>
    <main>
        <h1>This is an Builder page</h1>
        <a class="btn">
            <router-link to="/power">
                Step two
                <span>&gt;</span>
            </router-link>
        </a>
    </main>
</template>

<script>
export default {
    name: 'builder',
}
</script>
