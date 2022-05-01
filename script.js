// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

const element = document.getElementById("value");
const element2 = document.getElementById("value2");
let click = false;
function expand() {
  if (!click) {
    document.querySelector(".info").style.height = "0";
    document.querySelector(".expandButton").innerHTML = "+";
  } else {
    document.querySelector(".info").style.height = "auto";
    document.querySelector(".expandButton").innerHTML = "-";
  }
  click = !click;
}

function move() {
  // console.log(document.querySelector(".expandButton").style.height);
  if (!click && document.querySelector(".expandButton").style.height === "") {
    expand();
  }

  let start, previousTimeStamp;
  let done = false;
  let ran = 0;
  let count = 0;
  element2.innerHTML = "";
  element.style.color = "";
  element2.style.color = "";
  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    if (previousTimeStamp !== timestamp) {
      count++;
      ran = Math.floor(Math.random() * 100000);
      element.innerHTML = ran;
      console.log(count);
      if (count === 30) {
        done = true;
        if (ran > 1 && ran < 5000) {
          element.style.color = "teal";
          element2.style.color = "teal";
          element2.innerHTML =
            " You are the lucky winner!!!<br/> <b>YOU WIN!!!</b>";
        } else {
          element.style.color = "#8b0000";
          element2.style.color = "#8b0000";
          element2.innerHTML =
            "Lucky number is between 1 and 5000.<br/> <b>Please Try Again!</b>";
        }
      }
    }

    if (elapsed < 3000) {
      previousTimeStamp = timestamp;
      !done &&
        setTimeout(function () {
          window.requestAnimationFrame(step);
        }, 75);
    }
  }
  window.requestAnimationFrame(step);
}