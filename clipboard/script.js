let copyText = document.querySelector(".copy-text");

//on button click function
copyText.querySelector("button").addEventListener("click", () => {
  let input = copyText.querySelector("#copy-input");
  //copy value to clipboard
  navigator.clipboard.writeText(input.value);
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  //hide copy popup
  setTimeout(() => {
    copyText.classList.remove("active");
  }, 2500);
});
