---
title: "Dynamic Programming 1"
---

# Dynamic Programming

Dynamic Programming (DP) is about turning a brute force (“try all choices”) into a polynomial solution by **reusing overlapping subproblems** by storing intermediate calculations.

## 0. Starter Problems
Before diving into definitions, here are two “toy” problems that show what DP feels like.

### 0.1 Staircase Ways

You are at step `0` and want to reach step `n`. Each move you can climb **1**, **2**, or **3** steps.
How many distinct ways are there to climb up the staircase?

State idea:
- `dp[i]` = number of ways to reach step `i`.

Transition:
- To reach `i`, your last jump was `+1`, `+2`, or `+3`.

```text
dp[0] = 1
dp[1] = dp[0] = 1
dp[2] = dp[1] + dp[0] = 2
dp[i] = dp[i-1] + dp[i-2] + dp[i-3]   (for i >= 3)
```
Answer:
- `dp[n]`

---

### 0.2 Minimum Cost to Climb Stairs (1, 2, or 3 steps)

**DP Type:** *Optimality DP* (minimize a value)

Same staircase rules (move **1**, **2**, or **3** steps), but each step `i` has a positive cost `c[i]` paid when you land on it.
Find the minimum total cost to reach the top.

State idea:
- `dp[i]` = minimum total cost to land on step `i`.

Transition:
- To land on `i`, you came from `i-1`, `i-2`, or `i-3`, then pay `c[i]`.

```text
dp[0] = c[0]
dp[1] = c[1]
dp[2] = c[2]
dp[i] = min(dp[i-1], dp[i-2], dp[i-3]) + c[i]   (for i >= 3)
```

Answer:
- If reaching the “top” means you can finish from step `n-1`, `n-2`, or `n-3` without paying extra:
```text
answer = min(dp[n-1], dp[n-2], dp[n-3])
```
---

#### Similar examples:
- [Dice Combinations (CSES)](https://cses.fi/problemset/task/1633)
- [Minimizing Coins (CSES)](https://cses.fi/problemset/task/1634)
## 1. DP Mindset and Key Definitions
Dynamic programming is fundamentally about recurrence: we express the solution to a problem in terms of solutions to smaller instances of the same problem. In many problems, the same smaller instances arise repeatedly across different branches of the recursion, creating overlapping subproblems. Memoization (or bottom-up tabulation) avoids recomputing these repeated subproblems by storing their answers the first time they are computed and reusing them whenever needed

Core pieces
- **State**: `dp[state]` stores the answer for that subproblem.
- **Base cases**: smallest states you already know.
- **Transition**: compute `dp[state]` from previously computed states.
- **Answer**: usually `dp[final_state]` (or max/min over a set of states).

Two common styles for implementation
- **Top-down (memoized DFS)**: easy to write, must avoid recursion depth issues in Python, can TLE due to recursion being slower in general.
- **Bottom-up**: explicit order, often faster/safe, more common approach.

Sanity Checks
- Does your dp have a valid ordering? Does each case only reference smaller cases?
- Are you initializing your base cases?

### DP Type: Counting vs Optimality

A quick (and useful) mental split for most dynamic programming related problems:

- **Optimality DP**: each state stores a **best** value (max/min).
  - Think: “What’s the best I can do from here?”
  - Transitions usually use `max(...)` / `min(...)`.
  - Common extras: reconstruction via parent pointers, handling `-inf/+inf`, tie-breaking.

- **Counting DP**: each state stores a **number of ways**.
  - Think: “How many ways can I get here / finish from here?”
  - Transitions usually **sum** contributions from previous states.
  - Common extras: modulo arithmetic, avoiding double-counting (ordered vs unordered), base cases are often “1 way” not “0 cost”.

Sanity checks by type
- **Optimality**: Are you initializing unreachable states to `-inf/+inf` correctly?
- **Counting**: Are you counting each object exactly once? Are you applying `mod` consistently?
---

A good workflow:
1. **Define the state**.
   - What information do you need to uniquely describe a subproblem?
2. **Write the transition**.
   - Which states do you need to transition to in order to ensure you have solved your current state?
   - Ensure every transition is correct and covers all cases.
3. **Decide the order**.
   - Increasing length, increasing index, topological order, etc.
4. **Check complexity**.
   - State count × transitions per state.
---

## 2. Classical DP examples

### 2.1 Maximum Subarray Sum (Kadane)

Goal: maximum sum over all contiguous subarrays.

State idea:
- `best_end[i]` = max subarray sum that **must end at** `i`.

Transition:
- Either extend previous subarray or start fresh at `i`.

```text
best_end[i] = max(a[i], best_end[i-1] + a[i])
answer = max over i of best_end[i]
```

### 2.2 Knapsack

### 2.3 Longest Increasing Subsequence

## 3. Subarray DP

## 4. Bitmask DP




