const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textArea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

window.addEventListener('load', function () {
    generateGradient()
})

const copyCode=()=>{
    navigator.clipboard.writeText(textArea.value);
    copyBtn.innerHTML = "Code Copied"
    setTimeout( () =>{ 
        copyBtn.innerHTML = "Copy Code"
     }, 1000);
}

const getRandomColor = ()=>{
    const randomHex = Math.floor(Math.random()*0xffffff).toString(16);
    return `#${randomHex}`
}
  
const generateGradient = (isRandom) => {
    if(isRandom){
        colorInputs[0].value=getRandomColor();
        colorInputs[1].value=getRandomColor();

    }
  const gradient = `linear-gradient(${selectMenu.value},${colorInputs[1].value},${colorInputs[0].value})`;
  gradientBox.style.background = gradient;
  textArea.value =`background : ${gradient};`;
};

colorInputs.forEach((input) => {
  input.addEventListener("input", ()=> generateGradient(false));
});
selectMenu.addEventListener("change",()=> generateGradient(false));
refreshBtn.addEventListener("click",()=> generateGradient(true))
copyBtn.addEventListener("click",copyCode)