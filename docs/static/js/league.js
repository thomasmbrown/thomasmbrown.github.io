
W = [
    [6, 8, 19],
    [3, 6, 8, 13, 17],
    [4, 7, 8, 12, 13, 14, 16],
    [0, 2, 8, 10, 14, 16],
    [14, 19],
    [4, 6, 11, 12, 14, 17, 18],
    [2, 4, 9, 19],
    [0, 9, 11, 13, 17],
    [],
    [15, 17],
    [0, 7, 9, 16, 18],
    [0, 1, 2, 4, 6, 19],
    [1, 4, 6, 9, 13, 18],
    [8, 11],
    [],
    [0, 8, 13, 14, 19],
    [0, 5, 9, 14],
    [10, 12, 15],
    [3, 7, 8, 14, 15],
    [1, 12, 13, 18],
];

L = [
    [3, 7, 10, 11, 15, 16],
    [11, 12, 19],
    [3, 6, 11],
    [1, 18],
    [2, 5, 6, 11, 12],
    [16],
    [0, 1, 5, 11, 12],
    [2, 10, 18],
    [0, 1, 2, 3, 13, 15, 18],
    [6, 7, 10, 12, 16],
    [3, 17],
    [5, 7, 13],
    [2, 5, 17, 19],
    [1, 2, 7, 12, 15, 19],
    [2, 3, 4, 5, 15, 16, 18],
    [9, 17, 18],
    [2, 3, 10],
    [1, 5, 7, 9],
    [5, 10, 12, 19],
    [0, 4, 6, 11, 15],
];

const beatingColor = "rgb(80,165,80)";
const losingColor = "rgb(208, 86, 128)";
const meColor = "rgb(118, 142, 210)";


function compare(team) {
    console.log(team.id);
    console.log(W[team.id]);
    console.log(L[team.id]);

    let rowId = team.id;
    let row = document.getElementById(rowId);
    row.style.backgroundColor = meColor;

    for (let i = 0; i < W[team.id].length; i++) {
        let rowId = W[team.id][i];
        let row = document.getElementById(rowId);
        row.style.backgroundColor = beatingColor;
    }

    for (let i = 0; i < L[team.id].length; i++) {
        let rowId = L[team.id][i];
        let row = document.getElementById(rowId);
        row.style.backgroundColor = losingColor;
    }
}

function resetLeague() {
    for (let i = 0; i < 20; i++) {
        let rowId = i;
        let row = document.getElementById(rowId);
        row.style.backgroundColor = "rgb(240, 240, 240)";
    }
}