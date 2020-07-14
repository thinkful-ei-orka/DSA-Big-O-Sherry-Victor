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

// 7. Compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// It returns a sequence of numbers, starting with 0, then 1, and then goes on until num
// is reached, using the fibonacci numbers.
// Linear time - O(n), contines to go through the iterations until the final num has
// been computed.


// 8. An efficient search
// In this example, we return to the problem of searching using a more sophisticated 
// approach than in naive search, above. Assume that the input array is always sorted. 
// What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// O(nlog(n)) - because each time the while loop is iterated over, the amount of possible
// currentIndexes is halved

// 9. Random element
// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Constant - O(1), because the length of the actual array does not matter, and the function will
// grab a random element each time, which takes the same amount of time.

// 10. What Am I?
// What does the following algorithm do? What is the Big O of the following algorithm? 
// Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

// This algorithm figures out whether or not the input is a prime number. 
// Linear O(n) - because the amount of operations is dependent on the value of n.

//11. Tower of Hanoi

// Algorithm in English
// Disk 1 => Rod 3
// Disk 2 => Rod 2
// Disk 1 => Rod 2
// Disk 3 => Rod 3
// Disk 1 => Rod 1
// Disk 2 => Rod 3
// Disk 1 => Rod 3

function hanoi(disks, location, destination, intermediate) {

  if (disks == 0) {
    return;
  }

  hanoi(disks - 1, location, destination, intermediate);

  function movedisks(location, destination) {
    
  }

  hanoi(disks - 1, intermediate, destination, location);


}

// On Rod 1 - the two largest disks remain.
// On Rod 2 - the middle size, the second smallest, and the smallest disk.
// On Rod 3 - remains bare to the world.

// 3 disks = 7 moves. 4 = 15 disks. 5 = 31 disks.

// Exponential - O(2^n) - the number of moves increases greatly based on the 
// number of disks. The more disks, the greater the rate of growth