import { renderMonstersList } from "./components/MonstersList.js";
import { sortElements } from "./services/sort.js";

const sortButton = document.getElementById("sort-button");
const sortButtonIcon = document.querySelector(".sort-button-icon");
const monsterCardContainer = document.getElementById("monster-card-container");
let isSortButtonUp = true;
let monsters = [];

fetch("http://localhost:8080/api/v1/monsters")
    .then(response => response.json())
    .then(response => {
        monsters = response.data;
        renderMonstersList(monsters);
    });

const toggleSortButtonClassList = () => {
    if (isSortButtonUp) {
        sortButtonIcon.className += " sort-button-icon__down";
    } else {
        sortButtonIcon.className = "sort-button-icon";
    }
    isSortButtonUp = !isSortButtonUp;
};

const handleSortButton = () => {
    renderMonstersList(sortElements(monsters, isSortButtonUp));
    toggleSortButtonClassList();
    monsterCardContainer.innerHTML = "";
};

sortButton.addEventListener("click", handleSortButton);