const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const cot = document.querySelector(".cot");

btn.addEventListener("click",function(){
    let hexColor ="#";
    for(let i=0;i<6;i++)
    {
        hexColor+= hex[getrandomnumber()];
    }
    cot.textContent= hexColor;
    container.style.backgroundColor = hexColor;
}
); 



function getrandomnumber(){
    return Math.floor(Math.random() * hex.length);
}