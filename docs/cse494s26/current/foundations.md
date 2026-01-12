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
| $7,500$        | $O(n^2)$                 |
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
- [Concert Tickets](https://cses.fi/problemset/task/1091) *
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

Practice — classic greedy:
- [Kayaking](https://codeforces.com/contest/863/problem/B)
- [Ferris Wheel](https://cses.fi/problemset/task/1090) *
- [Nested Range Check](https://cses.fi/problemset/task/2168)
- [Splitting the Field](https://usaco.org/index.php?page=viewproblem2&cpid=645)

Practice — custom sorting:
- [Prehistoric Programs](https://icpcarchive.github.io/World%20Finals/ICPC%20World%20Finals/2021%20ICPC%20World%20Finals/problems.pdf) (problem H) [submit link](https://www.acmicpc.net/problem/26137) *
- [Boxes](https://codeforces.com/blog/entry/63533#:~:text=1,5)

## 6. Binary Search Beyond Arrays

Binary search is a general technique for solving problems with a monotonic structure.

Common usage:
- Searching for the minimum or maximum value that satisfies a condition
- Turning optimization problems into yes/no feasibility checks

Key idea:
If a condition holds for some value $X$, it often holds for all larger (or smaller) values.

Binary search on the answer is a fundamental competitive programming pattern.

Practice:
- [Packmen](https://codeforces.com/contest/847/problem/E) *
- [Trick Or Treat](https://open.kattis.com/problems/tricktreat)

## More practices

- [Meetings](https://usaco.org/index.php?page=viewproblem2&cpid=967)
- [Fail Fast](https://www.acmicpc.net/problem/28147)