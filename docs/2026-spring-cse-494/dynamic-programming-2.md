---
title: "Dynamic Programming 2"
---

## 1. Bitmask DP
Bitmask DP typically appears when one dimension of the problem is a **small set** of size at most about $20$. The general pattern among these problems is that the dp state involves a bitmaks. This bitmask usually encodes information about a set of items present/taken so far.

Typical complexities:
- $O(n\times2^n)$ when the dp state is just the submask and the transition is to each mask with one element removed
- $O(3^n)$ when enumerating all submasks over all masks

Problems:
- [Matching (AtCoder)](https://atcoder.jp/contests/dp/tasks/dp_o)
- [Elevator Rides (CSES)](https://cses.fi/problemset/task/1653)
- [Grouping (AtCoder)](https://atcoder.jp/contests/dp/tasks/dp_u)
- [Pokemon Go Go (Kattis)](https://open.kattis.com/problems/pokemongogo)
- [Little Pony and Harmony Chest (CF)](https://codeforces.com/problemset/problem/453/B)
- [Friendship Editing (USACO)](https://usaco.org/index.php?cpid=1499&page=viewproblem2)
---

## 2. Range DP

Range DP (interval DP) is used when the natural subproblem is a contiguous interval $[l,r]$.
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

<!-- ## 3. Multi-dimensional DP

Many problems need more than one coordinate in the state. It's important to not judge the difficulty of a problem by the number of dimensions in the dp. 

Practice:
- [Candies (AtCoder)](https://atcoder.jp/contests/dp/tasks/dp_m)
- [Two Sets II (CSES)](https://cses.fi/problemset/task/1093)
- [Narrow Art Gallery (Kattis)](https://open.kattis.com/problems/narrowartgallery)
- [Team Building (USACO)](https://usaco.org/index.php?cpid=673&page=viewproblem2)
- [Fair Elections (QOJ / UCUP)](https://qoj.ac/problem/7636) -->
<!-- --- -->
<!-- 
## 4. Other DP Patterns / Grab Bag

There are many important DP problems that do not fit neatly into one of the buckets above, or combine several ideas at once.
This is a good place to show students that the real skill is **modeling the right state**, not memorizing one template.

### Value / line DP

These often look greedy at first but reduce to a simple recurrence after reindexing values.

Practice:
- [Boredom (CF)](https://codeforces.com/problemset/problem/455/A)
- [Hard Problem (CF)](https://codeforces.com/problemset/problem/706/C)
- [Teamwork (USACO)](https://usaco.org/index.php?cpid=863&page=viewproblem2)

Notes:
- **Boredom** is a classic “compress equal values, then run house-robber DP on the value line” problem.
- **Hard Problem** is a good example where the state is tiny but the modeling is everything.
- **Teamwork** is a nice 1D DP over partitions of bounded length. -->
