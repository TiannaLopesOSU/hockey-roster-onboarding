// Get player data

async function loadData() {
  try {
    const response = await fetch(
      "https://github.com/TiannaLopesOSU/hockey-roster-onboarding/blob/vanilla-js/stats.json",
      {
        mode: "no-cors",
        header: {
          "Access-Control-Allow-Origin": "*",
          "Content-type:": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
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

// buttons

// sortDescending(() => {
//   console.log("sortDescending");
// });

// sortAscending(() => {
//   console.log("sortDescending");
// });

// filter(() => {
//   console.log("sortDescending");
// });
