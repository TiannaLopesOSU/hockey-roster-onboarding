<template>
<nav class="navbar-light bg-light">
  <h2 class="p-3 navbar-brand m-2 text-center" href="#">
    Hockey Position Quiz
  </h2>
</nav>
  <main>
    <!-- <HockeyRoster /> -->
    <Introduction  v-if="view !== 'startQuiz'" 
    @startQuiz="view ='startQuiz'"
    />
    <Quiz v-if="view === 'startQuiz'"/>
  </main>
</template>
<script >
import HockeyRoster from './components/HockeyRoster.vue';
import Introduction from './views/Introduction.vue';
import Quiz from './views/Quiz.vue';

export default {
  name: 'App',
  components: {
    HockeyRoster,
    Introduction,
    Quiz
  },
  data() {
    return {
      view: 'start'
    }
  }
}
</script>
<style scoped>

</style>
