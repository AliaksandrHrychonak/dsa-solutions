2666. Allow One Function Call

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
Example 2:

Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called


Constraints:

calls is a valid JSON array
1 <= calls.length <= 10
1 <= calls[i].length <= 100
2 <= JSON.stringify(calls).length <= 1000


---

# Problem: Allow One Function Call

We are given a problem where we need to write a wrapper function `once` that takes a function `fn` and returns a new function. The new function should behave the same as the original one, but only execute once. Subsequent calls should return `undefined`.

## Understanding the Problem:

1. We need to create a wrapper function `once`
2. The function `once` takes another function `fn` as an argument
3. The function `once` returns a new function that:
- Returns the result of executing the original function `fn` on the first call
- Returns `undefined` on subsequent calls without executing `fn`

## Approach to Solution:

To solve this problem, we can use a closure to keep track of whether the function has already been called.

### Solution Steps:

1. Create a function `once` that takes a function `fn`
2. Inside `once`, create a counter variable to track the number of calls
3. Return a new function that:
- Increments the call counter
- Checks if this is the first call (counter == 1)
- If it's the first call, executes the original function and returns its result
- If it's not the first call, returns `undefined`

## Implementation:

```jsx
/**
 * @param {Function} fn
 * @return {Function}
 */
const once = (fn) => {
  let countCall = 0;
  
  return (...args) => {
    countCall++;
    return countCall === 1 ? fn(...args) : undefined;
  };
};

```

## Solution Breakdown:

1. **Closure:** We use a closure to maintain the `countCall` variable between calls to the returned function.
2. **Call Counter:** The `countCall` variable starts at 0 and increments by 1 with each call.
3. **Spread Operator:** We use `...args` to pass all arguments given to our function to the original function `fn`.
4. **Ternary Operator:** We check if the current call is the first one. If yes, we call `fn(...args)`, otherwise we return `undefined`.

## Testing the Solution:

```jsx
// Example 1
let fn = (a, b, c) => (a + b + c);
let onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined, fn is not called

// Example 2
fn = (a, b, c) => (a * b * c);
onceFn = once(fn);
console.log(onceFn(5, 7, 4)); // 140
console.log(onceFn(2, 3, 6)); // undefined, fn is not called
console.log(onceFn(4, 6, 8)); // undefined, fn is not called

```

## Time and Space Complexity:

1. **Time Complexity:** O(1) - checking the counter and possibly calling the function are constant time operations.
2. **Space Complexity:** O(1) - we only store the call counter and a reference to the original function.

## Alternative Solution:

We could also use a boolean variable instead of a counter:

```jsx
const once = (fn) => {
  let called = false;
  
  return (...args) => {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
};
```