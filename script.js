let inputChain = [];
let typingNum= [];
let inputNums = [];
let inputNum = 0;
let operation = "null";


inputChain.push(inputNum);


const outputCont = document.querySelector('.outputCont');
 
updateOutput();


const buttonsNum = document.querySelectorAll(".numberBtn");



buttonsNum.forEach(button => {
    button.addEventListener("click", () => {
        typingNum = parseInt(button.classList[2].replace("Btn", ""));
        inputNums.push(typingNum);
        inputNum = parseInt(inputNums.join(''));
        console.log("current input number" + "  " + inputNum);
        console.log("the chain of input before operation" + "  "+ inputNums);
        inputChain.push(inputNum);
        updateOutput();
        
    });
});




const buttonsOperation = document.querySelectorAll(".operationBtn")

buttonsOperation.forEach(button => {
    button.addEventListener("click", () => {
        inputNums = [];
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
    inputNums.splice(-1);
    inputChain.splice(-1);
    let inputChainLast = inputChain[inputChain.length - 1];
    console.log("the chain of input before operation" + "  "+ inputNums);

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
    inputNum = [];
    inputNums = [];
    inputChain = [];
    inputChain.push(0);
    console.log(inputChain[inputChain.length - 1]);
    updateOutput();
    
}




function updateOutput() {
    let inputChainLast = inputChain[inputChain.length - 1];
    outputCont.textContent = inputChainLast;
}
