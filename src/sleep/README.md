Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is acceptable.



Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.


Constraints:

1 <= millis <= 1000

---

- **Function definition:** The sleep function is declared as asynchronous (async) and takes one parameter - the number of milliseconds.
- **Using Promise:** Inside the function, a new Promise is created, which delays its resolution using setTimeout.
- **Working mechanism:** The function creates a Promise that will be resolved after the specified number of milliseconds.
- **await operator:** The await operator is used to pause the function execution until the Promise is resolved.