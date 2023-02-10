const form = document.querySelector("form");
 fileInput = document.querySelector(".file-input");
 progressArea = document.querySelector(".progress-area");
 uploadArea = document.querySelector(".uploaded-area");

form.addEventListener("click",()=>{
    fileInput.click();
})
fileInput.onchange =({target}) =>{
    let file = target.files[0];
    if(file){
        let fileName = file.name;
        uploadFile(fileName)
    }
}

function uploadFile(name){
    
}