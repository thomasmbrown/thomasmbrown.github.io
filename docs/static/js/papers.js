function revealRow(rowId) {
    const row = document.getElementById(rowId);
    if (row.style.display != 'none') {
        row.style = "display: none;";
    } else {
        row.style = "";
    }
}