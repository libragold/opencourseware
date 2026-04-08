---
title: "Dynamic Programming 2"
---

## 1. Bitmask DP
Bitmask DP typically appears when one dimension of the problem is a **small set** of size at most about $20$. The general pattern among these problems is that the dp state involves a bitmaks. This bitmask usually encodes information about a set of items present/taken so far.

Typical complexities:
- $O(n\times2^n)$ when the dp state is just the submask and the transition is to each mask with one element removed
- $O(n^2\times2^n)$ - Frequently we want to store the index of a specific set bit in the mask in addition like in a Traveling Salesman DP.
- $O(3^n)$ when enumerating all submasks over all masks

A couple useful implementation tips:
When storing bitmasks, we normally store each mask as an integer and this integers binary representation corresponds to the bitmask. This lets us use the $O(1)$ bitmasking operations to our benefit. Here are a few common bit tricks (make sure you understand how they work before using them):
- `i & (1 << j)` checks whether the $j$-th bit is set in bitmask $i$.
- `i | (1 << j)` is the bitmask $i$ with the $j$-th bit turned on.
- `i & ~(1 << j)` is the bitmask $i$ with the $j$-th bit turned off.
- `__builtin_popcount` returns the number of set bits in a mask
- `__builtin_clz` returns the number of leading zeroes in a mask

This snippet lets you iterate through all masks and submasks of each mask in $O(3^n)$ time efficiently:
```text
for (int mask = 0; mask < (1 << n); mask++) {
    //process the empty submask of mask
    for (int submask = mask; submask ; submask = (submask - 1) & mask) {
        //process submask of mask
    }
}
```
There are many more useful bitmasking tricks out there, but the ones above are good enough to get started. If you're interested, [cp-algos](https://cp-algorithms.com/algebra/bit-manipulation.html) has a good list of tricks.
 
Problems:
- [Matching (AtCoder)](https://atcoder.jp/contests/dp/tasks/dp_o)
- [Elevator Rides (CSES)](https://cses.fi/problemset/task/1653)
- [Grouping (AtCoder)](https://atcoder.jp/contests/dp/tasks/dp_u)
- [Pokemon Go Go (Kattis)](https://open.kattis.com/problems/pokemongogo)
- [Little Pony and Harmony Chest (CF)](https://codeforces.com/problemset/problem/453/B)
- [Friendship Editing (USACO)](https://usaco.org/index.php?cpid=1499&page=viewproblem2)
---

## 2. Range/Subarray DP

Range DP (Subarray DP) is used when the natural subproblem is a contiguous interval $[l,r]$.
The state is usually something like $dp[l][r]$, and some common transitions are:
- split the interval at some point
- choose the **first/last thing to happen** inside the interval

Typical complexity:
- Often $O(n^3)$ from trying all split points
- Can be $O(n^2)$ if the transition is fast.

Practice:
- [Removal Game (CSES)](https://cses.fi/problemset/task/1097)
- [Mixtures (SPOJ)](https://www.spoj.com/problems/MIXTURES/)
- [Zuma (CF)](https://codeforces.com/problemset/problem/607/B)
- [Greedy Pie Eaters (USACO)](https://usaco.org/index.php?cpid=972&page=viewproblem2)
---
