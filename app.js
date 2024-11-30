let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
//for reset the game
const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
//selecting all the boxes
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
//writing a function to show the winner
const showWinner=(winner)=>{
    msg.innerText='Congratulations winner is ${winner}';
    msgContainer.classList.remove("hide");
    disableboxes()

};
//after the winner is announced i disabled the remaining boxes
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
//when we click the reset button the boxes are again enabled
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}
//writing a function to check the winner according to the pos1val who entered first
const checkWinner=()=>{
      for(let pattern of winPatterns){

        let pos1val=    boxes[pattern[0]].innerText;
         let pos2val =   boxes[pattern[1]].innerText;
          let pos3val=  boxes[pattern[2]].innerText;

          if(pos1val != "" && pos2val != "" && pos3val !="")
            if(pos1val===pos2val && pos2val===pos3val){


                showWinner(pos1val);
            }

      }
}

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);