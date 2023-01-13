const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {
  const newRow = document.createElement("div");
  newRow.classList.add("col");

  newRow.innerHTML = `
      <div class="card bg-dark p-3 border history-div">
        <h3 class="card-title">${questionText}</h3>
        <div>
        <p class="card-text">You took: <span class="bold">${timeTaken}</span> seconds</p>
        <p class="card-text">You made <span class="bold red">${errorCount}</span> mistakes</p>
        </div>
      </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("col");

    newRow.innerHTML = `
    <div class="card bg-dark p-3 border history-div">
      <h3 class="card-title">${test.questionText}</h3>
      <p class="card-text">You took: <span class="bold">${test.timeTaken}</span> seconds</p>
      <p class="card-text">You made <span class="bold red">${test.errorCount}</span> mistakes</p>
    </div>
  `;

    histories.appendChild(newRow);
  });
}
