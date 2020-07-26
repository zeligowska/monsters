import { renderMonstersList } from "./components/MonstersList.js";

let monsters = [];

fetch("http://localhost:8080/api/v1/monsters")
    .then(response => response.json())
    .then(response => {
        monsters = response.data;
        renderMonstersList(monsters);
    });


