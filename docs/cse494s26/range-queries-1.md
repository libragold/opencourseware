---
title: "Range Queries 1"
---

# Segment Tree
The segment tree is a competitive programmers most versatile tool, and has wide range of uses primarily being used to make intermediate calculations faster. Let's begin with the canonical segment tree problem:

[Dynamic Range Sum Queries (CSES)](https://cses.fi/problemset/task/1648)

To rephrase the problem, we need to efficiently support point updates and range sum queries on an array. The constraints are set so that a naive $O(nq)$ solution will not run, so how do we do better?

The segment tree:
<!-- [Insert video and/or explanation] -->

---
We can also adapt this method to work with any associative operation:

[Dynamic Range Minimum Queries (CSES)](https://cses.fi/problemset/task/1649)

The segment tree can be useful even when queries only need to be supported statically (updates not required). There are data structures we will see later which can process static queries more efficiently for operations like min and max. For supporting range sum, we have already seen prefix sums.

---
In many problems, it is enough to treat the segment tree as a black box up to picking the segment tree's operation:
- [Ant Colony (CF)](https://codeforces.com/contest/474/problem/F)
- [Enemy is Weak(CF)](https://codeforces.com/problemset/problem/61/E?) (may help to solve inversion counting first)
- [Forklift Certified (USACO) - Mode 2](https://usaco.org/index.php?page=viewproblem2&cpid=1524)

DP's optimized with a segment tree:
- [Domino principle (CF)](https://codeforces.com/problemset/problem/56/E)
- [Smooth Subsequence (AC)](https://atcoder.jp/contests/abc339/tasks/abc339_e)

Offline Tricks:
- [Distinct Values Queries (CSES)][https://cses.fi/problemset/task/1734]
- [KQUERY (SPOJ)][https://www.spoj.com/problems/KQUERY/]



