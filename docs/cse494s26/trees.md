---
title: Trees
description: Definitions, diameter, tree DP patterns, and LCA via binary jumping (binary lifting).
---

## Tree definitions and terminology

### What is a tree?

A **tree** is an undirected graph that is:
- **Connected** (every node can reach every other node)
- **Acyclic** (contains no cycle)

Equivalent definitions which some problems use:
- A graph with **n nodes** is a tree iff it is **connected** and has **n  −1 edges**.
- A graph with **n nodes** is a tree iff it is **acyclic** and has **n-1 edges**.
- A graph is a tree iff between any two nodes in the graph, there is **exactly one simple path**.

A **forest** is a collection of trees.

When a problem explicitly gives you a tree, they usually either give you an adjacency list for unrooted trees or a parent array for rooted trees.

---

### Rooted vs unrooted trees
The above definition of a tree is equivalent to the definition of an unrooted tree. However, it can be beneficial to root a tree at a specific node. You can think of this as drawing the root of the tree at the top, the root's neighbors (children) below, and so on. 

In contest problems, a very standard move is to root an unrooted tree to make the problem easier to reason about.

---

### More Tree Terminology

- **Degree**: number of incident edges to a node
- **Leaf**:
  - In an unrooted tree: nodes with degree $1$
  - In a rooted tree: a node with no children
- **Parent** of a node: the unique node directly above it on the path from it to the root. The root has no parent.
- **Child**: a is a child of b if b is a's parent
- **Ancestor/Descedant**: these definitions extend intuitively from those of parent/child. We say a is an ancestor of b iff a lies on the path from b to the root and a is a descendant of b iff b is an ancestor of a.
- **Depth** of a node (rooted): distance from the root in number of edges
- **Height** of a tree (rooted): maximum depth of a node in the tree
- **Subtree of v** (rooted): v plus all descendants of v
- **Diameter**: the longest distance between any two nodes

In most tree problems, we choose dfs as our traversal and we start from the root.
Some simple examples to get started:
- [Subordinates](https://cses.fi/problemset/task/1674)
- [Cowntagion](https://usaco.org/index.php?page=viewproblem2&cpid=1062)
---
## Tree DP (dynamic programming on trees)

### The general pattern:

Most simple tree DP's are:
- Pick a root (or use the given root)
- Solve each subtree
- Combine child answers at the parent
- We often store many dp values at a node and have to find an efficient way to recover the answers for our parents

Key reason it works:
- Subtrees do not overlap, so you can do clean “child → parent” transitions.

Problems:
- [Independent Set (AC)](https://atcoder.jp/contests/dp/tasks/dp_p)
- [Appleman and Tree (CF)](https://codeforces.com/problemset/problem/461/B)

Compute stuff for every node ("Rerooting DP"):
- [Tree Distances 1/2 (CSES)](https://cses.fi/problemset/task/1132)
- [V-Subtree (AC)](https://atcoder.jp/contests/dp/tasks/dp_v)
---

## Binary jumping/Sparse Table

### Binary jumping
Let's begin with the canonical problem:
[Company Queries I (CSES)](https://cses.fi/problemset/task/1687)

Precompute “jump pointers” so you can move up the tree in powers of two:
- 1 step up
- 2 steps up
- 4 steps up
- 8 steps up
- … and so on

Then any jump of k steps can be decomposed into powers of two (binary representation).

Trees are not the only place this binary jumping idea is useful - we can do this whenever we have a singular pointer from each state.

---

### LCA
In a rooted tree, the **Lowest Common Ancestor (LCA)** of nodes u and v is:
- The deepest node that is an ancestor of both u and v.

How can we use the previous idea to solve:
- [Company Queries II (CSES)](https://cses.fi/problemset/task/1688)
- [Distance Queries (CSES)](https://cses.fi/problemset/task/1135)

---
<!-- ### Sparse Tables

How can we use a sparse table to now be able to query the LCA of two nodes in O(1)?
---

## More Tree Queries

--- -->