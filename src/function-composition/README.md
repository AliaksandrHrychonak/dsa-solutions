2629. Function Composition


Given an array of functions `[f1, f2, f3, ..., fn]`, return a new function `fn` that is the **function composition** of the array of functions.

The **function composition** of `[f(x), g(x), h(x)]` is `fn(x) = f(g(h(x)))`.

The **function composition** of an empty list of functions is the **identity function** `f(x) = x`.

You may assume each function in the array accepts one integer as input and returns one integer as output.

**Example 1:**

```
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65

```

**Example 2:**

```
Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000

```

**Example 3:**

```
Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
```

**Constraints:**

- `1000 <= x <= 1000`
- `0 <= functions.length <= 1000`
- all functions accept and return a single integer

---

## Step-by-Step Solution for Function Composition:

Here's a detailed analysis of the proposed solution for the function composition problem as you would explain it in an interview:

```jsx
const compose = (functions) => {
    return (x) => {
        return functions.reduceRight((acc, cur) => {
            return cur(acc);
        }, x)
    }
};
```

### 1. Understanding the Problem

The task requires implementing a function composition that takes an array of functions and returns a new function representing their composition. The composition of functions [f, g, h] means f(g(h(x))).

### 2. Solution Analysis

- **Outer function:** `compose` takes an array of functions and returns a function that accepts an initial value x.
- **Inner function:** The returned function applies the composition of all functions from the array to the value x.
- **reduceRight method:** The key element of the solution, which processes the array of functions from right to left.

### 3. Step-by-Step Explanation

1. We define the `compose` function that takes an array of functions.
2. `compose` returns a new function that takes an argument x.
3. Inside this returned function, we use `functions.reduceRight()`, which:
- Starts with the initial value x (second argument of reduceRight)
- Applies functions from the array right to left (that's why we use reduceRight instead of reduce)
- The accumulator (acc) stores the intermediate result
- The current function (cur) is applied to the accumulator at each step

### 4. Execution Example

Let's consider the example from the problem: `functions = [x => x + 1, x => x * x, x => 2 * x]`, `x = 4`

```jsx
// Step 1: Start with x = 4
// functions.reduceRight iterates through the array from right to left:

// Step 2: Apply the last function x => 2 * x
// cur = x => 2 * x
// acc = 4
// cur(acc) = 2 * 4 = 8

// Step 3: Apply the middle function x => x * x
// cur = x => x * x
// acc = 8
// cur(acc) = 8 * 8 = 64

// Step 4: Apply the first function x => x + 1
// cur = x => x + 1
// acc = 64
// cur(acc) = 64 + 1 = 65

// Final result: 65
```

### 5. Time and Space Complexity

- **Time complexity:** O(n), where n is the number of functions in the array, as we process each function exactly once.
- **Space complexity:** O(1) for the algorithm itself, as we don't create additional data structures dependent on the input size.

### 6. Advantages of the Solution

- **Elegance:** The use of `reduceRight` makes the code concise and readable.
- **Functional approach:** The solution uses principles of functional programming.
- **Efficiency:** The solution has optimal time and space complexity.

### 7. Edge Case Handling

If the array of functions is empty, the `reduceRight` method will simply return the initial value x, which meets the requirement to return the identity function f(x) = x.

### 8. Conclusion

This solution effectively uses JavaScript capabilities to create a function composition. Using the `reduceRight` method ensures the correct order of function application and makes the code concise. The solution correctly handles all required cases, including an empty array of functions.