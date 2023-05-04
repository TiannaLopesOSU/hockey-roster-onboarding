<template>
  <div class="introduction">
    <button
      type="button"
      class="btn btn-success mt-5"
      v-on:click="$emit('startQuiz')"
    >
      Start Hockey Quiz
    </button>
    <IceRinkWithPositions :positions="positions" />
  </div>
</template>

<script scoped>
import IceRinkWithPositions from "../components/IceRinkWithPositions.vue";
export default {
  name: "Introduction",
  data: function () {
    return {
      positions: [
        {
          position: "goalie",
          showText: false,
          color: null,
          circleHidden: true,
        },
        {
          position: "leftDefense",
          showText: false,
          color: null,
          circleHidden: true,
        },
        {
          position: "rightDefense",
          showText: false,
          color: null,
          circleHidden: true,
        },
        {
          position: "rightWing",
          showText: false,
          color: null,
          circleHidden: true,
        },
        {
          position: "center",
          showText: false,
          color: null,
          circleHidden: true,
        },
        {
          position: "leftWing",
          showText: false,
          color: null,
          circleHidden: true,
        },
      ],
    };
  },
  components: {
    IceRinkWithPositions,
  },
  methods: {},
};
</script>
<style scoped>
.introduction {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
