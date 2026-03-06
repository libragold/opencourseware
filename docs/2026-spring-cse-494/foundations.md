---
title: "Foundations"
---

# Foundations

This document introduces the core ideas and tools used throughout competitive programming.
The goal is to build strong habits for analyzing problems and choosing efficient solutions.

## 1. How Competitive Programming Problems Are Solved

Competitive programming problems are solved by combining:
1. Careful observation
2. Knowledge of common techniques
3. Awareness of time and memory limits

Successful solutions rarely come from coding immediately.
They come from **understanding structure first**.

## 2. Core Problem-Solving Principles

### 2.1 Blackboxing
Many tools in competitive programming are treated as black boxes.

A black box:
- Has a clear purpose
- Comes with performance guarantees
- Does not require understanding internal implementation

Examples:
- Sorting algorithms
- Binary search
- Standard data structures (`set`, `multiset`, `priority_queue`)

When solving problems, focus on **what a tool provides**, not how it is built.

### 2.2 Generalization
Individual problems are rarely unique.
Most are variations of a small number of patterns.

Examples:
- Pairing objects → sorting + two pointers
- Repeated best-choice decisions → greedy algorithms
- Searching for an optimal value → binary search

The goal is to recognize which known pattern a problem fits.

### 2.3 From Observation to Technique
A common workflow:

1. Analyze constraints and input sizes
2. Make observations about the structure of the problem
3. Translate those observations into known techniques

Algorithms are **consequences of observations**, not the starting point.

## 3. Time Complexity and Feasibility

Before implementing a solution, estimate whether it will run in time.

A common rule of thumb:
- About **$10^8$ operations per second**

Rough feasibility guide ($n$ = input size):

| $n$ upper bound | Possible complexities |
|--------------|-----------------------|
| $10$           | $O(n!)$, $O(n^7)$, $O(n^6)$   |
| $20$           | $O(2^n \cdot n)$, $O(n^5)$      |
| $80$           | $O(n^4)$                 |
| $400$          | $O(n^3)$                 |
| $7{,}500$        | $O(n^2)$                 |
| $7 \cdot 10^4$      | $O(n \sqrt{n})$               |
| $5 \cdot 10^5$      | $O(n \log n)$            |
| $5 \cdot 10^6$      | $O(n)$                  |
| $10^{18}$         | $O(\log^2 n)$, $O(\log n)$, $O(1)$ |

If an approach is too slow, the solution requires a **different idea**, not micro-optimizations.

## 4. Fundamental Data Structures

### 4.1 Vector
A `vector` is a dynamic array that supports:
- Fast random access
- Efficient iteration
- Compatibility with sorting algorithms

Vectors are the default container in competitive programming.

### 4.2 Multiset
A `multiset` stores elements in sorted order and allows duplicates.

Key properties:
- Logarithmic insertion and deletion
- Efficient access to smallest or largest elements
- Supports queries such as “largest value $\leq X$”

Use a multiset when:
- Order matters
- Elements are added and removed dynamically
- You need to repeatedly choose the best valid option

Practice:
- [Concert Tickets](https://cses.fi/problemset/task/1091)
- [Towers](https://cses.fi/problemset/task/1073)

## 5. Greedy Algorithms and Sorting

### 5.1 Greedy Strategy
Greedy algorithms make a locally optimal decision at each step.

They are commonly effective when:
- Decisions do not negatively affect future choices after sorting
- The problem involves pairing, scheduling, or assigning resources

Sorting is often the first step in greedy solutions.

### 5.2 Example Patterns
- Pairing lightest with heaviest → two pointers
- Assigning largest possible valid item → multiset or priority queue

Understanding *why* greedy works is more important than memorizing implementations.

Practice:
- [Kayaking](https://codeforces.com/contest/863/problem/B)
- [Ferris Wheel](https://cses.fi/problemset/task/1090)
- [Nested Range Check](https://cses.fi/problemset/task/2168)
- [Splitting the Field](https://usaco.org/index.php?page=viewproblem2&cpid=645)
- [Prehistoric Programs](https://codeforces.com/gym/104288/problem/H)

## 6. Binary Search Beyond Arrays

Binary search is a general technique for solving problems with a monotonic structure.

Common usage:
- Searching for the minimum or maximum value that satisfies a condition
- Turning optimization problems into yes/no feasibility checks

Key idea:
If a condition holds for some value $X$, it often holds for all larger (or smaller) values.

Binary search on the answer is a fundamental competitive programming pattern.

Practice:
- [Packmen](https://codeforces.com/contest/847/problem/E)
- [Trick Or Treat](https://open.kattis.com/problems/tricktreat)
- [Meetings](https://usaco.org/index.php?page=viewproblem2&cpid=967)
- [Fail Fast](https://www.acmicpc.net/problem/28147)

## 7. Brute Force

Brute force is the simplest approach: try all possibilities.

When to consider brute force:
- The search space is small enough (check constraints carefully)
- No obvious greedy or mathematical structure
- Useful for small subtasks or preprocessing

Key insight:
Even when brute force is too slow for the full problem, it can be:
- A starting point for understanding the problem structure
- A solution for small test cases
- A component of a more sophisticated approach

Always verify that the search space fits within time constraints before implementing.

## 8. Advanced Greedy Techniques

Greedy algorithms extend beyond simple sorting and pairing.

### 8.1 Greedy with Mathematical Structure

Some greedy solutions require deeper observations about the problem structure.
The key is identifying what property makes a greedy choice optimal.

Common patterns:
- Making choices that preserve future flexibility
- Using prefix/suffix information to make informed decisions
- Combining multiple greedy criteria

Practice:
- [Missing Coin Sum](https://cses.fi/problemset/task/2183)
- [Running Miles](https://codeforces.com/contest/1826/problem/D) — demonstrates observation-driven greedy with prefix/suffix preprocessing

## 9. Two Pointers Technique

The two pointers technique uses two indices that traverse an array or sequence in a coordinated way.

When to use:
- The problem involves a contiguous subarray or subsequence
- There's a monotonic property (e.g., if a condition holds for a range, it holds for subranges)
- You need to find pairs or ranges that satisfy a condition

Key idea:
Instead of checking all pairs or ranges explicitly, maintain two pointers that move based on the current state.
This reduces complexity from $O(n^2)$ to $O(n)$ in many cases.

Common patterns:
- Sliding window: maintain a valid window while expanding/contracting
- Meeting in the middle: start from both ends and move toward the center
- Fast and slow pointers: different speeds for different purposes

Practice:
- [Distinct Values Subarrays](https://cses.fi/problemset/task/3420) — classical example
- [Haybale Feast](https://usaco.org/index.php?page=viewproblem2&cpid=767) — standard example with competitive programming flavor
- [Representatives](https://www.spoj.com/problems/KOIREP/)
- [Kth Largest Subarray Sum](https://www.spoj.com/problems/ABA12E/)
## 10. Prefix Sums and Difference Arrays

### 10.1 Prefix Sums

Prefix sums precompute cumulative values to answer range queries quickly.

Canonical example:
Given an array $a$ and queries of the form $(l, r)$, output $a_l + a_{l+1} + \ldots + a_r$ for each query.

Solution:
- Precompute prefix array: $p[i] = a_1 + a_2 + \ldots + a_i$ (with $p[0] = 0$)
- Answer query $(l, r)$: $p[r] - p[l-1]$
- Time: $O(n)$ preprocessing, $O(1)$ per query

Practice:
- [Static Range Sum](https://judge.yosupo.jp/problem/static_range_sum) — canonical problem
- [Maximum Subarray Sum II](https://cses.fi/problemset/task/1644)

### 10.2 Difference Arrays

Difference arrays efficiently apply range updates.

Canonical example:
Given an empty array and updates of the form $(l, r, x)$ meaning "add $x$ to $a_l, a_{l+1}, \ldots, a_r$", output the array after all updates.

Solution:
- Use difference array $d$ where $d[i] = a[i] - a[i-1]$
- For update $(l, r, x)$: add $x$ to $d[l]$, subtract $x$ from $d[r+1]$
- Reconstruct final array: $a[i] = d[1] + d[2] + \ldots + d[i]$
- Time: $O(1)$ per update, $O(n)$ reconstruction

Key insight:
Range updates become point updates in the difference array.

Practice:
- [Modern Art](https://usaco.org/index.php?page=viewproblem2&cpid=744) — 2D difference array

### 10.3 General Pattern

Both techniques rely on the same principle:
- Transform the problem to work with differences or cumulative sums
- Apply updates/queries in the transformed space
- Convert back to the original representation when needed
