2626. Array Reduce Transformation

Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.



Example 1:

Input:
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
Example 2:

Input:
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0] * nums[0] = 101
(101) + nums[1] * nums[1] = 105
(105) + nums[2] * nums[2] = 114
(114) + nums[3] * nums[3] = 130
The final answer is 130.
Example 3:

Input:
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.


Constraints:

0 <= nums.length <= 1000
0 <= nums[i] <= 1000
0 <= init <= 1000

___

# Array Reduce Transformation - Step by Step Solution

## Problem Understanding

Let's break down the problem:

- We're given an array of integers (nums), a reducer function (fn), and an initial value (init).
- We need to apply the reducer function to each element of the array sequentially.
- Each time, we pass the result from the previous calculation as the first argument.
- If the array is empty, we simply return the initial value.

## Approach

The reduce operation follows this pattern:

```jsx
result = init
result = fn(result, nums[0])
result = fn(result, nums[1])
...
result = fn(result, nums[n-1])
return result

```

This is essentially what we need to implement manually without using Array.reduce.

## Solution Walkthrough

### 1. Handle the Edge Case

First, we check if the array is empty. If so, we return the initial value.

```jsx
if (!nums.length) return init;

```

### 2. Initialize the Accumulator

We create a variable to hold our accumulated value, starting with the initial value.

```jsx
let acc = init;

```

### 3. Iterate Through the Array

We loop through each element in the array and apply the reducer function.

```jsx
for (let i = 0; i < nums.length; i++) {
  acc = fn(acc, nums[i]);
}

```

### 4. Return the Final Result

After processing all elements, we return the accumulated value.

```jsx
return acc;

```

## Complete Solution

```jsx
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => {
  // Handle empty array case
  if (!nums.length) return init;
  
  // Initialize accumulator with initial value
  let acc = init;
  
  // Process each element
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }
  
  // Return final accumulated value
  return acc;
};

```

## Time and Space Complexity

- **Time Complexity:** O(n) where n is the length of the input array. We need to process each element exactly once.
- **Space Complexity:** O(1) as we only use a single variable (acc) regardless of the input size.

## Interview Notes

In an interview setting, I would emphasize the following points:

- Understanding the problem is crucial - make sure to clarify what the reduce operation does.
- Discuss the edge case (empty array) early to show attention to detail.
- Explain the iterative approach and how it mimics the built-in reduce method.
- Mention that while we're implementing this manually, the built-in Array.reduce would be preferred in real-world scenarios for readability and potential optimizations.
- If asked for alternative implementations, you could mention a recursive approach, though it's less efficient in JavaScript due to lack of tail-call optimization.