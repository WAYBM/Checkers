let circles = document.querySelectorAll(".circle");
let pole = document.querySelector(".pole");
const btnreplay = document.querySelector(".replay");
const btnrotate = document.querySelector(".rotate");
const counteatenblack = document.querySelector(".countcircleblack");
const counteatenwhite = document.querySelector(".countcirclewhite");
const eight8 = document.querySelector(".x8");
const four4 = document.querySelector(".x4");
const two2 = document.querySelector(".x2");
let rotate = "row";
let count = true;
let countfigs = 1;
let countall = 1;
let border = "50px";
let circlewidthandheight = "90px";
let squarewidthandheight = "100px";
function changelarge(circles) {
  circles = document.querySelectorAll(".circle");
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.width = squarewidthandheight;
    squares[i].style.height = squarewidthandheight;
  }
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].style.background == "white") {
      circles[
        i
      ].style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: white;-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;`;
    } else {
      circles[
        i
      ].style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: black;-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;`;
    }
  }
}
function truefalse(circles) {
  if (blackwhite == false) {
    blackwhite = true;
  } else {
    blackwhite = false;
  }
  for (let i = 0; i < circles.length; i++) {
    circles[i].style.outline = "";
  }
  ate = false;
  eatenfigure = "";
  figure = "";
  countate = 0;
  figure2 = "";
  eatenfigure2 = "";
  eatensquare = "";
  viborfig = 0;
}
function changeopacity(circle, what) {
  if (what == "plus") {
    let timerid = setInterval(
      () => (circle.style.opacity = Number(circle.style.opacity) + 0.02),
      0.3
    );
    setTimeout(() => {
      clearInterval(timerid);
    }, 1000);
  }
}
function winorlose(squares, whitecount, blackcount) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].firstChild != null) {
      if (squares[i].firstChild.style.background == "black") {
        blackcount++;
      }
    }
    if (squares[i].firstChild != null) {
      if (squares[i].firstChild.style.background == "white") {
        whitecount++;
      }
    }
  }
  counteatenblack.innerHTML = 12 - blackcount + "x";
  counteatenwhite.innerHTML = 12 - whitecount + "x";
  if (whitecount < 1) {
    replay();
    alert("Черные выйграли!");
  }
  if (blackcount < 1) {
    replay();
    alert("Белые выйграли!");
  }
}
function checkladies(lady, viborfig) {
  for (let i = 0; i < lady.length; i++) {
    if (Number(lady[i].dataset.key) == viborfig) {
      return true;
    }
  }
  return false;
}
function walk(i, color, e, circles) {
  circle = document.createElement("div");
  e.target.append(circle);
  circle.className = "circle";
  circle.style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: ${color};-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;opacity:0;`;
  changeopacity(circle, "plus");
  squares[i].removeChild(squares[i].firstChild);
  vibor = false;
  truefalse(circles);
  check(circles);
}
function dlcforeat(i, num1, num2) {
  if (countate == 1) {
    figure2 = squares[i];
    eatenfigure2 = squares[i + num2];
    eatensquare = squares[i + num1];
  } else {
    eatenfigure = squares[i + num2];
    eatensquare = squares[i + num1];
    figure = squares[i];
    vibor = true;
    ate = true;
  }
}
function dlcforeat2(i, num1, num2) {
  if (countate == 1) {
    figure2 = squares[i];
    eatenfigure2 = squares[i - num2];
    eatensquare = squares[i - num1];
  } else {
    eatenfigure = squares[i - num2];
    eatensquare = squares[i - num1];
    figure = squares[i];
    vibor = true;
    ate = true;
  }
}
let vibor = false;
let blackwhite = true;
let viborfig = 0;
let counteat = 0;

let squares = document.querySelectorAll(".square");
function replay() {
  rotate = "row";
  pole.style.flexDirection = rotate;
  counteatenblack.innerHTML = 0;
  counteatenwhite.innerHTML = 0;
  count = true;
  countfigs = 1;
  countall = 1;
  pole.innerHTML = "";
  ate = false;
  eatenfigure = "";
  figure = "";
  countate = 0;
  figure2 = "";
  eatenfigure2 = "";
  eatensquare = "";
  blacklady = [];
  whitelady = [];
  vibor = false;
  viborfig = 0;
  blackwhite = true;
  counteat = 0;
  for (let i = 0; i < 8; i++) {
    for (let i = 0; i < 8; i++) {
      div = document.createElement("div");
      pole.append(div);
      div.className = "square";
      div.style.height = squarewidthandheight;
      div.style.width = squarewidthandheight;
      div.dataset.key = countall;
      if (countfigs <= 12 && count == false) {
        circle = document.createElement("div");
        div.append(circle);
        circle.className = "circle";
        circle.style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: black;-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;opacity:0`;
        changeopacity(circle, "plus");
      }
      if (count == false) {
        countfigs += 1;
      }
      if (countfigs >= 22 && count == false) {
        circle = document.createElement("div");
        div.append(circle);
        circle.className = "circle";
        circle.style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: white;-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;opacity:0;`;
        changeopacity(circle, "plus");
      }
      // div.style.outline ='1px solid black'
      if (count == true) {
        div.style.backgroundColor = "white";
        count = false;
      } else {
        div.style.backgroundColor = "grey";
        count = true;
      }
      countall += 1;
    }
    if (count == true) {
      count = false;
    } else {
      count = true;
    }
  }
  squares = document.querySelectorAll(".square");
  circles = document.querySelectorAll(".circle");
  console.log(typeof squares);
}
replay();

function ladyseat(lady, e, circles, color, uncolor) {
  if (lady != [] && e.target.firstChild == null) {
    for (let i = 0; i < lady.length; i++) {
      if (Number(lady[i].dataset.key) == viborfig) {
        if (
          Number(lady[i].dataset.key) < Number(e.target.dataset.key) &&
          (Number(e.target.dataset.key) - viborfig) % 7 == 0
        ) {
          for (let j = 0; j < Number(e.target.dataset.key) - viborfig; j += 7) {
            if (
              squares[viborfig + j - 1].firstChild != null &&
              squares[viborfig + j - 1].firstChild.style.background ==
                `${uncolor}`
            ) {
              squares[viborfig + j - 1].removeChild(
                squares[viborfig + j - 1].firstChild
              );
            }
          }
          squares[viborfig - 1].id = "";
          let circle = document.createElement("div");
          e.target.append(circle);
          circle.className = "circle";
          circle.style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: ${color};-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;border:2px dashed red;opacity:0;`;
          changeopacity(circle, "plus");
          lady[i].removeChild(lady[i].firstChild);
          circle.id = lady[i].id;
          if (lady[i].style.background == "black") {
            blacklady.push(e.target);
            e.target.id = "BlackLady";
            blacklady.splice(i - 2, 1);
          } else {
            whitelady.push(e.target);
            e.target.id = "WhiteLady";
            whitelady.splice(i - 2, 1);
          }
          vibor = false;
          truefalse(circles);
          check(circles);
        }
      }
    }
  }
  if (lady != [] && e.target.firstChild == null) {
    for (let i = 0; i < lady.length; i++) {
      if (Number(lady[i].dataset.key) == viborfig) {
        if (
          Number(lady[i].dataset.key) < Number(e.target.dataset.key) &&
          (Number(e.target.dataset.key) - viborfig) % 9 == 0
        ) {
          for (let j = 0; j < Number(e.target.dataset.key) - viborfig; j += 9) {
            if (
              squares[viborfig + j - 1].firstChild != null &&
              squares[viborfig + j - 1].firstChild.style.background ==
                `${uncolor}`
            ) {
              squares[viborfig + j - 1].removeChild(
                squares[viborfig + j - 1].firstChild
              );
            }
          }
          squares[viborfig - 1].id = "";
          circle = document.createElement("div");
          e.target.append(circle);
          circle.className = "circle";
          circle.style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: ${color};-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;border:2px dashed red;opacity:0;`;
          changeopacity(circle, "plus");
          lady[i].removeChild(lady[i].firstChild);
          circle.id = lady[i].id;
          if (lady[i].style.background == "black") {
            blacklady.push(e.target);
            e.target.id = "BlackLady";
            blacklady.splice(i - 2, 1);
          } else {
            whitelady.push(e.target);
            e.target.id = "WhiteLady";
            whitelady.splice(i - 2, 1);
          }
          vibor = false;
          truefalse(circles);
          check(circles);
        }
      }
    }
  }
  if (lady != [] && e.target.firstChild == null) {
    for (let i = 0; i < lady.length; i++) {
      if (Number(lady[i].dataset.key) == viborfig) {
        if (
          Number(lady[i].dataset.key) > Number(e.target.dataset.key) &&
          (viborfig - Number(e.target.dataset.key)) % 7 == 0
        ) {
          for (let j = 0; j < viborfig - Number(e.target.dataset.key); j += 7) {
            if (
              squares[viborfig - j - 1].firstChild != null &&
              squares[viborfig - j - 1].firstChild.style.background ==
                `${uncolor}`
            ) {
              squares[viborfig - j - 1].removeChild(
                squares[viborfig - j - 1].firstChild
              );
            }
          }
          squares[viborfig - 1].id = "";
          circle = document.createElement("div");
          e.target.append(circle);
          circle.className = "circle";
          circle.style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: ${color};-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;border:2px dashed red;opacity:0;`;
          changeopacity(circle, "plus");
          lady[i].removeChild(lady[i].firstChild);
          circle.id = lady[i].id;
          if (lady[i].style.background == "black") {
            blacklady.push(e.target);
            e.target.id = "BlackLady";
            blacklady.splice(i - 2, 1);
          } else {
            whitelady.push(e.target);
            e.target.id = "WhiteLady";
            whitelady.splice(i - 2, 1);
          }
          vibor = false;
          truefalse(circles);
          check(circles);
        }
      }
    }
  }
  if (lady != [] && e.target.firstChild == null) {
    for (let i = 0; i < lady.length; i++) {
      if (Number(lady[i].dataset.key) == viborfig) {
        if (
          Number(lady[i].dataset.key) > Number(e.target.dataset.key) &&
          (viborfig - Number(e.target.dataset.key)) % 9 == 0
        ) {
          for (let j = 0; j < viborfig - Number(e.target.dataset.key); j += 9) {
            if (
              squares[viborfig - j - 1].firstChild != null &&
              squares[viborfig - j - 1].firstChild.style.background ==
                `${uncolor}`
            ) {
              squares[viborfig - j - 1].removeChild(
                squares[viborfig - j - 1].firstChild
              );
            }
          }
          squares[viborfig - 1].id = "";
          circle = document.createElement("div");
          e.target.append(circle);
          circle.className = "circle";
          circle.style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: ${color};-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;border:2px dashed red;opacity:0;`;
          changeopacity(circle, "plus");
          lady[i].removeChild(lady[i].firstChild);
          circle.id = lady[i].id;
          if (lady[i].style.background == "black") {
            blacklady.push(e.target);
            e.target.id = "BlackLady";
            blacklady.splice(i - 2, 1);
          } else {
            whitelady.push(e.target);
            e.target.id = "WhiteLady";
            whitelady.splice(i - 2, 1);
          }
          vibor = false;
          truefalse(circles);
          check(circles);
        }
      }
    }
  }
}
function check(circles) {
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].firstChild != null) {
        if (
          squares[i].firstChild.style.background == "black" &&
          squares[i].dataset.key > 56 &&
          squares[i].id != "BlackLady"
        ) {
          squares[i].firstChild.style.border = "2px solid red";
          squares[i].id = "BlackLady";
          blacklady.push(squares[i]);
        }
        if (
          squares[i].firstChild.style.background == "white" &&
          squares[i].dataset.key < 9 &&
          squares[i].id != "WhiteLady"
        ) {
          squares[i].firstChild.style.border = "2px dashed red";
          squares[i].id = "WhiteLady";
          whitelady.push(squares[i]);
        }
      }
      if (countate > 2) {
        countate = 0;
      }
      if (
        squares[i].id != "WhiteLady" &&
        squares[i].id != "BlackLady" &&
        squares[i + 14] != undefined &&
        squares[i + 7].firstChild != null &&
        squares[i].firstChild != null &&
        squares[i + 14].firstChild == null &&
        blackwhite == false &&
        squares[i].firstChild.style.background == "black" &&
        squares[i + 7].firstChild.style.background == "white"
      ) {
        if (
          squares[i].firstChild.style.background !=
            squares[i + 7].firstChild.style.background &&
          squares[i + 14].style.backgroundColor != "white"
        ) {
          squares[i].firstChild.style.outline = "1px solid lime";
          dlcforeat(i, 7, 14);
          countate += 1;
        }
      }
      if (
        squares[i].id != "WhiteLady" &&
        squares[i].id != "BlackLady" &&
        squares[i + 18] != undefined &&
        squares[i + 9].childNodes.length != 0 &&
        squares[i].firstChild != null &&
        squares[i + 18].firstChild == null &&
        blackwhite == false &&
        squares[i].firstChild.style.background == "black" &&
        squares[i + 9].firstChild.style.background == "white"
      ) {
        if (
          squares[i].firstChild.style.background !=
            squares[i + 9].firstChild.style.background &&
          squares[i + 18].style.backgroundColor != "white"
        ) {
          squares[i].firstChild.style.outline = "1px solid lime";
          dlcforeat(i, 9, 18);
          countate += 1;
        }
      }

      if (
        squares[i].id != "WhiteLady" &&
        squares[i].id != "BlackLady" &&
        squares[i - 14] != undefined &&
        squares[i - 7].firstChild != null &&
        squares[i].firstChild != null &&
        squares[i - 14].firstChild == null &&
        squares[i].firstChild.style.background == "white" &&
        squares[i - 7].firstChild.style.background == "black"
      ) {
        if (
          squares[i].firstChild.style.background !=
            squares[i - 7].firstChild.style.background &&
          blackwhite == true &&
          squares[i - 14].style.backgroundColor != "white"
        ) {
          squares[i].firstChild.style.outline = "1px solid lime";
          dlcforeat2(i, 7, 14);
          countate += 1;
        }
      }
      if (
        squares[i].id != "WhiteLady" &&
        squares[i].id != "BlackLady" &&
        squares[i - 18] != undefined &&
        squares[i - 9].firstChild != null &&
        squares[i].firstChild != null &&
        squares[i - 18].firstChild == null &&
        squares[i].firstChild.style.background == "white" &&
        squares[i - 9].firstChild.style.background == "black"
      ) {
        if (
          squares[i].firstChild.style.background !=
            squares[i - 9].firstChild.style.background &&
          blackwhite == true &&
          squares[i - 18].style.backgroundColor != "white"
        ) {
          squares[i].firstChild.style.outline = "1px solid lime";
          dlcforeat2(i, 9, 18);
          countate += 1;
        }
      }
    }
  }
}
btnrotate.addEventListener("click", () => {
  if (rotate == "row") {
    console.log(pole);
    pole.style.flexDirection = "column";
    rotate = "column";
  } else if (rotate == "column") {
    pole.style.flexDirection = "column-reverse";
    rotate = "reverse-column";
  } else if (rotate == "reverse-column") {
    pole.style.flexDirection = "row-reverse";
    rotate = "row-reverse";
  } else if (rotate == "row-reverse") {
    pole.style.flexDirection = "row";
    rotate = "row";
  }
});
btnreplay.addEventListener("click", () => {
  replay();
});
four4.addEventListener("click", () => {
  pole.style.width = "400px";
  pole.style.height = "400px";
  circlewidthandheight = "45px";
  border = "25px";
  squarewidthandheight = "50px";
  changelarge(circles);
});
eight8.addEventListener("click", () => {
  pole.style.width = "800px";
  pole.style.height = "800px";
  circlewidthandheight = "90px";
  border = "50px";
  squarewidthandheight = "100px";
  changelarge(circles);
});
two2.addEventListener("click", () => {
  pole.style.width = "200px";
  pole.style.height = "200px";
  circlewidthandheight = "22.5px";
  border = "12.5px";
  squarewidthandheight = "25px";
  changelarge(circles);
});
pole.addEventListener("click", (e) => {
  for (let i = 0; i < whitelady.length; i++) {
    if (whitelady[i].firstChild == "") {
      whitelady.splice(i, 1);
    }
  }
  for (let i = 0; i < blacklady.length; i++) {
    if (blacklady[i].firstChild == "") {
      blacklady.splice(i, 1);
    }
  }
  let circles = document.querySelectorAll(".circle");
  for (let i = 0; i < circles.length; i++) {
    circles[i].dataset.key = circles[i].parentElement.dataset.key;
  }
  if (e.target.className == "circle" && vibor == false && ate == false) {
    if (blackwhite == true && e.target.style.background == "white") {
      e.target.style.outline = "1px solid lime";
      vibor = true;
      viborfig = Number(e.target.parentElement.dataset.key);
    }
    if (blackwhite == false && e.target.style.background == "black") {
      e.target.style.outline = "1px solid lime";
      vibor = true;
      viborfig = Number(e.target.parentElement.dataset.key);
    }
  } else {
    if (
      vibor == true &&
      e.target.className == "square" &&
      e.target.style.backgroundColor == "grey"
    ) {
      if (
        ate == true &&
        (e.target.dataset.key == eatenfigure.dataset.key ||
          e.target.dataset.key == eatenfigure2.dataset.key) &&
        blackwhite == false &&
        eatenfigure2 != null &&
        eatenfigure != null
      ) {
        if (e.target.dataset.key == eatenfigure2.dataset.key) {
          circle = document.createElement("div");
          circle.className = "circle";
          circle.style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: black;-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;opacity:0;`;
          changeopacity(circle, "plus");
          figure2.removeChild(figure2.firstChild);
          eatensquare.removeChild(eatensquare.firstChild);
          eatenfigure2.append(circle);
          ate = false;
          countate = 0;
          counteat += 1;
          check();
          truefalse(circles);
        } else {
          if (ate == true && e.target.dataset.key == eatenfigure.dataset.key) {
            circle = document.createElement("div");
            circle.className = "circle";
            circle.style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: black;-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;opacity:0;`;
            changeopacity(circle, "plus");
            figure.removeChild(figure.firstChild);
            eatensquare.removeChild(eatensquare.firstChild);
            eatenfigure.append(circle);
            ate = false;
            countate = 0;
            counteat += 1;
            check();
            truefalse(circles);
          }
        }
      }
      if (
        ate == true &&
        e.target.dataset.key == eatenfigure.dataset.key &&
        blackwhite == true &&
        eatenfigure != null &&
        eatenfigure2 != null
      ) {
        if (e.target.dataset.key == eatenfigure2.dataset.key) {
          circle = document.createElement("div");
          circle.className = "circle";
          circle.style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: white;-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;opacity:0;`;
          changeopacity(circle, "plus");
          figure.removeChild(figure.firstChild);
          eatensquare.removeChild(eatensquare.firstChild);
          eatenfigure2.append(circle);
          ate = false;
          counteat += 1;
          check();
          truefalse(circles);
        } else {
          if (e.target.dataset.key == eatenfigure.dataset.key) {
            circle = document.createElement("div");
            circle.className = "circle";
            circle.style = `width: ${circlewidthandheight};height: ${circlewidthandheight};background: white;-moz-border-radius: ${border};-webkit-border-radius: ${border};border-radius: ${border};margin:auto;opacity:0;`;
            changeopacity(circle, "plus");
            figure.removeChild(figure.firstChild);
            eatensquare.removeChild(eatensquare.firstChild);
            eatenfigure.append(circle);
            ate = false;
            counteat += 1;
            truefalse(circles);
            check();
          }
        }
      }
      for (let i = 0; i < squares.length; i++) {
        if (checkladies(blacklady, viborfig) == true) {
          ladyseat(blacklady, e, circles, "black", "white");
        }
        if (checkladies(whitelady, viborfig) == true) {
          ladyseat(whitelady, e, circles, "white", "black");
        }
        if (
          squares[i].dataset.key == Number(e.target.dataset.key) - 7 &&
          viborfig + 7 == Number(e.target.dataset.key) &&
          blackwhite == false &&
          e.target.firstChild == null
        ) {
          if (
            checkladies(blacklady, viborfig) == true ||
            checkladies(whitelady, viborfig) == true
          ) {
            if (checkladies(blacklady, viborfig) == false) {
              walk(i, "black", e, circles);
            }
            if (checkladies(whitelady, viborfig) == false) {
              walk(i, "black", e, circles);
            }
          } else {
            walk(i, "black", e, circles);
          }
        }
        if (
          squares[i].dataset.key == Number(e.target.dataset.key) - 9 &&
          viborfig + 9 == Number(e.target.dataset.key) &&
          blackwhite == false &&
          e.target.firstChild == null
        ) {
          if (
            checkladies(blacklady, viborfig) == true ||
            checkladies(whitelady, viborfig) == true
          ) {
            if (checkladies(blacklady, viborfig) == false) {
              walk(i, "black", e, circles);
            }
            if (checkladies(whitelady, viborfig) == false) {
              walk(i, "black", e, circles);
            }
          } else {
            walk(i, "black", e, circles);
          }
        }
        if (
          squares[i].dataset.key == Number(e.target.dataset.key) + 9 &&
          viborfig - 9 == Number(e.target.dataset.key) &&
          blackwhite == true &&
          e.target.firstChild == null
        ) {
          if (
            checkladies(blacklady, viborfig) == true ||
            checkladies(whitelady, viborfig) == true
          ) {
            if (checkladies(blacklady, viborfig) == false) {
              walk(i, "white", e, circles);
            }
            if (checkladies(whitelady, viborfig) == false) {
              walk(i, "white", e, circles);
            }
          } else {
            walk(i, "white", e, circles);
          }
        }
        if (
          squares[i].dataset.key == Number(e.target.dataset.key) + 7 &&
          viborfig - 7 == Number(e.target.dataset.key) &&
          blackwhite == true &&
          e.target.firstChild == null
        ) {
          if (
            checkladies(blacklady, viborfig) == true ||
            checkladies(whitelady, viborfig) == true
          ) {
            if (checkladies(blacklady, viborfig) == false) {
              walk(i, "white", e, circles);
            }
            if (checkladies(whitelady, viborfig) == false) {
              walk(i, "white", e, circles);
            }
          } else {
            walk(i, "white", e, circles);
          }
        }
      }
      check();
    } else {
      if (ate == false) {
        for (let i = 0; i < circles.length; i++) {
          if (
            circles[i].parentElement.id != "WhiteLady" &&
            circles[i].parentElement.id != "BlackLady"
          ) {
            circles[i].style.outline = "";
          }
        }
        vibor = false;
        countate = 0;
        viborfig = 0;
      }
    }
  }
  winorlose(squares, 0, 0);
});
