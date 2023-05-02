
<template>
 <body>
    <div id="app">
              <!-- Header -->
              <div class="m-2">
                <h1>Portland WinterHawks</h1>
            </div>
          <!-- Sorting and Filter Options -->
          <button type="button" class="btn btn-secondary m-2" >Sort By Jersey Number Ascending</button>
          <button type="button" class="btn btn-secondary m-2" >Sort By Jersey Number Descending</button>
  
          <div class="dropdown m-2">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
               Filter By Position
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" >Forward</a>
                <a class="dropdown-item" href="#" >Defense</a>
                <a class="dropdown-item" href="#" >Goalie</a>
              </div>
            </div>
  
                  <!-- Table -->
      <div>
          <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Player Name</th>
                  <th scope="col">Position</th>
                  <th scope="col">Goals</th>
                  <th scope="col">Assists</th>
                  <th scope="col">Points</th>
                  <th scope="col">Penalty Minutes</th>
                  <th scope="col">Games Played</th>
                  <th scope="col">Points Per Game</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in playersList" :key="item.playerName">
                    <td>{{item.jerseyNumber}}</td>
                    <td>{{item.playerName}}</td>
                    <td>{{item.position}}</td>
                    <td>{{item.gamesPlayed}}</td>
                    <td>{{item.goals}}</td>
                    <td>{{item.assists}}</td>
                    <td>{{item.points}}</td>
                    <td>{{item.penaltyMinutes}}</td>
                    <td>{{item.shotsOnGoal}}</td>
                    <!-- <td>{{ item.points / {item.gamesPlayed }}</td> -->
                </tr>
              </tbody>
            </table>
      </div>
    </div>
  </body>
</template>

<style scoped>

</style>

<script >
import axios from 'axios';
  export default  {
    data() {
    return {
      playerList: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get(
          "https://github.com/TiannaLopesOSU/hockey-roster-onboarding/blob/pure-js/stats.json"
        )
        .then((response) => {
          console.log(response);
          this.playerList = response.data;
        }).catch((error) => {
          console.log(error);
        });
    },
  }
  }
</script>
