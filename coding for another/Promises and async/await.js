/*Explain asynchronous programming in JavaScript using Promises and async/await with examples.*/

let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data Loaded"), 1000);
});

p.then(result => {
    console.log(result);
}).catch(err => {
    console.log("Error:", err);
});


async function loadData() {
    let result = await p;
    console.log(result);
}

loadData();