
const sortDownElements = list => {
    return list.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1);
};

const sortUpElements = list => {
    return list.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1);
};

export const sortElements = (list, isSortButtonUp) => {
    if (isSortButtonUp) {
        return sortUpElements(list);
    }
    return sortDownElements(list);
};
