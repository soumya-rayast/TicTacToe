// creating variable term 
let btnRef = document.querySelectorAll(".boxes");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgref = document.getElementById("message");

// winning pattern created 
let winpattern =[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
];
let xturn = true;
let count = 0;

// variable for disable buttons 
const disableButtons = () =>{
    btnRef.forEach((Element) =>(Element.disabled = true));

    popupRef.classList.remove("hide");
}
// variable for enaable buttons 

const enableButtons = () => {
    btnRef.forEach((Element) => {
        Element.innerText = "";
        Element.disabled = false;
    });
    popupRef.classList.add("hide");
};
// for new game 
newgameBtn.addEventListener("click",() => {
    count = 0;
    enableButtons();
});
// for restart button 
restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
})

// for calling winning function 
const winFunction = (letter) => {
    disableButtons();
    if(letter == "X")
    {
        msgref.innerHTML="'X' Wins";
    }
    else
    {
        msgref.innerHTML="'O' Wins";
    }
};
// for draw functions 
const drawFunction = () =>{
    disableButtons();
    msgref.innerHTML = " It's a draw ";
}
// for checking the pattern is from winning pattern 
const winchecker = () => {

    for(let i of winpattern){
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        if(element1 != "" && element2 != "" && element3 !="")
        {
           if(element1 == element2  && element2== element3){
            winFunction(element1);
           } 
        }

    }
};

btnRef.forEach((Element) => {
    Element.addEventListener("click", () => {
        if(xturn){
            xturn = false;
            Element.innerText = "X";
            Element.disabled = true;   
        }
        else{
            xturn= true;
            Element.innerText = "O";
            Element.disabled = true;
        }
        count += 1;
        if(count === 9){
            drawFunction();
        }
        winchecker();
    });
});

window.onload = enableButtons;