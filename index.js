const brain = require("brain.js");

// for numbers

// const network = new brain.NeuralNetwork();

// network.train([
//     {input: [0,0,0], output: [0]},
//     {input: [0,0,1], output: [0]},
//     {input: [0,1,1], output: [0]},
//     {input: [1,0,1], output: [1]},
//     {input: [1,1,1], output: [1]}
// ]);

// network.train([
//     {input: [1,2], output: [1]}, //team 2 wins
//     {input: [1,3], output: [1]}, //team3
//     {input: [2,3], output: [0]}, //team2
//     {input: [2,4], output: [1]}, //team 4
//     {input: [1,2], output: [0]},//team 1
//     {input: [1,3], output: [0]},//team 1
//     {input: [3,4], output: [0]}, //team 4
// ]);

// const output = network.run([1,4]);
// console.log(output);


// For String
const data = require("./data.json");
const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}))

network.train(trainingData, { 
    iterations: 200
});
let output;
output = network.run("javascript");
console.log(output);
output = network.run("Brain");
console.log(output);
output = network.run("RAM");
console.log(output);
output = network.run("power");
console.log(output);

