// Get player data

async function loadData() {
  try {
    const response = await fetch(
      "https://github.com/TiannaLopesOSU/hockey-roster-onboarding/blob/pure-js/stats.json",
      {
        mode: "no-cors",
        header: {
          "Access-Control-Allow-Origin": "*",
          "Content-type:": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
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
    cell.textContent = rowData[column];
    row.appendChild(cell);
  });
  return tableRow;
};

// Method to populate the table with data

const populateTable = async () => {
  const data = await loadData();
  console.log(data);
  const tableBody = document.querySelector("#table tbody");

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
  console.log("sortDescending");

  const tableRows = [...document.querySelectorAll("#table tbody tr")];
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
  direction === "asc"
    ? list.sort((a, b) => a.jerseyNumber - b.jerseyNumber)
    : list.sort((a, b) => b.jerseyNumber - a.jerseyNumber);

  const tableBody = document.querySelector("#table tbody");
  tableBody.innerHTML = "";

  list.forEach((item) => {
    const row = createTableRow(item);
    tableBody.appendChild(row);
  });
};

// filter Method by Jersey Number

const filter = (position) => {
  const tableRows = [...document.querySelectorAll("#table tbody tr")];
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

  list.filter((item) => item.position === position);

  const tableBody = document.querySelector("#table tbody");
  tableBody.innerHTML = "";

  list.forEach((item) => {
    const row = createTableRow(item);
    tableBody.appendChild(row);
  });
};
