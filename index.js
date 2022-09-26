let text = document.querySelector("#text-area");
let button = document.querySelector(".btn");
button.addEventListener("click", palindrome);

function palindrome() {
  let string = text.value;
  let len = string.length;
  let msg = true;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] != string[len - 1 - i]) msg = false;
  }
  if (msg) {
    return alert("It is Palindrome.....");
  } else {
    return alert(`It is not a Palindrome.....`);
  }
}
