Filter Elements from Array

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.



Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out


Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109


## Step-by-Step Analysis

### 1. Function Signature

The function takes two parameters:

- **arr**: The array we want to filter
- **fn**: A callback function that determines whether an element should be included in the result

### 2. Initialize the Result Array

We create an empty array called `returnedArr` that will store all elements that pass our filter condition.

```jsx
const returnedArr = []

```

### 3. Iterate Through the Input Array

We use a for loop to examine each element of the input array:

```jsx
for(let i = 0; i < arr.length; i++) {
  // ...
}

```

### 4. Apply the Filter Condition

For each element, we call the callback function `fn` with two arguments:

- `arr[i]`: The current element
- `i`: The index of the current element

The callback function returns either true or false, indicating whether the element should be included in the result.

### 5. Conditionally Add Elements to Result

We use the logical AND operator (`&&`) as a shorthand for a conditional expression:

```jsx
fn(arr[i], i) && returnedArr.push(arr[i])

```

This means: "If `fn(arr[i], i)` evaluates to true, then execute `returnedArr.push(arr[i])`."

### 6. Return the Filtered Array

After processing all elements, we return the `returnedArr` containing only the elements that passed our filter condition.

## Time and Space Complexity

**Time Complexity**: O(n) where n is the length of the input array. We iterate through each element of the array exactly once.

**Space Complexity**: O(k) where k is the number of elements that pass the filter condition. In the worst case (when all elements pass), it would be O(n).

## Example Usage

```jsx
// Example: Filter even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// Example: Filter elements at even indices
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const evenIndexFruits = filter(fruits, (fruit, index) => index % 2 === 0);
console.log(evenIndexFruits); // ['apple', 'cherry', 'elderberry']

```

## Comparison to Native Array.filter()

This implementation closely mimics JavaScript's native `Array.prototype.filter()` method. The main differences are:

- Our implementation uses an arrow function with explicit parameters
- Native filter also passes a third parameter (the array itself) to the callback function
- Native filter may have optimizations that our implementation doesn't include

## Potential Improvements

- We could add support for the third parameter (array) in the callback function
- We could add handling for the `this` context for the callback function
- We could add error handling for non-array inputs or non-function callbacks

This implementation demonstrates a good understanding of higher-order functions, array manipulation, and JavaScript's functional programming paradigms.