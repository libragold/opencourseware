---
title: "Graphs 1"
---
# Graphs

Graph problems are mostly about (1) modeling correctly and (2) picking the right tool for the constraints.

A good workflow:
1. **Model** the problem as a graph.
   - What are the nodes?
   - What are the edges?
   - Directed or undirected?
   - Weighted or unweighted?
2. **Estimate constraints**.
   - Let `n` be the number of nodes and `m` the number of edges.
   - Use an adjacency list unless the graph is very dense.
   - Typical targets: `O(n+m)`, `O(m log n)`, or `O(n^2)` depending on constraints.
---

## 1. Modeling Patterns

Before algorithms, make sure you’re building the *right* graph.

Common modeling patterns
- **Grid → graph**: each cell is a node; edges go to neighbors (4-dir / 8-dir); walls block edges.
- **State graph (BFS / shortest path on states)**: node = `(position, extra_state)` such as `(v, mask)` or `(v, parity)`.
- **Constraints → directed edges**: “A must come before B” becomes an edge `A -> B`.
- **Equivalence / grouping**: “in the same component” often points to DSU / BFS / DFS.

Sanity checks
- Directed vs undirected?
- Weighted vs unweighted?
- Is `m` large (up to `2e5`)? Avoid `O(n^2)` methods.
- Are there negative weights? Dijkstra may not apply.
---

## 2. Depth-First Search (DFS)

Depth-First Search explores “as deep as possible” before backtracking.
![image](./images/dfs_backtracking_bw_descend_nogap.gif)

When to use / common patterns
- Finding **connected components** (undirected)
- Reachability / flood fill (including grids)
- Detecting cycles (undirected): look for a back-edge to a visited node that isn’t the parent
- Building DFS orderings (e.g., SCC, or topo via DFS finish times)

Implementation Notes
- **Visited array** prevents revisits.
- **Parent tracking** helps reconstruct paths / build a DFS tree.
- **DFS tree fact (undirected graphs):** DFS defines a rooted **DFS tree** (or forest). Every edge is either a **tree edge** or a **back edge** that connects a node to one of its **ancestors**. In particular, there are no “cross edges” between different DFS subtrees in an undirected DFS.
- Watch out for **recursion depth** (especially in Python). Use an explicit stack if needed.
- If you just need reachability (either DFS or BFS works), DFS is often the quickest to code.

Complexity
- `O(n + m)` time, `O(n)` memory

Example problems:
- [Counting Rooms (CSES)](https://cses.fi/problemset/task/1192)
- [Building Roads (CSES)](https://cses.fi/problemset/task/1666)

---

## 3. Breadth-First Search (BFS)

Breadth-First Search explores in increasing distance from a start node (by “levels”).
![image](./images/bfs_bw_samegraph.gif)

When to use
- Shortest path in **unweighted graphs** (each edge cost = 1)
- Finding minimum number of moves on grids
- Multi-source shortest distances (start from many sources at once)
- Layering / level-by-level processing

Implementation Notes
- **Queue + dist array**: in an unweighted graph, the first time you visit a node you’ve found its shortest distance.
- **Parent array**: reconstruct the shortest path.

Complexity
- `O(n + m)` time, `O(n)` memory

Example problems:
- [Message Route (CSES)](https://cses.fi/problemset/task/1667)

More practice for DFS and BFS:
- [Building Teams (CSES)](https://cses.fi/problemset/task/1668)
- [Subarray Sum Constraints (CSES)](https://cses.fi/problemset/task/3294)
- [Palindromic Paths (CF)](https://codeforces.com/group/KIrM1Owd8u/contest/632003/problem/E)
- [Third Avenue (AC)](https://atcoder.jp/contests/abc184/tasks/abc184_e)
- [Olya and Energy Drinks (CF)](https://codeforces.com/contest/877/problem/D)
---
## 4. Shortest Paths

“Shortest path” depends heavily on edge weights.

Choosing the right tool
- **Unweighted**: BFS
- **Non-negative weights**: Dijkstra (min-heap / `priority_queue`)
- **Negative weights (no negative cycles)**: Bellman–Ford
- **All-pairs, small `n` (~500)**: Floyd–Warshall

Dijkstra (most common)
Works when **all edge weights are >= 0**.
- Maintain `dist[v]` = best known distance
- Use a min-heap priority queue on `(dist, node)`
- Ignore stale heap entries (classic CP trick)

Complexity
- Dijkstra: `O(m log n)` (often written as `O(m log m)` in implementations using `push`-heavy heaps)
- Bellman–Ford: `O(nm)`
- Floyd–Warshall: `O(n^3)`

Example problems:
- [Shortest Routes I (CSES)](https://cses.fi/problemset/task/1671) (check your Dijkstra implementation)
- [Shortest Routes II (CSES)](https://cses.fi/problemset/task/1672) (check your Floyd–Warshall implementation)
- [Shortest Routes III (CSES)](https://cses.fi/problemset/task/1673) (check your Bellman–Ford implementation)

Practice:
- [Flight Discount (CSES)](https://cses.fi/problemset/task/1195)
- [Fine Dining (USACO)](https://usaco.org/index.php?cpid=861&page=viewproblem2)
---

## 5. Topological Sort

Topological sort orders vertices of a directed acyclic graph (DAG) such that for every edge `u -> v`, `u` appears before `v`.

When to use
- Dependencies / prerequisites
- Scheduling with ordering constraints
- Any problem that forms a DAG and asks for an order or DP over dependencies

Key properties
- Only possible for DAGs (no directed cycles)
- Multiple valid orderings may exist
- Two standard methods:
  - **Kahn’s algorithm (BFS-based):** indegree + queue
  - **DFS finish times:** reverse postorder

Cycle detection
- Kahn: if you can’t process all nodes, there is a cycle.
- DFS: recursion-stack technique.

Complexity
- `O(n + m)`

Example problems:
- [Course Schedule (CSES)](https://cses.fi/problemset/task/1679)
- [Commuter Pass (JOI)](https://oj.uz/problem/view/JOI18_commuter_pass) solution may be found on USACO Guide.
