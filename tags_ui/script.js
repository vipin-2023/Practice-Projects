const ul = document.querySelector("ul");
input = document.querySelector("input");
countNum = document.querySelector(".details span");
countTextAll = document.querySelector(".details p");

let maxTags = 10;
let tags = [];
countTag();

function countTag() {
  input.focus();
  let balanceTag = maxTags - tags.length;
  console.log(tags.length);
  console.log(balanceTag);

  countNum.innerText = balanceTag;
}

function createTag() {
  ul.querySelectorAll("li").forEach((li) => li.remove());
  tags
    .slice()
    .reverse()
    .forEach((tag) => {
      let liTag = `<li>${tag}<ion-icon name="close-outline" onclick="remover(this,'${tag}')">  </ion-icon>`;
      ul.insertAdjacentHTML("afterbegin", liTag);
    });
  countTag();
}

function remover(element, tag) {
  let index = tags.indexOf(tag);
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
  element.parentElement.remove();
  countTag();
}

function addTag(e) {
  if (e.key == "Enter") {
    let tag = e.target.value.replace(/\s+/g, " ");

    if (tag.length > 1 && !tags.includes(tag)) {
      if (tags.length < 10) {
        tag.split(",").forEach((tag) => {
          tags.push(tag);
          createTag();
          e.target.value = "";
        });
      }
    }
  }
}

input.addEventListener("keyup", addTag);
const removeBtn = document.querySelector("button");
removeBtn.addEventListener("click", () => {
  tags.length = 0;
  ul.querySelectorAll("li").forEach((li) => li.remove());
});
