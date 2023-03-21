
// function (){
//     console.log("You have been razzled!")    
// }
// razzle(); 

function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`); 
}


// function saturdayFun(); {
//     if () {
//         return "This Saturday, I want to" 
//     } else {
//         return 
//     }

// const fn = function mondayWork(activity = "go to the office") 

// fn();

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`; 
}


function wrapAdjective(prompt = "*"){
    function result(adjective){
        return `You are ${prompt}${adjective}${prompt}!`
    }
    return result
}


// function wrapAdjective(parameter = "*") {
//     const part1 = "You are"
//     return function innerFunction(paremeter2 = "special") {
// return `${part1} ${parameter}${paremeter2}${parameter}!`
//     };
// }
