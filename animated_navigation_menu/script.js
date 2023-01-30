const menuToggle = document.querySelector(".menu_toggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick = function () {
  navigation.classList.toggle("active");
};
