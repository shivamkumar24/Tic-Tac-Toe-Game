let turn = "X";
let isgameover = false;
let turntune = new Audio("./extra/ting.mp3");
let gameover = new Audio("./extra/gameover.mp3");

// function for checking the turn
const checkTurn = () => {
  return turn === "X" ? "0" : "X";
};

// function for checking the winner
const checkWinner = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  //   if (isgameover) {
  //     document.getElementsByClassName("container").innerHTML = null;
  //   } else {
  let boards = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  boards.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " is Winner";
      isgameover = true;
      gameover.play();
    }
  });
  //   }
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = checkTurn();
      turntune.play();
      checkWinner();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});
