// 1- Create a function that takes the age in years and returns the age in days.

function calcDays (age) {
    const result = age * 365;
    return result
};

// console.log(`1-`, calcDays(15));

// 2- Create a function that takes an array of numbers and returns the smallest number in the set.

function findSmallestNum(...numbersList) {
    let smallest = numbersList[0];
    for (let i=0; i<numbersList.length; i++) {
        if (numbersList[i] < smallest) {
            smallest = numbersList[i]
        }
    }
    return smallest
}

// console.log('smaller', findSmallestNum(5,-5,0,4,23,-100));

// 3- Create a function that takes any non-negative number as an array and return it with its digits in descending order. Descending order is when you sort from highest to lowest.

function descOrderList(...numbers) {
    const positiveNums = []
    for (let num of numbers) {
        if (num>=0) {
            positiveNums.push(num)
        }
    }
    console.log(positiveNums);
    for (let i=0; i<positiveNums.length; i++) {
        for(let j=0; j<positiveNums.length-i-1; j++) {
            if (positiveNums[j] < positiveNums[j+1]) {
                [positiveNums[j+1], positiveNums[j]] = [positiveNums[j], positiveNums[j+1]]
                console.log(positiveNums);
            }
        }
    }
    return positiveNums
}

// console.log(descOrderList(5, 14, 0, 12, 1));


// 4- Create a function that takes an array of numbers and returns the average of this numbers.

function calcAvg(...nums) {
    let totalNums = 0;
    for (let num of nums) {
        totalNums += num
    }
    return totalNums/nums.length
}

console.log(calcAvg(5, 12, 30, 1));

/*
5- what is the output of 
    Console.log( []  == [] )
    Console.log( {} == {} )
    And explain your answer
*/

/*
    -- Answer => 
    1- false
    2- false
    reason: beacouse in javascript array and objects are reference values, which means when we declare new object or new array it 
    stores in heap and we cannot find same addresses for two variables 
*/

/*
6- what is the output of this code with explaination:

    function main() {
        console.log("A");
        setTimeout(function print() {
            console.log("B");
        }, 0);
        console.log("C");
    }
    main();

    # Answer: 
    - A
    - C
    - B

    because setTimeout is an Asynchronous callback function, which never handled with call stack, 
    instead function added in web-apis and wait till time over then web-api add the function in event queue 
    then function takes its position to being executed (first in => first out)

*/

/*
7- what is the output of this code with explaination
    var num = 8;
    var num = 10;
    console.log(num);

    # Answer:
        output => 10
        because var allows us declare same variable several times and overwrite previous one, and for this reason developers use let, const instead to avoid such this proplems
*/

/*
8- what is the output of this code with explaination
    function sayHi() {
        console.log(name);
        console.log(age);
        var name = 'Ayush';
        let age = 21;
    }
    sayHi();

    # Answer:
    1- undefined -> when we define variable with var keyword, varible being hoisted and take its position in memory but with undefined value, 
                   untill javascript reaches to this line, variable value would be assigned to variable
    2- reference error -> when we use let, const keywords, variable being hosted also, but without value, 
                    The block of code is aware of the variable, but it cannot be used until it has been declared

*/
