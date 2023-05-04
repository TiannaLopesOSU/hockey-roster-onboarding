<template>
  <h6
    class="mt-2 text-center"
    v-if="
      questions &&
      currentQuestion < questions.length &&
      questions[currentQuestion] &&
      questions[currentQuestion].question
    "
  >
    {{ questions[currentQuestion].question }}
  </h6>
  <div
    class="text-center"
    v-if="
      questions &&
      currentQuestion < questions.length &&
      questions[currentQuestion] &&
      questions[currentQuestion].question
    "
  >
    <button
      type="button"
      class="btn btn-secondary"
      v-on:click="nextQuestion"
      :disabled="disableNextButton"
    >
      Next Question
    </button>
  </div>
  <label class="m-2"> Show Positions: </label>
  <input type="checkbox" v-on:click="toggleLabels" data-toggle="toggle" />
  <div v-if="questions && currentQuestion < questions.length">
    <IceRinkWithPositions
      @clickedPosition="handleResponse"
      :positions="positions"
    />
  </div>

  <div v-else="quizIsComplete === true">The Quiz is complete!</div>
</template>

<script>
import IceRinkWithPositions from "../components/IceRinkWithPositions.vue";

export default {
  name: "Quiz",
  components: {
    IceRinkWithPositions,
  },
  data() {
    return {
      clicked: null,
      currentQuestion: 0,
      disableNextButton: true,
      tryAgainText: false,
      quizIsComplete: false,
      previouslyAnsweredCorrectly: [],
      questions: this.getQuestions(),
      positions: [
        { position: "goalie", showText: false, color: null },
        { position: "leftDefense", showText: false, color: null },
        { position: "rightDefense", showText: false, color: null },
        { position: "rightWing", showText: false, color: null },
        { position: "center", showText: false, color: null },
        { position: "leftWing", showText: false, color: null },
      ],
    };
  },
  onMounted() {
    this.getPositions();
  },
  methods: {
    toggleLabels() {
      this.positions.forEach((position) => {
        position.showText = !position.showText;
      });
    },
    handleResponse(response) {
      if (this.currentQuestion < this.questions.length) {
        if (
          response &&
          response === this.questions[this.currentQuestion].answer
        ) {
          this.disableNextButton = false;
          this.positions.forEach((position) => {
            if (response === position.position) {
              position.showText = true;
              position.color = "green";
            }
          });
          this.previouslyAnsweredCorrectly.push(response.position);
          this.submitted = false;
        } else {
          this.positions.forEach((position) => {
            if (response === position.position) {
              position.color = "red";
            }
          });
        }
      } else {
        this.quizIsComplete = true;
      }
    },
    nextQuestion() {
      this.currentQuestion++;
      this.disableNextButton = true;
      this.positions.forEach((position) => {
        if (
          position.color &&
          (position.color === "green" || position.color === "grey")
        ) {
          position.color = "grey";
        } else {
          position.color = null;
        }
      });
    },
    getQuestions() {
      const randomArray = [];
      const questions = [
        {
          question: "Where is the goalie?",
          id: 0,
          answer: "goalie",
        },
        {
          question: "Where is the Left Defense?",
          id: 1,
          answer: "leftDefense",
        },
        {
          question: "Where is the Right Defense?",
          id: 2,
          answer: "rightDefense",
        },
        {
          question: "Where is the Center?",
          id: 4,
          answer: "center",
        },
        {
          question: "Where is the Right Wing?",
          id: 3,
          answer: "rightWing",
        },
        {
          question: "Where is the Left Wing?",
          id: 5,
          answer: "leftWing",
        },
      ];

      let randomIndexArray = [];
      while (randomIndexArray.length < 6) {
        let r = Math.floor(Math.random() * 6);
        if (randomIndexArray.indexOf(r) === -1) randomIndexArray.push(r);
      }

      randomIndexArray.forEach((index) => {
        randomArray.push(questions[index]);
      });
      return randomArray;
    },
  },
};
</script>

<style scoped>
.invalid {
  color: red;
}
</style>
