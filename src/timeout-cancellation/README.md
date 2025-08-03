2715. Timeout Cancellation

Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
Initially, the execution of the function fn should be delayed by t milliseconds.

If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.



Example 1:

Input: fn = (x) => x * 5, args = [2], t = 20
Output: [{"time": 20, "returned": 10}]
Explanation:
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.
Example 2:

Input: fn = (x) => x**2, args = [2], t = 100
Output: []
Explanation:
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x**2, [2], 100);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
Example 3:

Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
Output: [{"time": 30, "returned": 8}]
Explanation:
const cancelTimeMs = 100;
const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.


Constraints:

fn is a function
args is a valid JSON array
1 <= args.length <= 10
20 <= t <= 1000
10 <= cancelTimeMs <= 1000


---


- **Function Definition:** The cancellable function is created to manage delayed execution of other functions. It takes three key parameters:
    - fn - the function to be executed with a delay
    - args - an array of arguments that will be passed to the fn function
    - t - delay time in milliseconds before executing fn
- **Timer Creation:** Inside cancellable, setTimeout is used to schedule the execution of the fn function after the specified time t. It's important to save the timer identifier in the timeOutId variable for possible subsequent cancellation.
- **Argument Application:** The apply method is used instead of a simple call for correct argument passing:
    - The first parameter null indicates the this context (in this case, the global object)
    - The second parameter args passes all arguments from the array to the fn function as separate parameters
- **Return of Cancellation Function:** cancellable returns a new function (closure) that cancels the scheduled execution of fn when called. This closure function has access to the timer identifier from the outer scope.
- **Cancellation Mechanism:** The returned function accepts an optional cancelFn parameter (which is not used in this implementation) and calls clearTimeout to cancel the scheduled execution:
    - clearTimeout immediately cancels the timer with the specified identifier
    - After calling clearTimeout, the scheduled fn function will not be executed
- **Working Logic in Detail:** The entire function works according to the following algorithm:
    - When cancellable is called, a timer is created
    - A cancellation function is returned
    - If the cancellation function is called before t milliseconds expire, fn will not execute
    - If the cancellation function is not called or is called after t milliseconds, fn will execute with the args arguments
- **Usage Examples:** The function is particularly useful in the following scenarios:
    - Cancelling scheduled notifications
    - Implementing a "debounce" mechanism to prevent frequent function calls
    - Cancelling operations if the user changes their mind before execution
    - Implementing timeouts for asynchronous operations
- **Optimization and Efficiency:** The solution uses built-in JavaScript mechanisms:
    - setTimeout and clearTimeout are optimized in JavaScript engines
    - Higher-order functions and closures provide a clean, functional approach
    - No additional Promise objects are created, which minimizes overhead
    - Only the necessary memory is used to store the timer identifier