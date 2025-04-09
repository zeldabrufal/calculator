let inputChain = [];
let inputNum = 0;
let operation;
inputChain.push(inputNum);


const buttonsNum = document.querySelectorAll(".numberBtn");



buttonsNum.forEach(button => {
    button.addEventListener("click", () => {
        inputNum = parseInt(button.classList[1].replace("Btn", ""));
        inputChain.push(inputNum);
        console.log(inputChain[inputChain.length - 1]);
    });
});

const buttonsOperation = document.querySelectorAll(".operationBtn")

buttonsOperation.forEach(button => {
    button.addEventListener("click", () => {
        operation = button.classList[1].replace("Btn", "");
        console.log(operation);

if (operationFunctions[operation]) {
    operationFunctions[operation]();  
} 
    });
});


const operationFunctions = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};












function add(){


let inputChainLast = inputChain[inputChain.length - 1];
let inputChainSecondLast = inputChain[inputChain.length - 2];
    inputChain.push(inputChainLast + inputChainSecondLast);
    console.log(inputChain[inputChain.length - 1]);
}


function subtract(){

let inputChainLast = inputChain[inputChain.length - 1];
let inputChainSecondLast = inputChain[inputChain.length - 2];
   
    inputChain.push(inputChainSecondLast - inputChainLast);
    console.log(inputChain[inputChain.length - 1]);
}


function multiply(){

let inputChainLast = inputChain[inputChain.length - 1];
let inputChainSecondLast = inputChain[inputChain.length - 2];
   
    inputChain.push(inputChainSecondLast * inputChainLast);
    console.log(inputChain[inputChain.length - 1]);
}

function divide(){

    let inputChainLast = inputChain[inputChain.length - 1];
    let inputChainSecondLast = inputChain[inputChain.length - 2];
       
        inputChain.push(inputChainSecondLast / inputChainLast);
        console.log(inputChain[inputChain.length - 1]);
    }
    
function clear(){
    inputChain = [];
    inputChain.push(0);

    console.log(inputChain[inputChain.length - 1]);
    
}




