<template>
    <!-- Questions -->
<h6 class="mt-2 text-center" v-if="currentQuestion < questions.length">
{{questions[currentQuestion].question}}</h6>
<p v-if="tryAgainText=== true && submitted === true" class="invalid text-center">Incorrect, Try Again!</p>

<!-- Ice Rink SVG -->
<div v-if="currentQuestion < questions.length">
<IceRinkWithPositions @clickedPosition="handleResponse"/>
<div>{{ clicked }}</div>
</div>

<div v-else> The Quiz is complete!</div>
</template>

<script>
import IceRinkWithPositions from '../components/IceRinkWithPositions.vue';

export default {
    name:'Quiz',
    components:{
        IceRinkWithPositions
    },
    data() {
        return {
            clicked:null,
            // currentQuestion: Math.floor(Math.random()* 6),
            currentQuestion: 0,
            submitted: false,
            tryAgainText: false,
            submitted: false,
            questions:[{
                question : 'Where is the goalie?',
                id:0,
                answer:'goalie'
            },
            {
                question : 'Where is the Left Defense?',
                id:1,
                answer:'leftDefense'
            },
            {
                question : 'Where is the Right Defense?',
                id:2,
                answer:'rightDefense'
            },
            {
                question : 'Where is the Center?',
                id:3,
                answer:'center'
            },
            {
                question : 'Where is the Right Wing?',
                id:4,
                answer:'rightWing'
            },
            {
                question : 'Where is the Left Wing?',
                id:5,
                answer:'leftWing'
            }
            ]
        }
    },
    methods: {
        handleResponse(response){
            this.submitted = true;
            if(response && response === this.questions[this.currentQuestion].answer){
                // Show label for position here 
                alert('Correct!');
                if(this.currentQuestion < this.questions.length){
         this.currentQuestion++;
         this.submitted = false;
         this.tryAgainText = false;
         }else{
       alert('You finished the quiz!');
        }
    }else{
    this.tryAgainText = true;
    }
    }
}
}

</script>

<style scoped>

.invalid{
    color:red;
}
</style>