let grid = [3, 4, 5, 6, 7, 8, 9, 10, 11];
let firstPerson = true;

function createGrid() {
  let main = document.getElementById("main");

  for (let i = 1; i < 10; i++) {
    let div = document.createElement("div");
    div.id = "" + i;
    div.className = "box";
    div.onclick = drawAndCheck;
    main.appendChild(div);
  }
}

function drawAndCheck(e) {
  let id = e.target.id;
  if (grid[id - 1] > 2) {
    let el = document.createElement("span");
    if (firstPerson) {
      el.className = "circle";
      grid[id - 1] = 1;
    } else {
      el.className = "cross";
      grid[id - 1] = 2;
    }
    firstPerson = !firstPerson;
    document.getElementById(id).appendChild(el);

    let i = id - 1;
    switch (id % 3) {
      case 0:
        if (grid[2] == grid[5] && grid[2] == grid[8]) drawWinningLine(2, 5, 8);
        if (grid[i] == grid[i - 1] && grid[i] == grid[i - 2])
          drawWinningLine(i, i - 1, i - 2);
        break;
      case 1:
        if (grid[0] == grid[3] && grid[0] == grid[6]) drawWinningLine(0, 3, 6);
        if (grid[i] == grid[i + 1] && grid[i] == grid[i + 2])
          drawWinningLine(i, i + 1, i + 2);
        break;
      case 2:
        if (grid[1] == grid[4] && grid[1] == grid[7]) drawWinningLine(1, 4, 7);
        if (grid[i] == grid[i - 1] && grid[i] == grid[i + 1])
          drawWinningLine(i, i - 1, i + 1);
        break;
    }
    if (id % 2 == 1) {
      if (id == 5) {
        if (grid[0] == grid[4] && grid[0] == grid[8]) drawWinningLine(0, 4, 8);
        if (grid[2] == grid[4] && grid[2] == grid[6]) drawWinningLine(2, 4, 6);
      } else if (id == 1 || id == 9) {
        if (grid[0] == grid[4] && grid[0] == grid[8]) drawWinningLine(0, 4, 8);
      } else {
        if (grid[2] == grid[4] && grid[2] == grid[6]) drawWinningLine(2, 4, 6);
      }
    }
    let count = 0;
    for (let el in grid) {
      if (grid[el] < 3 && grid[el] > 0) count++;
    }
    if (count == 9) {
      setTimeout(() => {
        alert("Match Drawn");
        window.location.reload();
      }, 100);
    }
  }
}

function drawWinningLine(i, j, k) {
  i++;
  j++;
  k++;
  document.getElementById("" + i).style.color = "green";
  document.getElementById("" + j).style.color = "green";
  document.getElementById("" + k).style.color = "green";

  grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  setTimeout(() => {
    if (firstPerson) alert("Player 2 (Cross) Won");
    else alert("Player 1 (Circle) Won");
    window.location.reload();
  }, 100);
}
