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
(x \lor y) \land (x \lor \neg z) \land (\neg y \lor \neg z)
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
## 3. Union-Find (Disjoint Set Union, DSU)

DSU maintains a partition of nodes into connected components under merges.

[KACTL Implementation](https://github.com/kth-competitive-programming/kactl/blob/main/content/data-structures/UnionFind.h)
- Union by rank or size gives a complexity of $O(\log n)$.
- Use **path compression** as well for near-constant time. (amortized ~ `O(α(n))`) per operation

Practice:
- [Road Construction (CSES)](https://cses.fi/problemset/task/1676)
- [Graph Destruction (AC)](https://atcoder.jp/contests/abc229/tasks/abc229_e?)
- [Ada and Branches (SPOJ)](https://www.spoj.com/problems/ADABRANC/)
---
## 4. Minimum Spanning Trees (MST)

Given a connected weighted undirected graph, an MST is a tree that connects all nodes with minimum sum of all edge weights. 

**Cut property**: For any cut, one of the lightest edges crossing it must be in the MST. Moreover taking any of the lightest edges will result in a MST.
This is the main property used to reason about MST algorithms and problems.

Other properties:

**Cycle property**: For any cycle in the graph, if an edge is the unique maximum, it will not be included in any MST.

**Edge Removal**: The two trees created by removing an edge from an MST are MST's of their respective subgraphs.

Two standard algorithms:

**Kruskal:** Process edges in increasing order by weight and include it in the MST if it connects two different components. Use a DSU to maintain the connected components.

**Prim:**: Start with a single node and grow the MST one edge/vertex at a time. Repeatedly pick the smallest edge connected a vertex in the current tree to one outside it. Use a heap over the cut edges to efficiently query the minimum at each step.

Can you use the cut property to prove the correctness of both algorithms?

Complexity:
- Kruskal: `O(m log m)` (sorting dominates)
- Prim: `O(m log n)` with heap

Practice:
- [Road Reparation (CSES)](https://cses.fi/problemset/task/1675)
- [Moo Network (USACO)](https://usaco.org/index.php?page=viewproblem2&cpid=1211)
- [MST Edge Cost](https://cses.fi/problemset/task/3409)