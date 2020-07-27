const monsterCardContainer = document.getElementById("monster-card-container");

export const renderMonsterCard = monsterDetails => {
    monsterCardContainer.innerHTML = "";
    let monsterCard = document.createElement("div");
    monsterCard.classList = "card";
    monsterCard.innerHTML =
    `
        <img src=${monsterDetails.images.big} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${monsterDetails.name}</h5>
            <p class="card-text">${monsterDetails.description}</p>
            <span>Power</span>
            <div class="progress">
                <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow=${monsterDetails.statistics.power * 100}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: ${monsterDetails.statistics.power * 100}%">
                </div>
            </div>
            <span>Danger</span>
            <div class="progress">
                <div
                    class="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                    role="progressbar"
                    aria-valuenow=${monsterDetails.statistics.danger * 100}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: ${monsterDetails.statistics.danger * 100}%">
                </div>
            </div>
            <span>Frequency</span>
            <div class="progress">
                <div
                    class="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                    role="progressbar"
                    aria-valuenow=${monsterDetails.statistics.frequency * 100}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: ${monsterDetails.statistics.frequency * 100}%">
                </div>
            </div>
        </div>
    `;
    monsterCardContainer.appendChild(monsterCard);
};
