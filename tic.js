let boxes = document.querySelectorAll(".box");
let msgwiner = document.querySelector(".msg-winner");
let msgs = document.querySelector("#msg");
let addgame = document.querySelector("#add");
let resetbtn = document.querySelector("#reset");


let turnO= true;

const winPattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
   ];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("bos was clicked");
        if(turnO){
            box.innerText ="O";
            turnO= false;
        }else{
            box.innerText ="X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledboxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enabledboxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        
    }
};

const showWinner= (winner)=>{
    msgs.innerText = `Congratulations winner is ${winner}`;
    msgwiner.classList.remove("hide");
    disabledboxes();


};
const checkWinner = () =>{
    for(pattern of winPattern){
        let pos1vall = boxes[pattern[0]].innerText;
        let pos2vall = boxes[pattern[1]].innerText;
        let pos3vall = boxes[pattern[2]].innerText;

        if(pos1vall !="" && pos2vall !="" && pos3vall !=""){
            if(pos1vall === pos2vall && pos2vall === pos3vall){
                console.log("Winner",pos1vall);
                showWinner(pos1vall);
            }
        }
    }
}

const resetgame = () =>{
    turnO = true;
    enabledboxes();
    msgwiner.classList.add("hide");
    };

    addgame.addEventListener("click",resetgame);
    resetbtn.addEventListener("click",resetgame);