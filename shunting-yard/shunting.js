import { Stack } from "./stack.js";

const input = "1 + 2 - 3 / 4 ^ 1 + 2";
const precedence = {
  "^": 3,
  "*": 2,
  "/": 2,
  "+": 1,
  "-": 1,
};

function ShuntingConverter(input) {
  const output = new Stack();
  const operator = new Stack();

  const inputArray = input.split(" ");
  console.log(inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    console.log("Input: " + inputArray[i]);
    if (Number(inputArray[i])) {
      console.log("We push " + inputArray[i] + " into output");
      output.push(inputArray[i]);
    } else if (operator.peek() === null) {
      console.log("We push " + inputArray[i] + " to  empty operator");
      operator.push(inputArray[i]);
      console.log(operator.peek().data);
    } else {
      // DER GÅR NOGET GALT MELLEM HER:
      // IF Operator is bigger than...
      console.log(
        "Preceedence: " +
          precedence[inputArray[i]] +
          " vs " +
          precedence[operator.peek().data]
      );
      if (precedence[inputArray[i]] > precedence[operator.peek().data]) {
        //Insterts the new operator in the opertor stack
        console.log("We push " + inputArray[i] + " to operator");
        operator.push(inputArray[i]);
      } else {
        // Removes the operator from operator stack and add to output stack
        // Should LOOP!!!
        // FOR each element in OPERATORS we should compare them with the operator at hand.
        // POP PUSH them if >
        // Insert the operator...

        console.log("We pop operator and push to output");
        const operatorTail = operator.pop();
        console.log("pop this: " + operatorTail.data + " from operatpr");
        console.log("We push: ", operatorTail.data + " to output");
        output.push(operatorTail.data);
        console.log("We procede to push " + inputArray[i] + " to operator");
        operator.push(inputArray[i]);
      }
    }
  }

  logStackData(operator, "operator stack");

  function logStackData(stack, stackName) {
    console.log(stackName + " data");
    let node = stack.tail;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  console.log("output before combine ", output);
  console.log("operator before combine", operator);

  //combineOperatorWithOutpusStack();

  function combineOperatorWithOutpusStack() {
    while (operator.getSize() > 0) {
      console.log("Current size:", operator.getSize());
      const operatorTail = operator.pop().data;
      console.log("op: " + operatorTail);
      output.push(operatorTail); // Uncomment to push to output
    }
  }

  // stacks after loop
  // console.log(output);
  // console.log(operator);

  // const x = reverseStack(output);
  // return stringfy(x);
  // Stringifies the result
}

// const restulString = ShuntingConverter(input);
ShuntingConverter(input);

function reverseStack(output) {
  // new stack
  const reversedStack = new Stack();

  // Iterates output stack and inserts into result stack
  for (let i = output.getSize(); i > output.getSize(); i--) {
    const node = output.getIndex(i);
    // console.log("node to push" + node);
    reversedStack.push(node.data);
  }
  console.log(reversedStack);

  return reversedStack;
}

function stringfy(results) {
  let restulString = "";
  for (let i = 0; i < results.getSize(); i++) {
    console.log("itt " + i);
    const node = results.getIndex(i);
    const nodeData = node.data;
    console.log(nodeData);
    restulString += nodeData + " ";
  }
  console.log("ResultString: " + restulString);
  return restulString;
}

// --------------------------- CALCULATOR ---------------------------------------------------- //

// Takes a stack and returns a number.
function rpnCalculator(expression) {
  console.log("Calculator Running");
  const inputQueue = expression
    .split(" ")
    .map((part) => (isNaN(Number(part)) ? part : Number(part)));
  let resultStack = [];

  console.log("impitQueue " + inputQueue);

  for (const element of inputQueue) {
    // const element = inputQueue.unshift();
    console.log("element of input: ", element);
    if (typeof element == "number") {
      resultStack.push(element);
    } else {
      const num1 = resultStack[0];
      const num2 = resultStack[1];
      console.log("num1 " + num1 + " num2 " + num2 + " operator " + element);
      const result = calculate(num1, num2, element);
      resultStack = [];
      // resultStack.pop();
      // resultStack.pop();
      resultStack.push(result);
      console.log("resstack " + resultStack);
    }
  }
  console.log("Input Queue: " + inputQueue);
  console.log("Result Stack: " + resultStack);
}

function calculate(num1, num2, operation) {
  console.log("calculate: " + num1 + operation + num2);
  switch (operation) {
    case "^":
      return Math.pow(num1, num2);
    default:
      const res = eval(`${num1} ${operation} ${num2}`);
      console.log(res);
      return res;
  }
}

// rpnCalculator("1 2 3 + *");
