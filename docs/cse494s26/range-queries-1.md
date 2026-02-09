---
title: "Range Queries 1"
---

# Segment Tree
The segment tree is a competitive programmer's most versatile tool, and has wide range of uses primarily being used to make intermediate calculations faster. Let's begin with the canonical segment tree problem:

[Dynamic Range Sum Queries (CSES)](https://cses.fi/problemset/task/1648)

Suppose we are given an array $a_1, a_2, \dots, a_n$ and must process two types of operations:
- **Point updates**: change the value of a single element $a_i$
- **Range sum queries**: compute an aggregate (such as a sum or minimum) over a subarray $[l, r]$

A naive range query takes $O(n)$ time, since we may need to scan all elements between $l$ and $r$. If we have $q$ such queries, this leads to a total complexity of $O(nq)$, which is far too slow for large inputs.

The key observation behind the segment tree is that **range queries can be decomposed into queries on smaller, precomputed segments**. Instead of recomputing answers from scratch each time, we preprocess the array into a hierarchical structure where: each node represents a contiguous interval of the array and stores the sum over its interval.

We pick ranges arranged in a traditional binary tree where the leaves are elements of the array and each node represents the sum over the leaves in its subtree.

The segment tree:
<!-- [Insert video and/or explanation] -->
<video controls width = "800"> 
<source src="/SegTreeConcept.mp4" type="video/mp4"/>
Your browser doesn't support.
</video>

The new complexity is $O(n\log n + q\log n)$. How are we sure that each operation takes only $O(\log n)$ time?

---
We can also adapt this method to work with any associative operation:

[Dynamic Range Minimum Queries (CSES)](https://cses.fi/problemset/task/1649)

The segment tree can be useful even when queries only need to be supported statically (updates not required). There are data structures we will see later which can process static queries more efficiently for operations like min and max. For supporting static range sums, we have already seen the prefix sum technique.

---
In many problems, it is enough to treat the segment tree as a black box up to picking the segment tree's operation:
- [Ant Colony (CF)](https://codeforces.com/contest/474/problem/F)
- [Enemy is Weak(CF)](https://codeforces.com/problemset/problem/61/E?) (may help to solve inversion counting first)
- [Forklift Certified (USACO) - Mode 2](https://usaco.org/index.php?page=viewproblem2&cpid=1524)

DP's optimized with a segment tree:
- [Domino principle (CF)](https://codeforces.com/problemset/problem/56/E)
- [Smooth Subsequence (AC)](https://atcoder.jp/contests/abc339/tasks/abc339_e)

Offline Tricks:
- [Distinct Values Queries (CSES)](https://cses.fi/problemset/task/1734)
- [KQUERY (SPOJ)](https://www.spoj.com/problems/KQUERY/)



