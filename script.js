let inputChain = [];
let typingNum= [];
let inputNumString = "";
let inputNum = 0;
let operation = "null";


inputChain.push(inputNum);


const outputCont = document.querySelector('.outputCont');
 
updateOutput();


const buttonsNum = document.querySelectorAll(".numberBtn");



buttonsNum.forEach(button => {
    button.addEventListener("click", () => {
        
        typingNum = button.classList[2].replace("Btn", "");
        inputNumString += typingNum;
        inputNum = parseInt(inputNumString);

        console.log("input num is " + " " + inputNum);

        updateNumEnt();
        
    });
});




const buttonsOperation = document.querySelectorAll(".operationBtn")

buttonsOperation.forEach(button => {
    button.addEventListener("click", () => {

        if (inputNum !== 0) {
            inputChain.push(inputNum);
        }

        console.log("the input chain is" + " " + inputChain);
        operation = button.classList[2].replace("Btn", "");
        console.log(operation);

        inputNumString = "";


        updateOutput();

    });
});

const buttonEqual = document.querySelector(".BtnEqual")

buttonEqual.addEventListener("click", () =>{

    inputChain.push(inputNum);


    if (operationFunctions[operation]) {
        operationFunctions[operation]();  
    } 

    inputNum = inputChain[inputChain.length - 1];
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

const BtnPosNeg = document.querySelector(".BtnPosNeg");


BtnPosNeg.addEventListener("click", () => {

    let inputChainLast = inputChain.pop();      
    let flippedNum = inputChainLast * -1;         
    inputChain.push(flippedNum);
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

console.log("the entire input chain is" + " " + inputChain)
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

    inputNumString = "";
    inputChain = [];
    inputChain.push(0);
    console.log(inputChain[inputChain.length - 1]);
    updateOutput();
    
}







function updateOutput() {
    let inputChainLast = inputChain[inputChain.length - 1];
    outputCont.textContent = inputChainLast;
}

function updateNumEnt() {
    
    outputCont.textContent = inputNum;
}
