

let count = 0;
let value = document.getElementById("value");
let Btns = document.querySelectorAll(".btn");
console.log(Btns);

Btns.forEach(function (Orange) {
  Orange.addEventListener("click", Counter);

  function Counter(e) {
    const styles = e.currentTarget.classList;
    console.log(styles);

    if (styles.contains("Decrease")) {
      count--;
    } else if (styles.contains("Increase")) {
      count++;
    } else {
      count = 0;
    }

    value.textContent = count;

    if (count < 0) {
      value.style.color = "Red";
    } else if (count > 0) {
      value.style.color = "Green";
    } else {
      value.style.color = "blue";
    }
  }
});
