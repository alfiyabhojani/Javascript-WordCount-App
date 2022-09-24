let result = document.querySelector(".my-text");
let word = document.querySelector("#text-area");
let count = 0;

word.addEventListener("keyup", (event) => {
  const key = event.key;
  console.log(count);
  console.log(word.value);
  if (key === "Backspace" && count === 0) {
    result.textContent = "0";
    return;
  } else if (key == "Backspace" && count > 0) {
    count = count - 1;
    result.textContent = count;
    console.log(count);
  } else if (key == " ") {
    result.textContent = count;
  } else {
    count = count + 1;
    result.textContent = count;
  }
});
