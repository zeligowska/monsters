import { renderMonsterCard } from "./MonsterCard.js";

const monstersList = document.getElementById("monsters-list");
let monstersListElements;

const fetchMonster = slug => {
    fetch(`http://localhost:8080/api/v1/monster/${slug}`)
        .then(response => response.json())
        .then(response => {
            renderMonsterCard(response.data);
        });
};

export const renderMonstersList = monsters => {
    monsters.map(element => {
        const handleClick = () => {
            fetchMonster(element.slug);
            monstersListElements.map(e => e.classList.remove("active"));
            listElement.classList.add("active");
        };
        let listElement = document.createElement("button");
        listElement.classList = "list-group-item list-group-item-action";
        listElement.innerText = element.name;
        listElement.addEventListener("click", handleClick);
        monstersList.appendChild(listElement);
    });
    monstersListElements = Array.prototype.slice.call(document.querySelectorAll(".list-group-item"));
};