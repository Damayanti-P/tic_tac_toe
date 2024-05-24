let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
let msgCont=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let container=document.querySelector("main");
let turnX=true
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
            if(turnX)
            {
                box.innerHTML="<b>X</b>";
                turnX=false;
            }
            else{
                box.innerHTML="<b>O</b>";
                turnX=true;
            }
            box.disabled=true;
          checkWinner();  
    });
});
let winP=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const disableBoxes=()=>{
        for(let box of boxes)
            {
                box.disabled=true;
            }
    }
const enableBoxes=()=>{
            for(let box of boxes)
                {
                    box.disabled=false;
                    box.innerHTML="";
                }
    }
const resetGame=()=>{
    turnX=true;
    enableBoxes();
    msgCont.classList.add("hide");
    container.classList.remove("hide");
};
const showWinner=(Winner)=>{
    disableBoxes();
    msg.innerHTML=`<b>Congratulations Winner is<br> ${Winner}</b>`;
    msgCont.classList.remove("hide");
    container.classList.add("hide");
};
const checkWinner=()=>{
    for(let Pattern of winP)
        {
            // console.log(boxes[Pattern[0]].innerText,boxes[Pattern[1]].innerText,boxes[Pattern[2]].innerText);
            let pos1Val=boxes[Pattern[0]].innerText;
            let pos2Val=boxes[Pattern[1]].innerText;
            let pos3Val=boxes[Pattern[2]].innerText;
            if(pos1Val!="" && pos2Val!="" && pos3Val!="")
            {
                if(pos1Val===pos2Val && pos2Val===pos3Val)
                {
                    showWinner(pos1Val);
                }
            }
        }
};
newGame.addEventListener("click",()=>{
    resetGame();
});
resetbtn.addEventListener("click",()=>{
    resetGame();
});