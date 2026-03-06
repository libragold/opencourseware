---
title: "Dynamic Programming 1"
---

# Dynamic Programming

Dynamic Programming (DP) is about turning a brute force into an efficient solution by **reusing overlapping subproblems** and storing intermediate calculations.

## 1. Starter Problems
Before diving into definitions, here are two “toy” problems that show what DP feels like.

### 1.1 Staircase Ways

You are at step $0$ and want to reach step $n$. Each move you can climb **1**, **2**, or **3** steps.
How many distinct ways are there to climb up the staircase?

State idea: $dp[i]$ = number of ways to reach step $i$.

Transition: To reach $i$, your last jump was $+1$, $+2$, or $+3$.

```text
dp[0] = 1
dp[1] = dp[0] = 1
dp[2] = dp[1] + dp[0] = 2
dp[i] = dp[i-1] + dp[i-2] + dp[i-3]   (for i >= 3)
```
Answer: $dp[n]$

---

### 1.2 Minimum Cost to Climb Stairs

Same staircase rules (move **1**, **2**, or **3** steps), but each step $i$ has a positive cost $c[i]$ paid when you land on it. Find the minimum total cost to reach the top.

State idea: $dp[i]$ = minimum total cost to land on step $i$.

Transition: To land on $i$, you came from $i-1$, $i-2$, or $i-3$, then pay $c[i]$.

```text
dp[0] = c[0]
dp[1] = c[1]
dp[2] = c[2]
dp[i] = min(dp[i-1], dp[i-2], dp[i-3]) + c[i]   (for i >= 3)
```

Answer: If reaching the “top” means you can finish from step $n-1$, $n-2$, or $n-3$ without paying extra, then the answer is $min(dp[n-1], dp[n-2], dp[n-3])$

---
Practice:
- [Dice Combinations (CSES)](https://cses.fi/problemset/task/1633)
- [Minimizing Coins (CSES)](https://cses.fi/problemset/task/1634)
- [Grid 1 (AtCoder)](https://atcoder.jp/contests/dp/tasks/dp_h)

## 2. DP Mindset and Key Definitions

Dynamic programming is fundamentally about recurrence: we express the solution to a problem in terms of solutions to smaller instances of the same problem. In many problems, the same smaller instances arise repeatedly across different branches of the recursion, creating overlapping subproblems. Memoization (or bottom-up tabulation) avoids recomputing these repeated subproblems by storing their answers the first time they are computed and reusing them whenever needed

Core pieces
- **State**: `dp[subproblem]` stores the answer for that subproblem.
- **Base cases**: smallest states you already know.
- **Transition**: compute `dp[subproblem]` from previously computed states.
- **Answer**: usually `dp[final_problem]` (or max/min over a set of states).

Two common styles for implementation
- **Top-down (memoized DFS)**: easy to write, must avoid recursion depth issues in Python, can TLE due to recursion being slower in general.
- **Bottom-up**: explicit order, often faster/safe, more common approach.

Sanity Checks
- Does your dp have a valid ordering?
- Does each case only reference smaller cases?
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

## 3. Classical DP examples

### 3.1 Maximum Subarray Sum (Kadane)

Goal: maximum sum over all contiguous subarrays.

State idea:
- `best_end[i]` = max subarray sum that **must end at** `i`.

Transition:
- Either extend previous subarray or start fresh at `i`.

```text
best_end[i] = max(a[i], best_end[i-1] + a[i])
answer = max over i of best_end[i]
```
---
Practice:
- [Maximum Subarray Sum (CSES)](https://cses.fi/problemset/task/1643)
- [Reverse Subarray Sum (Hacker Devils X Soda Code Challenge XI)]
   - Given an array of $10^5$ integers on the range $[-10^9,10^9]$, first you may pick some subarray of the given array and reverse it. Then, you pick any subarray and sum its elements. Find the maximum possible value of this sum.
--- 

### 3.2 Knapsack

You have $n$ items. Item $i$ has weight $w[i]$ and value $v[i]$. You have a capacity $W$. Choose a subset of items with total weight at most $W$ that maximizes total value. Constraints: $1 \le n \le 10^3$, $1 \le W \le 10^4$, $1 \le w[i] \le 10^4$

---
#### Approach 1:

Let $dp[i][x]$ be the maximum value with the first $i$ items in the knapsack with capacity $x$.

Transition:
- Don’t take item $i$: $dp[i][x] = dp[i-1][x]$
- Take item $i$ (if $x \ge w[i]$): $dp[i][x] = dp[i-1][x-w[i]] + v[i]$

All together:
$$
dp[i][x] = \begin{cases}
   \max(dp[i-1][x], dp[i-1][x-w[i]] + v[i]) & \text{ if } x \ge w[i]\\
   dp[i-1][x] & \text{ if } x <  w[i]
\end{cases}
$$ 

Base Cases: $dp[0][0] = 0$, $dp[0][x] = -\infty$

---
#### Approach 2:

While the above approach involves two dimensional dp, traditionally knapsack is implemented with a one-dimensional array. Let $dp[x]$ maintain the best value of a knapsack with capacity $x$ as we process the items. Updates with the $i$-th element happens as follows for all $x$ in **reverse order**:
$$
dp[x] \leftarrow \max(dp[x - w[i]] + v[i], dp[x]) \text{ if } x \ge w[i].
$$

The idea of maintaining a dp table of information and updating it after processing each element of an array is very common.

---

Practice:
- [Book Shop (CSES)](https://cses.fi/problemset/task/1158)
- [Two Sets II (CSES)](https://cses.fi/problemset/task/1093?)

---

### 3.3 Longest Increasing Subsequence

**Problem:** Given an array $a$ of length $n$, find the maximum length of a **strictly increasing** subsequence (not necessarily contiguous).

---

#### Approach 1: Classic $O(n^2)$ DP

State: $dp[i]$ = length of the longest increasing subsequence that **ends at** index $i$.

Transition:
- If we want an increasing subsequence ending at $i$, the previous element can be any $j<i$ with $a[j] < a[i]$.
- Compute:
$dp[i] = 1 + \max_{0 \le j < i,\ a[j] < a[i]} dp[j]$
- If there is no valid $j$, then $dp[i]=1$.

Base case: $dp[i] = 1$ for all $i$ (the subsequence consisting of just $a[i]$).

Answer: $\max_{i} dp[i]$

**Complexity:**
- Time: $O(n^2)$
- Memory: $O(n)$

**Reconstruction (optional):**
- Store a `parent[i]` pointer. Whenever $dp[i]$ is improved using some $j$, set `parent[i] = j`.
- Start from an index $i$ achieving $\max dp[i]$ and follow `parent` pointers backward.

---

#### Approach 2: $O(n\log n)$ “tails” method

This method computes the **length** of LIS efficiently (and can be extended to reconstruct the sequence).

**Key idea (definition of tails):**
- Maintain an array $tails$ where:
  - $tails[k]$ is the **smallest possible ending value** of a strictly increasing subsequence of length $k$ seen so far.

**Invariant:**
- $tails$ is increasing as an array of values, and smaller tail values are always better (they make it easier to extend later).

**Update rule for each value $a[i]$:**
- Find the smallest index $p$ such that: $tails[p] \ge a[i]$
- If such $p$ exists, replace $tails[p]$ with $a[i]$.
- If no such $p$ exists (i.e., $a[i]$ is larger than all tails), append $a[i]$ to $tails$.

This is correct because:
- Replacing $tails[p]$ with a smaller value keeps a subsequence of length $p$ possible, but makes its ending value as small as possible.
- Appending corresponds to finding a longer increasing subsequence than any previously seen.

**Answer:**
$|tails|$

**Complexity:**
- Each update uses binary search on $tails$: $O(\log n)$
- Total time: $O(n\log n)$
- Memory: $O(n)$

**Strict vs nondecreasing detail:**
- Strictly increasing LIS uses the first index with $tails[p] \ge x$ (a “lower bound”).
- Nondecreasing LIS uses the first index with $tails[p] > x$ (an “upper bound”).

**Reconstruction (optional):**
- If you also want the actual LIS (not just length), maintain:
  - an index array tracking which original index produced each tail length, and
  - `parent[i]` pointers to backtrack the chosen subsequence.

---

Practice:
- [Increasing Subsequence (CSES)](https://cses.fi/problemset/task/1145)
- [Mysterious Present (CF)](https://codeforces.com/problemset/problem/4/D)
- [Candy Machine (Baltic IOI)](https://dmoj.ca/problem/btoi09p2)
- [Leaping Tak (AC)](https://atcoder.jp/contests/abc179/tasks/abc179_d)
- [Jump Game (LC)](https://leetcode.com/problems/jump-game-vi/description/)
- [Antimatter (CF)](https://codeforces.com/problemset/problem/383/D)

A good source of DP problems to begin with can be found on [USACO Guide](https://usaco.guide/gold/intro-dp?lang=cpp). They also link to this beginner friendly [contest](https://codeforces.com/gym/100135).
