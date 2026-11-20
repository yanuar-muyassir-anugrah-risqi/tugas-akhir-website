const playerListFull = document.getElementById("player-list-full");
const playerSearch = document.getElementById("player-search");
const prevPlayerPage = document.getElementById("prev-player-page");
const nextPlayerPage = document.getElementById("next-player-page");
const playerPageLabel = document.getElementById("player-page-label");
const playerDetails = document.getElementById("player-details");
const playerDetailsToggle = document.getElementById("player-details-toggle");
const playerDetailsContent = document.getElementById("player-details-content");
const playerInformation = document.getElementById("player-information");

const playersPerPage = 5;
let currentPlayerPage = 1;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function getFilteredPlayers() {
  const keyword = playerSearch.value.toLowerCase().trim();

  return players
    .slice(0, 75)
    .filter(player =>
      player.name.toLowerCase().includes(keyword) ||
      player.country.toLowerCase().includes(keyword)
    );
}

function renderFullPlayers() {

  const filteredPlayers = getFilteredPlayers();

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPlayers.length / playersPerPage)
  );

  currentPlayerPage = Math.min(currentPlayerPage, totalPages);

  const start = (currentPlayerPage - 1) * playersPerPage;

  const currentPlayers = filteredPlayers.slice(
    start,
    start + playersPerPage
  );


  if (currentPlayers.length === 0) {

    playerListFull.innerHTML = `
      <div class="empty-message">
        No players found.
      </div>
    `;

  } else {

    playerListFull.innerHTML = currentPlayers.map(player => {

      const rank = players.indexOf(player) + 1;

      return `
        <article
          class="level-card"
          data-player-index="${players.indexOf(player)}"
        >

          <span class="level-rank">
            ${rank}
          </span>

          <div class="level-info">

            <h3 class="level-name">
              ${escapeHTML(player.name)}
            </h3>

            <p class="level-creator">
              ${escapeHTML(player.country)}
            </p>

          </div>

          <div class="level-metrics">
            <span>${escapeHTML(player.score)}</span>
          </div>

        </article>
      `;

    }).join("");

  }

  playerPageLabel.textContent =
    `Page ${currentPlayerPage} / ${totalPages}`;

  prevPlayerPage.disabled = currentPlayerPage === 1;
  nextPlayerPage.disabled = currentPlayerPage === totalPages;

}

playerSearch.addEventListener("input", () => {

  currentPlayerPage = 1;

  renderFullPlayers();

});


prevPlayerPage.addEventListener("click", () => {

  if (currentPlayerPage > 1) {

    currentPlayerPage--;

    renderFullPlayers();

  }

});


nextPlayerPage.addEventListener("click", () => {

  const totalPages = Math.max(
    1,
    Math.ceil(getFilteredPlayers().length / playersPerPage)
  );

  if (currentPlayerPage < totalPages) {

    currentPlayerPage++;

    renderFullPlayers();

  }

});

playerListFull.addEventListener("click", function(event) {

  const card = event.target.closest(".level-card");

  if (!card) return;

  const selectedPlayer = players[
    Number(card.dataset.playerIndex)
  ];

  if (!selectedPlayer) return;

  playerInformation.innerHTML = `

    <h2>${escapeHTML(selectedPlayer.name)}</h2>

    <div class="detail-meta-grid">

      <div class="detail-item">
        <span>Country</span>
        <strong>${escapeHTML(selectedPlayer.country)}</strong>
      </div>

      <div class="detail-item">
        <span>Score</span>
        <strong>${escapeHTML(selectedPlayer.score)}</strong>
      </div>

      <div class="detail-item">
        <span>Hardest Level</span>
        <strong>${escapeHTML(selectedPlayer.hardest || "Unknown")}</strong>
      </div>

    </div>

    <p class="detail-created">
      ${escapeHTML(selectedPlayer.description || "No description available.")}
    </p>

  `;

  playerDetailsContent.hidden = false;

  playerDetailsToggle.setAttribute(
    "aria-expanded",
    "true"
  );

  playerDetails.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });

});


playerDetailsToggle.addEventListener("click", function() {

  const isOpen = !playerDetailsContent.hidden;

  playerDetailsContent.hidden = isOpen;

  playerDetailsToggle.setAttribute(
    "aria-expanded",
    String(!isOpen)
  );

});


renderFullPlayers();
