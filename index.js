// Get player data

async function loadData() {
  // try {
  //   const response = await fetch(
  //     "https://github.com/TiannaLopesOSU/hockey-roster-onboarding/blob/pure-js/stats.json",
  //     {
  //       mode: "no-cors",
  //       header: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Content-type:": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }

  return playerList;
}

// Create the table elements

const createTableRow = (rowData) => {
  const tableRow = document.createElement("tr");
  const columns = [
    "jerseyNumber",
    "playerName",
    "position",
    "gamesPlayed",
    "goals",
    "assists",
    "points",
    "penaltyMinutes",
    "shotsOnGoal",
    "pointsPerGame",
    "gameWinningGoals",
  ];

  columns.forEach((column) => {
    const cell = document.createElement("td");
    // calculate points per game
    if (column === "pointsPerGame") {
      cell.textContent = (rowData.points / rowData.gamesPlayed).toFixed(2);
    } else {
      cell.textContent = rowData[column];
    }
    tableRow.appendChild(cell);
  });
  return tableRow;
};

// Method to populate the table with data

const populateTable = async () => {
  const data = await loadData();
  console.log(data);
  const tableBody = document.querySelector("tbody");

  data.forEach((item) => {
    const row = createTableRow(item);
    tableBody.appendChild(row);
  });
};

// start
window.onload = () => {
  populateTable();
};

// sort Method by Jersey Number
const sort = (direction) => {
  const tableRows = [...document.querySelectorAll("#tablebody tr")];
  const list = tableRows.map((row) => ({
    jerseyNumber: row.querySelector("td:nth-child(1)").textContent,
    playerName: row.querySelector("td:nth-child(2)").textContent,
    position: row.querySelector("td:nth-child(3)").textContent,
    gamesPlayed: row.querySelector("td:nth-child(4)").textContent,
    goals: row.querySelector("td:nth-child(5)").textContent,
    assists: row.querySelector("td:nth-child(6)").textContent,
    points: row.querySelector("td:nth-child(7)").textContent,
    penaltyMinutes: row.querySelector("td:nth-child(8)").textContent,
    shotsOnGoal: row.querySelector("td:nth-child(9)").textContent,
    pointsPerGame: row.querySelector("td:nth-child(10)").textContent,
    gameWinningGoals: row.querySelector("td:nth-child(11)").textContent,
  }));

  const tableBody = document.querySelector("#tablebody");
  tableBody.innerHTML = "";
  direction === "asc"
    ? list.sort((a, b) => a.jerseyNumber - b.jerseyNumber)
    : list.sort((a, b) => b.jerseyNumber - a.jerseyNumber);
  list.forEach((item) => {
    const row = createTableRow(item);
    tableBody.appendChild(row);
  });
};

// filter Method by Jersey Number

const filter = (position) => {
  const tableRows = [...document.querySelectorAll("#tablebody tr")];
  const list = tableRows.map((row) => ({
    jerseyNumber: row.querySelector("td:nth-child(1)").textContent,
    playerName: row.querySelector("td:nth-child(2)").textContent,
    position: row.querySelector("td:nth-child(3)").textContent,
    gamesPlayed: row.querySelector("td:nth-child(4)").textContent,
    goals: row.querySelector("td:nth-child(5)").textContent,
    assists: row.querySelector("td:nth-child(6)").textContent,
    points: row.querySelector("td:nth-child(7)").textContent,
    penaltyMinutes: row.querySelector("td:nth-child(8)").textContent,
    shotsOnGoal: row.querySelector("td:nth-child(9)").textContent,
    pointsPerGame: row.querySelector("td:nth-child(10)").textContent,
    gameWinningGoals: row.querySelector("td:nth-child(11)").textContent,
  }));

  const tableBody = document.querySelector("#tablebody");
  tableBody.innerHTML = "";
  playerList
    .filter((item) => {
      return item.position == position;
    })
    .forEach((item) => {
      const row = createTableRow(item);
      tableBody.appendChild(row);
    });
  console.log(list);
};

// Data
const playerList = [
  {
    jerseyNumber: 16,
    playerName: "Gabe Klassen",
    position: "Forward",
    gamesPlayed: 64,
    goals: 35,
    assists: 34,
    points: 69,
    penaltyMinutes: 30,
    shotsOnGoal: 267,
    pointsPerGame: 1.08,
    gameWinningGoals: 5,
  },
  {
    jerseyNumber: 11,
    playerName: "Robbie Fromm-Delorme",
    position: "Forward",
    gamesPlayed: 65,
    goals: 33,
    assists: 34,
    points: 67,
    penaltyMinutes: 38,
    shotsOnGoal: 274,
    pointsPerGame: 1.03,
    gameWinningGoals: 5,
  },
  {
    jerseyNumber: 13,
    playerName: "Jame Stefan",
    position: "Forward",
    gamesPlayed: 64,
    goals: 22,
    assists: 42,
    points: 64,
    penaltyMinutes: 49,
    shotsOnGoal: 275,
    pointsPerGame: 1.0,
    gameWinningGoals: 2,
  },
  {
    jerseyNumber: 73,
    playerName: "Luca Cagnoni",
    position: "Defense",
    gamesPlayed: 67,
    goals: 17,
    assists: 47,
    points: 64,
    penaltyMinutes: 46,
    shotsOnGoal: 243,
    pointsPerGame: 0.96,
    gameWinningGoals: 3,
  },
  {
    jerseyNumber: 92,
    playerName: "Jack O'Brien",
    position: "Forward",
    gamesPlayed: 66,
    goals: 12,
    assists: 47,
    points: 59,
    penaltyMinutes: 48,
    shotsOnGoal: 172,
    pointsPerGame: 0.89,
    gameWinningGoals: 0,
  },
  {
    jerseyNumber: 72,
    playerName: "Markus Nguyen",
    position: "Forward",
    gamesPlayed: 66,
    goals: 23,
    assists: 23,
    points: 46,
    penaltyMinutes: 64,
    shotsOnGoal: 160,
    pointsPerGame: 0.7,
    gameWinningGoals: 3,
  },
  {
    jerseyNumber: 31,
    playerName: "Jan Spunar",
    position: "Goalie",
    gamesPlayed: 31,
    goals: 0,
    assists: 1,
    points: 1,
    penaltyMinutes: 2,
    shotsOnGoal: 0,
    pointsPerGame: 0.03,
    gameWinningGoals: 0,
  },
  {
    jerseyNumber: 74,
    playerName: "Dante Giannuzzi",
    position: "Goalie",
    gamesPlayed: 41,
    goals: 0,
    assists: 3,
    points: 3,
    penaltyMinutes: 0,
    shotsOnGoal: 0,
    pointsPerGame: 0.07,
    gameWinningGoals: 0,
  },
];
