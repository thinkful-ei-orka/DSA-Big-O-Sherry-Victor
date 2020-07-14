//1. What is the Big O for this?
//1) Determine the Big O for the following algorithm: 
//You are sitting in a room with 15 people. 
//You want to find a playmate for your dog, preferably of the same breed. 
//So you want to know if anyone out of the 15 people have the same breed as your dog. 
//You stand up and yell out, who here has a golden retriever and would like to be a playdate 
//for my golden. Someone yells - "I do, be happy to bring him over"

//Constant time - O(1)

//2) Determine the Big O for the following algorithm: 
//You are sitting in a room with 15 people. 
//You want to find a playmate for your dog who is of the same breed. 
//So you want to know if anyone out of the 15 people have the same breed as your dog. 
//You start with the first person and ask him if he has a golden retriever. 
//He says no, then you ask the next person, and the next, and the next until you find 
//someone who has a golden or there is no one else to ask.

//Linear time - O(n)

//2. Even or odd
//What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }


// Constant time - O(1), because the algorithm performs a basic math check and returns a single boolean
// One input with one operation

// 3. Are you here?
// What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// Polynomial time - O(n^2), because of the nested loops (hence the ^2), which will essentially
// double the amount of time necessary to execute the function


// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// Linear time - O(n), because the time necessary is dependent on the length of the array
// and will increase in propotion to that

// 5. Naive search
// What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// Linear time - O(n), due to the fact that the algorithm searches through each element in the array
// Worst case being that the element does not exist in the array

// 6. Creating pairs:
// What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// Polynomial - O(n^2) due to the nested loops in the function