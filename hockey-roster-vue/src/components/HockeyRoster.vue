
<template>
 <body>
    <div id="app">
              <!-- Header -->
              <div class="m-2">
                <h1>Portland WinterHawks</h1>
            </div>
          <!-- Sorting and Filter Options -->
          <button type="button" class="btn btn-secondary m-2" v-on:click="sort('asc')">Sort By Jersey Number Ascending</button>
          <button type="button" class="btn btn-secondary m-2" v-on:click="sort('desc')">Sort By Jersey Number Descending</button>
  
          <div class="dropdown m-2">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
               Filter By Position
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" v-on:click="filterByPosition('Forward')">Forward</a>
                <a class="dropdown-item" href="#" v-on:click="filterByPosition('Defense')">Defense</a>
                <a class="dropdown-item" href="#" v-on:click="filterByPosition('Goalie')">Goalie</a>
              </div>
            </div>
  
                  <!-- Table -->
      <div>
          <table class="table table-striped m-2">
              <thead>
                <tr>
                  <th scope="col">Jersey #</th>
                  <th scope="col">Player Name</th>
                  <th scope="col">Position</th>
                  <th scope="col">Goals</th>
                  <th scope="col">Assists</th>
                  <th scope="col">Points</th>
                  <th scope="col">Penalty Minutes</th>
                  <th scope="col">Games Played</th>
                  <th scope="col">Shots On Goal</th>
                  <th scope="col">Points Per Game</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in playerList" :key="item.playerName">
                    <td>{{item.jerseyNumber}}</td>
                    <td>{{item.playerName}}</td>
                    <td>{{item.position}}</td>
                    <td>{{item.gamesPlayed}}</td>
                    <td>{{item.goals}}</td>
                    <td>{{item.assists}}</td>
                    <td>{{item.points}}</td>
                    <td>{{item.penaltyMinutes}}</td>
                    <td>{{item.shotsOnGoal}}</td>
                    <td>{{item.pointsPerGame}}</td>
                    <td>  <button type="button" class="btn btn-danger m-2" v-on:click="deletePlayer(item)">Remove</button></td>
                </tr>
              </tbody>
            </table>
      </div>
    </div>


    <!-- Add Player Form  -->
<div>
  <div class="m-2">
                <h3>Add a new player to the roster</h3>
   </div>
  <form class="m-2">

  <div class="form-group review-form" @submit.prevent="onSubmit">
    <label for="playerName">New Player Name</label>
    <input type="name" class="form-control" id="playerName" placeholder="Jimmy Jones" v-model="playerName" :class="{ 'invalid': (playerName === '' && submitted === true) }">
    <div class="error-message" v-if="(playerName === '' && submitted === true)"> Player Name is required.</div>

  </div>

  <div class="form-group">
    <label for="jerseyNumber">Jersey Number</label>
    <input type="number" class="form-control" id="jerseyNumber" placeholder="22" v-model="jerseyNumber" :class="{ 'invalid': (jerseyNumber === '' && submitted === true) }">
    <div class="error-message" v-if="(jerseyNumber === '' && submitted === true)"> Jersey Number is required.</div>

  </div>

  <div class="form-group">
    <label for="position">Position</label>
    <select class="form-control" id="position" v-model="position">
      <option>Forward</option>
      <option>Defense</option>
      <option>Goalie</option>
    </select>
  </div>

  <div class="form-group">
    <label for="gamesPlayed">Games Played</label>
    <input type="number" class="form-control" id="gamesPlayed" placeholder="65" v-model="gamesPlayed" :class="{ 'invalid': (gamesPlayed === '' && submitted === true) }">
    <div class="error-message" v-if="(gamesPlayed === '' && submitted === true)"> Games Played is required.</div>

  </div>

  <div class="form-group">
    <label for="goals">Goals</label>
    <input type="number" class="form-control" id="goals" placeholder="23" v-model="goals" :class="{ 'invalid': (goals === '' && submitted === true) }">
    <div class="error-message" v-if="(goals === '' && submitted === true)"> Goals are required.</div>
  </div>

  <div class="form-group">
    <label for="assists">Assists</label>
    <input type="number" class="form-control" id="assists" placeholder="63" v-model="assists" :class="{ 'invalid': (assists === '' && submitted === true) }" >
<div class="error-message" v-if="(assists === '' && submitted === true)"> Assists are required.</div>
  </div>

  <div class="form-group">
    <label for="points">Points</label>
    <input type="number" class="form-control" id="points" placeholder="86" v-model="points" :class="{ 'invalid': (points === '' && submitted === true) }">
    <div class="error-message" v-if="(points === '' && submitted === true)"> Points are required.</div>
  </div>

  <div class="form-group">
    <label for="penaltyMinutes">Penalty Minutes</label>
    <input type="number" class="form-control" id="penaltyMinutes" placeholder="98" v-model="penaltyMinutes" :class="{ 'invalid': (penaltyMinutes === '' && submitted === true) }">
    <div class="error-message" v-if="(penaltyMinutes === '' && submitted === true)"> Penalty Minutes are required.</div>
  </div>

  <div class="form-group">
    <label for="shotsOnGoal">Shots On Goal</label>
    <input type="number" class="form-control" id="shotsOnGoal" placeholder="312" v-model="shotsOnGoal" :class="{ 'invalid': (shotsOnGoal === '' && submitted === true) }">
    <div class="error-message" v-if="(shotsOnGoal === '' && submitted === true)"> Shots on goal are required.</div>
  </div>


  <button type="button" class="btn btn-secondary m-2" v-on:click="onSubmit()">Add New Player</button>
</form>
</div>


  </body>
</template>

<style scoped>
.invalid{
  border: 1px solid red;
}
.error-message{
  color: red;
}
</style>

<script >
import axios from 'axios';
  export default  {
    data() {
    return {
      submitted: false,
      playerName: '',
      jerseyNumber: '',
      position: 'Forward',
      gamesPlayed: '',
      goals: '',
      assists: '',
      points: '',
      penaltyMinutes: '',
      shotsOnGoal: '',
      pointsPerGame: '',
      fullPlayerList: [],
      playerList: [
  {
    "jerseyNumber": 16,
    "playerName": "Gabe Klassen",
    "position": "Forward",
    "gamesPlayed": 64,
    "goals": 35,
    "assists": 34,
    "points": 69,
    "penaltyMinutes": 30,
    "shotsOnGoal": 267,
    "pointsPerGame": 1.08,
    "gameWinningGoals": 5
  },
  {
    "jerseyNumber": 11,
    "playerName": "Robbie Fromm-Delorme",
    "position": "Forward",
    "gamesPlayed": 65,
    "goals": 33,
    "assists": 34,
    "points": 67,
    "penaltyMinutes": 38,
    "shotsOnGoal": 274,
    "pointsPerGame": 1.03,
    "gameWinningGoals": 5
  },
  {
    "jerseyNumber": 13,
    "playerName": "Jame Stefan",
    "position": "Forward",
    "gamesPlayed": 64,
    "goals": 22,
    "assists": 42,
    "points": 64,
    "penaltyMinutes": 49,
    "shotsOnGoal": 275,
    "pointsPerGame": 1.0,
    "gameWinningGoals": 2
  },
  {
    "jerseyNumber": 73,
    "playerName": "Luca Cagnoni",
    "position": "Defense",
    "gamesPlayed": 67,
    "goals": 17,
    "assists": 47,
    "points": 64,
    "penaltyMinutes": 46,
    "shotsOnGoal": 243,
    "pointsPerGame": 0.96,
    "gameWinningGoals": 3
  },
  {
    "jerseyNumber": 92,
    "playerName": "Jack O'Brien",
    "position": "Forward",
    "gamesPlayed": 66,
    "goals": 12,
    "assists": 47,
    "points": 59,
    "penaltyMinutes": 48,
    "shotsOnGoal": 172,
    "pointsPerGame": 0.89,
    "gameWinningGoals": 0
  },
  {
    "jerseyNumber": 72,
    "playerName": "Markus Nguyen",
    "position": "Forward",
    "gamesPlayed": 66,
    "goals": 23,
    "assists": 23,
    "points": 46,
    "penaltyMinutes": 64,
    "shotsOnGoal": 160,
    "pointsPerGame": 0.7,
    "gameWinningGoals": 3
  },
  {
    "jerseyNumber": 31,
    "playerName": "Jan Spunar",
    "position": "Goalie",
    "gamesPlayed": 31,
    "goals": 0,
    "assists": 1,
    "points": 1,
    "penaltyMinutes": 2,
    "shotsOnGoal": 0,
    "pointsPerGame": 0.03,
    "gameWinningGoals": 0
  },
  {
    "jerseyNumber": 74,
    "playerName": "Dante Giannuzzi",
    "position": "Goalie",
    "gamesPlayed": 41,
    "goals": 0,
    "assists": 3,
    "points": 3,
    "penaltyMinutes": 0,
    "shotsOnGoal": 0,
    "pointsPerGame": 0.07,
    "gameWinningGoals": 0
  }
]
    };
  },
  mounted() {
    // this.fetchData();
    this.calculatePointsPerGame();
    this.initializeVariables();
  },
  methods: {
    // fetchData() {
    //   axios
    //     .get(
    //       "https://github.com/TiannaLopesOSU/hockey-roster-onboarding/blob/pure-js/stats.json"
    //     )
    //     .then((response) => {
    //       console.log(response);
    //       this.playerList = response.data;
    //     }).catch((error) => {
    //       console.log(error);
    //     });
    // },

    initializeVariables() {
          this.fullPlayerList = [...this.playerList];
        },
    calculatePointsPerGame() {
  this.playerList.forEach((player) => {
  player.pointsPerGame = ((player.points) / player.gamesPlayed).toFixed(2);
})
    },

    sort(order){
      this.playerList.sort((a, b) => {
        if (order === 'asc') {
          return a.jerseyNumber - b.jerseyNumber;
        } else {
          return b.jerseyNumber - a.jerseyNumber;
        }
      });
    },

    filterByPosition(position){
    this.playerList = this.fullPlayerList.filter((item) => {
     return item.position === position;
      });
    },
  onSubmit(){
    this.submitted = true;
  let newPlayer = {
  playerName: this.playerName,
  jerseyNumber: this.jerseyNumber,
  position: this.position,
  gamesPlayed: this.gamesPlayed,
  goals: this.goals,
  assists: this.assists,
  points: this.points,
  penaltyMinutes: this.penaltyMinutes,
  shotsOnGoal: this.shotsOnGoal,
}
if(this.formIsValid(newPlayer)){
this.fullPlayerList.push(newPlayer);
this.playerList.push(newPlayer);
this.calculatePointsPerGame();

}else{
  console.log('Form is not valid');
}
  },
  deletePlayer(player){
   this.fullPlayerList = this.fullPlayerList.filter((item) => {
    return item.jerseyNumber!== player.jerseyNumber;
   });
   this.playerList = this.fullPlayerList.filter((item) => {
    return item.jerseyNumber!== player.jerseyNumber;
   });
  },

  formIsValid(newPlayer){
    console.log(newPlayer);
    if(newPlayer.playerName === '' || newPlayer.jerseyNumber === '' || newPlayer.position === '' || newPlayer.gamesPlayed === '' || newPlayer.goals === '' || newPlayer.assists === '' || newPlayer.points === ''
     || newPlayer.penaltyMinutes === '' || newPlayer.shotsOnGoal === '' || newPlayer.gameWinningGoals === ''){
      return false;
     }else{
    return true;
     }
  }
}
  }
</script>
