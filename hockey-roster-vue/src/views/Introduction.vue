<template>
    <div class="introduction"> 
    <button type="button"
    class="btn btn-success mt-5" 
    v-on:click="$emit('startQuiz')">
    Start Hockey Quiz</button>
<IceRink/>
</div>
</template>

<script scoped>
import IceRink from '../components/IceRink.vue';
export default {
    name: "Introduction",
    components: {
        IceRink
    },
    methods: {
    }
}
</script>
<style scoped>
.introduction{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>