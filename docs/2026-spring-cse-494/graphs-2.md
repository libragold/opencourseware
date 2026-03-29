---
title: "Graphs 2"
---

## 1. Strongly Connected Components

In a directed graph, an SCC is a maximal set of vertices where every vertex can reach every other. Upon compressing all SCC's into their respective nodes, the resulting graph is a DAG.

- Turning directed graphs into DAGs enable other techniques we have seen before such as DP/topo sort.
- Algorithms to perform the compression:
  - **Kosaraju:** two DFS passes (on graph and reversed graph)
  - **Tarjan:** one DFS pass with low-link values

- For SCC's and 2-SAT, you can check out the implementation in [KACTL](https://github.com/kth-competitive-programming/kactl/blob/main/content/graph/SCC.h)

Complexity
- `O(n + m)`

Practice:
- [Planets and Kingdoms (CSES)](https://cses.fi/problemset/task/1683)
- [Coin Collector (CSES)](https://cses.fi/problemset/task/1686)
- [Grass Cownoisseur (USACO)](https://usaco.org/index.php?page=viewproblem2&cpid=516)
---

## 2. 2-SAT

A 2-SAT instance in CNF can be stated as a bunch of OR clauses with 2 variables AND'd together. For example a possible instance of 2-SAT is:

Determine whether there is an assignment of truth values to $x$, $y$, and $z$ such that the following statement is true:
$$
(x \lor y) \land (x \lor \neg x) \land (\neg y \lor \neg z)
$$

We can transform 2-SAT by creating an implication graph and determining the SCC's of this graph. For each variable in the 2-SAT instance we create $2$ nodes - one for itself and one for its complement. In the example above, the graph would have $6$ nodes: $x, \neg x, y, \neg y, z, \neg z$.

Then we write each OR clause as an implication and its contrapositive. For example $x \lor y$ is equivalent to $ (\neg x \rightarrow y)$ which is equivalent to  $(\neg y \rightarrow x)$. We draw these two edges as directed edges in the original graph for each of the clauses.

Now, one thing that would clearly prove a 2-SAT instance is unsatisfiable is if for some variable $x$, both $x \rightarrow \neg x$ and $\neg x \rightarrow x$ via some chain of implications. Confirming that this doesn't happen turns out to be sufficient to show that the 2-SAT instance is satisfiable. A rough proof idea of this is that if a variable $x$ implies $\neg x$ via a chain, we set $x$ to be false and $\neg x$ to be true. This assignment will never cause a contradiction to occur due to the nature of how the implication graph is constructed (details to be covered in class).

Problems:
- [Giant Pizza (CSES)](https://cses.fi/problemset/task/1684)
- [Corporate Retreat (Rocky Mountain Regional 2025)](https://rmc25.kattis.com/contests/rmc25/problems/corporateretreat)
- [Coprime Solitaire (AC)](https://atcoder.jp/contests/abc210/tasks/abc210_f)
- [Babysitting (CF)](https://codeforces.com/contest/1903/problem/F)
---
<!-- 
## 2. Union-Find (Disjoint Set Union, DSU)

DSU maintains a partition of nodes into connected components under merges.

When to use
- Connectivity under union operations
- Common use case: “How many components?” after each edge addition
- Can maintain aggregate properties per component (size, min/max, etc.)

Implementation Details
- Use **path compression** + **union by size/rank** for near-constant time.

Complexity
- Amortized ~ `O(α(n))` per operation (effectively constant)

Practice:
- [Road Construction (CSES)](https://cses.fi/problemset/task/1676)

---

## 3. Minimum Spanning Trees (MST)

Given a connected weighted undirected graph, an MST connects all nodes with minimum total edge weight.

When to use
- “Connect everything as cheaply as possible”
- Network design / wiring / roads problems
- Often paired with DSU or a priority queue

Two standard algorithms
- **Kruskal:** sort edges by weight, add if it connects two different components (DSU)
  - Great when you already have an edge list and `m` is manageable.
- **Prim:** grow from a start node using a min-heap over frontier edges
  - Great for dense graphs or adjacency-based input.

Why greedy works (intuition)
MST uses the **cut property**: for any cut, the lightest edge crossing it is safe to take.

Complexity
- Kruskal: `O(m log m)` (sorting dominates)
- Prim: `O( (m+n) log n)` with heap

Practice:
- [Road Reparation (CSES)](https://cses.fi/problemset/task/1675)
-->
