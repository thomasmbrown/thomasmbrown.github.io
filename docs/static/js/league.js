 
W = [
[2, 4, 7, 8, 12, 13, 14, 16, 17, 18, 19],
[3, 7, 8, 13, 17, 18],
[4, 7, 9, 10, 12, 13, 16, 17],
[0, 2, 4, 5, 6, 7, 8, 14],
[1, 8, 14, 18, 19],
[0, 1, 2, 4, 6, 8, 11, 12, 13, 14, 15, 17, 18],
[0, 1, 2, 4, 7, 8, 9, 10, 13, 14, 15, 16, 17, 19],
[4, 5, 9, 11, 13, 14, 15, 17],
[2, 7, 14, 15, 17],
[0, 1, 3, 4, 5, 8, 15, 16, 17, 18, 19],
[0, 1, 3, 4, 5, 7, 8, 9, 11, 13, 15, 17, 18, 19],
[0, 1, 2, 3, 4, 6, 8, 9, 13, 14, 15, 17, 19],
[1, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 17],
[8, 9, 14, 17],
[1, 2, 10],
[0, 1, 4, 12, 13, 14, 19],
[3, 4, 5, 7, 8, 10, 12, 13, 14, 15, 19],
[3, 4, 14, 15, 16],
[2, 3, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 19],
[1, 2, 3, 7, 8, 12, 13, 17],
];
L = [
[3, 5, 6, 9, 10, 11, 15],
[4, 5, 6, 9, 10, 11, 12, 14, 15, 19],
[0, 3, 5, 6, 8, 11, 14, 18, 19],
[1, 9, 10, 11, 12, 16, 17, 18, 19],
[0, 2, 3, 5, 6, 7, 9, 10, 11, 12, 15, 16, 17],
[3, 7, 9, 10, 16],
[3, 5, 11, 12, 18],
[0, 1, 2, 3, 6, 8, 10, 12, 16, 18, 19],
[0, 1, 3, 4, 5, 6, 9, 10, 11, 12, 13, 16, 18, 19],
[2, 6, 7, 10, 11, 12, 13],
[2, 6, 12, 14, 16],
[5, 7, 10, 12, 18],
[0, 2, 5, 15, 16, 18, 19],
[0, 1, 2, 5, 6, 7, 10, 11, 12, 15, 16, 18, 19],
[0, 3, 4, 5, 6, 7, 8, 11, 12, 13, 15, 16, 17, 18],
[5, 6, 7, 8, 9, 10, 11, 16, 17, 18],
[0, 2, 6, 9, 17, 18],
[0, 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19],
[0, 1, 4, 5, 9, 10],
[0, 4, 6, 9, 10, 11, 15, 16, 18],
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