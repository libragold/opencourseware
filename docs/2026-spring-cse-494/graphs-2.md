---
title: "Graphs 2"
---

## 1. Strongly Connected Components

In a directed graph, an SCC is a maximal set of vertices where every vertex can reach every other.

When to use
- “Mutual reachability” in directed graphs
- Compressing a directed graph into a DAG of components (condensation graph)
- 2-SAT (classic application)

Key CP patterns
- SCC compression turns messy directed graphs into a **DAG**, enabling DP/topo solutions.
- Typical algorithms:
  - **Kosaraju:** two DFS passes (on graph and reversed graph)
  - **Tarjan:** one DFS pass with low-link values

Complexity
- `O(n + m)`

Practice:
- [Planets and Kingdoms (CSES)](https://cses.fi/problemset/task/1683)

---

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
- Prim: `O(m log n)` with heap

Practice:
- [Road Reparation (CSES)](https://cses.fi/problemset/task/1675)
