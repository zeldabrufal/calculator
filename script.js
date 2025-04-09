let inputChain = [];
let inputNum = 0;
let operation = "null";
inputChain.push(inputNum);


const outputCont = document.querySelector('.outputCont');
 
updateOutput();


const buttonsNum = document.querySelectorAll(".numberBtn");



buttonsNum.forEach(button => {
    button.addEventListener("click", () => {
        inputNum = parseInt(button.classList[2].replace("Btn", ""));
        inputChain.push(inputNum);
        console.log(inputChain[inputChain.length - 1]);
        updateOutput();
    });
});




const buttonsOperation = document.querySelectorAll(".operationBtn")

buttonsOperation.forEach(button => {
    button.addEventListener("click", () => {
        operation = button.classList[2].replace("Btn", "");
        console.log(operation);
        updateOutput();

    });
});

const buttonEqual = document.querySelector(".BtnEqual")

buttonEqual.addEventListener("click", () =>{
    if (operationFunctions[operation]) {
        operationFunctions[operation]();  
    } 
});

const buttonClear = document.querySelector(".BtnClear")

buttonClear.addEventListener("click", () =>{
    clear();
    

});

const buttonBack = document.querySelector(".BtnBack")

buttonBack.addEventListener("click", () =>{
    inputChain.splice(-1);
    let inputChainLast = inputChain[inputChain.length - 1];
    updateOutput();

    

});





const operationFunctions = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    noOp: noOp,
};






function noOp(){
    console.log("NO OPERATION CHOSEN");
}





function add(){


let inputChainLast = inputChain[inputChain.length - 1];
let inputChainSecondLast = inputChain[inputChain.length - 2];
    inputChain.push(inputChainLast + inputChainSecondLast);
    console.log(inputChain[inputChain.length - 1]);
    updateOutput();
}


function subtract(){

let inputChainLast = inputChain[inputChain.length - 1];
let inputChainSecondLast = inputChain[inputChain.length - 2];
   
    inputChain.push(inputChainSecondLast - inputChainLast);
    console.log(inputChain[inputChain.length - 1]);
    updateOutput();
}


function multiply(){

let inputChainLast = inputChain[inputChain.length - 1];
let inputChainSecondLast = inputChain[inputChain.length - 2];
   
    inputChain.push(inputChainSecondLast * inputChainLast);
    console.log(inputChain[inputChain.length - 1]);
    updateOutput();
}

function divide(){

    let inputChainLast = inputChain[inputChain.length - 1];
    let inputChainSecondLast = inputChain[inputChain.length - 2];
       
        inputChain.push(inputChainSecondLast / inputChainLast);
        console.log(inputChain[inputChain.length - 1]);
        updateOutput();
    }
    
function clear(){
    inputChain = [];
    inputChain.push(0);
    console.log(inputChain[inputChain.length - 1]);
    updateOutput();
    
}




function updateOutput() {
    let inputChainLast = inputChain[inputChain.length - 1];
    outputCont.textContent = inputChainLast;
}
