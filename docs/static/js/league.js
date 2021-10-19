
W = [
    [2, 4, 6, 8, 9, 13, 14, 17, 19],
    [3, 6, 7, 8, 12, 13, 15, 17, 18],
    [3, 4, 6, 7, 8, 9, 12, 13, 14, 16, 17],
    [0, 4, 6, 8, 14, 16],
    [19],
    [0, 1, 4, 6, 10, 11, 12, 13, 14, 17, 18],
    [4, 9, 13, 14, 16, 19],
    [0, 4, 8, 9, 11, 13, 17],
    [14],
    [1, 3, 15, 17, 18, 19],
    [0, 1, 2, 3, 7, 9, 13, 17, 18, 19],
    [0, 1, 2, 3, 4, 6, 9, 12, 15, 19],
    [3, 4, 6, 8, 9, 13, 15, 18],
    [8, 11],
    [4],
    [0, 4, 6, 7, 8, 13, 14, 19],
    [0, 5, 8, 9, 10, 12, 13, 14, 15],
    [3, 8, 12, 14, 15, 16],
    [3, 4, 6, 7, 8, 14, 15, 16, 17],
    [1, 2, 7, 8, 12, 13, 17, 18],
];

L = [
    [3, 5, 7, 10, 11, 15, 16],
    [5, 9, 10, 11, 19],
    [0, 10, 11, 19],
    [1, 2, 9, 10, 11, 12, 17, 18],
    [0, 2, 3, 5, 6, 7, 11, 12, 14, 15, 18],
    [16],
    [0, 1, 2, 3, 5, 11, 12, 15, 18],
    [1, 2, 10, 15, 18, 19],
    [0, 1, 2, 3, 7, 12, 13, 15, 16, 17, 18, 19],
    [0, 2, 6, 7, 10, 11, 12, 16],
    [5, 16],
    [5, 7, 13],
    [1, 2, 5, 11, 16, 17, 19],
    [0, 1, 2, 5, 6, 7, 10, 12, 15, 16, 19],
    [0, 2, 3, 5, 6, 8, 15, 16, 17, 18],
    [1, 9, 11, 12, 16, 17, 18],
    [2, 3, 6, 17, 18],
    [0, 1, 2, 5, 7, 9, 10, 18, 19],
    [1, 5, 9, 10, 12, 19],
    [0, 4, 6, 9, 10, 11, 15],
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